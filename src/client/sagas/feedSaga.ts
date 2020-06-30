import {take, put, call, delay, all} from "redux-saga/effects";
import {
	startFeed,
	startFeedFulfilled,
	stopFeed,
	stopFeedFulfilled,
	setEmittedEvent,
	startFeedRejected,
	stopFeedRejected,
	setHashtag,
	connectToFeedRejected,
	connectToFeedFulfilled,
} from "../actions/feedActions";
import {JsonResponse, ParsedJsonResponsePayload} from "../types/types";
import {workerSocketConnect} from "./socketGenerators";
import {_select} from "./selectors";
import {clearEchoes} from "../actions/echoActions";

function* workerStartFeed({hashtag, password}: ReturnType<typeof startFeed>) {
	try {
		const res = yield call(fetch, `${process.env.SERVER_URL}/api/feed/start`, {
			method: "POST",
			body: JSON.stringify({hashtag, password}),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (res.ok) {
			yield put(setHashtag(hashtag));

			const data: JsonResponse = yield call([res, "json"]);

			const {emittedEvent}: ParsedJsonResponsePayload = JSON.parse(data.payload as string);

			yield put(startFeedFulfilled());
			yield put(setEmittedEvent(emittedEvent));
			yield put(clearEchoes());
		} else {
			const data: JsonResponse = yield call([res, "json"]);

			const {message}: ParsedJsonResponsePayload = JSON.parse(data.payload as string);

			if (message === "Incorrect password") {
				return;
			} else {
				yield put(startFeedRejected("Couldn't connect to the feed server."));
			}
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

const workerGetHashtag = async () => {
	try {
		const res = await fetch(`${process.env.SERVER_URL}/api/feed/hashtag`);

		if (res.ok) {
			const data: JsonResponse = await res.json();

			return JSON.parse(data.payload as string).hashtag;
		} else {
			console.log("Couldn't get hashtag");
		}
	} catch (e) {
		console.log(e);
	}
};

const workerGetEmittedEvent = async () => {
	try {
		const res = await fetch(`${process.env.SERVER_URL}/api/feed/emitted-event`);

		if (res.ok) {
			const data: JsonResponse = await res.json();

			return JSON.parse(data.payload as string).hashtag;
		} else {
			console.log("Couldn't get the emitted event");
		}
	} catch (e) {
		console.log(e);
	}
};

function* workerConnectToFeed() {
	try {
		const res = yield call(fetch, `${process.env.SERVER_URL}/api/feed/hashtag`);
		if (res.ok) {
			const [hashtag, emittedEvent] = yield all([
				call(workerGetHashtag),
				call(workerGetEmittedEvent),
			]);

			yield put(setHashtag(hashtag));
			yield put(setEmittedEvent(emittedEvent));
			yield put(connectToFeedFulfilled());
			yield call(workerSocketConnect);
		} else {
			yield put(connectToFeedRejected("Couldn't connect to feed"));
		}
	} catch (e) {
		yield put(connectToFeedRejected("Couldn't connect to feed"));
		console.log(e);
	}
}

function* feedSaga() {
	yield take("CONNECT_TO_FEED");

	yield call(workerConnectToFeed);

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
