import {takeEvery, put, call} from "redux-saga/effects";
import {SocketUri} from "../types/types";
import {
	openSocketConnection,
	openSocketConnectionFulfilled,
	openSocketConnectionRejected,
} from "../actions/socketActions";
import io from "socket.io-client";

function* workerCloseSocketConnection() {}

function* workerOpenSocketConnection({socketUri}: ReturnType<typeof openSocketConnection>) {
	const connect = (socketUri: SocketUri): SocketIOClient.Socket => {
		const socket = io(socketUri);
		socket.on("connect", () => console.log("Client connected!"));
		return socket;
	};

	try {
		const socket: SocketIOClient.Socket = yield call(connect, socketUri);
		yield put(openSocketConnectionFulfilled(socket));
	} catch (e) {
		console.log(e);
		yield put(openSocketConnectionRejected("Socket connection couldn't be opened."));
	}
}

function* socketSaga() {
	yield takeEvery("OPEN_SOCKET_CONNECTION", workerOpenSocketConnection);
	yield takeEvery("START_FEED_REJECTED", workerCloseSocketConnection);
}

export default socketSaga;
