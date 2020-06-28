import {take, put, call, delay} from "redux-saga/effects";
import {
	startFeed,
	startFeedFulfilled,
	stopFeed,
	stopFeedFulfilled,
	setEmittedEvent,
	startFeedRejected,
	stopFeedRejected,
	setHashtag,
} from "../actions/feedActions";
import {JsonResponse, ParsedJsonResponsePayload} from "../types/types";
import {workerSocketConnect} from "./socketGenerators";
import {_select} from "./selectors";

function* workerStartFeed({hashtag}: ReturnType<typeof startFeed>) {
	try {
		yield put(setHashtag(hashtag));

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

			yield put(startFeedFulfilled());
			yield put(setEmittedEvent(emittedEvent));
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
	const action: ReturnType<typeof startFeed> = yield take("START_FEED");

	yield call(workerStartFeed, action);

	yield call(workerSocketConnect);

	while (true) {
		const action: ReturnType<typeof startFeed> | ReturnType<typeof stopFeed> = yield take([
			"START_FEED",
			"STOP_FEED",
		]);

		if (action.type === "START_FEED") {
			yield call(workerStartFeed, action);

			yield call(workerSocketConnect);
		} else {
			yield call(workerStopFeed);
		}

		yield delay(3000);
	}
}

export default feedSaga;
