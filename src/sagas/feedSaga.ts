import {take, takeEvery, put, call, fork} from "redux-saga/effects";
import {
	startFeed,
	startFeedFulfilled,
	setHashtag,
	stopFeedFulfilled,
	setEmittedEvent,
	startFeedRejected,
	stopFeedRejected,
} from "../actions/feedActions";
import {Hashtag, JsonResponse, ParsedJsonResponsePayload, SocketUri} from "../types/types";
import {
	openSocketConnection,
	openSocketConnectionFulfilled,
	openSocketConnectionRejected,
} from "../actions/socketActions";

function* workerStartFeed({hashtag}: ReturnType<typeof startFeed>) {
	try {
		yield put(setHashtag(hashtag as Hashtag));

		const res = yield call(fetch, `${process.env.SERVER_URL}/api/feed/start`, {
			method: "POST",
			body: JSON.stringify({hashtag}),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (res.ok) {
			const data: JsonResponse = yield call([res, "json"]);

			const {emittedEvent}: ParsedJsonResponsePayload = JSON.parse(data.payload as string);

			if (!process.env.SERVER_URL)
				throw new Error("Can't find server URL enviroment variable");

			yield put(startFeedFulfilled());
			yield put(setEmittedEvent(emittedEvent));
			yield put(openSocketConnection(process.env.SERVER_URL as string));
		} else {
			yield put(startFeedRejected("Couldn't connect to the feed server."));
		}
	} catch (e) {
		console.log(e);
		yield put(startFeedRejected("Couldn't connect to the feed server."));
	}
}

function* workerStopFeed() {
	try {
		const res = yield call(fetch, `${process.env.SERVER_URL}/api/feed/stop`);
		if (res.ok) {
			yield put(stopFeedFulfilled());
		} else {
			yield put(
				stopFeedRejected("Something went wrong while trying to stop the feed server")
			);
		}
	} catch (e) {
		console.log(e);
	}
}

function* feedSaga() {
	yield takeEvery("START_FEED", workerStartFeed);
	yield takeEvery("STOP_FEED", workerStopFeed);

	/* yield take(["OPEN_SOCKET_CONNECTION", "START_FEED_REJECTED"]);

		const openSocketConnectionAction: ReturnType<typeof openSocketConnection> = yield take(
			"OPEN_SOCKET_CONNECTION"
		);
		const socketTask = yield fork(workerOpenSocketConnection, openSocketConnectionAction);

		yield takeEvery("START_FEED_REJECTED", () => socketTask.cancel()); */
}

export default feedSaga;
