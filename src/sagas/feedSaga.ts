import {take, fork, put, call} from "redux-saga/effects";
import {
	startFeed,
	startFeedFulfilled,
	setHashtag,
	stopFeed,
	stopFeedFulfilled,
	setEmittedEvent,
	startFeedRejected,
	stopFeedRejected,
} from "../actions/feedActions";
import {Hashtag, JsonResponse, ParsedJsonResponsePayload} from "../types/types";
import socketService from "../utils/socketService";
import {subscribe} from "./socketGenerators";
import {
	openSocketConnectionRejected,
	openSocketConnection,
	closeSocketConnection,
} from "../actions/socketActions";
import {getEmittedEvent, _select} from "./selectors";

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

			yield put(startFeedFulfilled());
			yield put(setEmittedEvent(emittedEvent));
			/* yield put(openSocketConnection(process.env.SERVER_URL as string)); */
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

function* workerSocketListen(socket: SocketIOClient.Socket) {
	const emittedEvent = yield* _select(getEmittedEvent);

	const channel = yield call(subscribe, socket);

	while (true) {
		const action:
			| ReturnType<typeof openSocketConnection>
			| ReturnType<typeof closeSocketConnection> = yield take(channel);

		if (action.type === "CLOSE_SOCKET_CONNECTION") socketService.close(socket, emittedEvent);

		yield put(action);
	}
}

function* feedSaga() {
	while (true) {
		const action: ReturnType<typeof startFeed> | ReturnType<typeof stopFeed> = yield take([
			"START_FEED",
			"STOP_FEED",
		]);

		if (action.type === "START_FEED") {
			yield call(workerStartFeed, action);

			const socket: SocketIOClient.Socket | null = yield call(
				[socketService, socketService.connect],
				process.env.SERVER_URL!
			);

			if (!socket) throw new Error("Socket connection couldn't be established.");

			yield fork(workerSocketListen, socket);
		} else {
			yield call(workerStopFeed);
		}
	}
}

export default feedSaga;
