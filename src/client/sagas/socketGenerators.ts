import {eventChannel} from "redux-saga";
import {take, spawn, put, call} from "redux-saga/effects";
import {_select, getEmittedEvent} from "./selectors";
import echoConverter from "../utils/echoConverter";
import {Echo} from "../components/echo/Echo";
import {addSingleEcho} from "../actions/echoActions";
import {
	closeSocketConnection,
	openSocketConnection,
	openSocketConnectionRejected,
	closeSocketConnectionRejected,
} from "../actions/socketActions";
import socketService from "../utils/socketService";

const SERVER_URL = process.env.SERVER_URL && "";

export function* subscribe(socket: SocketIOClient.Socket) {
	const emittedEvent = yield* _select(getEmittedEvent);

	if (!emittedEvent) throw new Error("No emitted event found in Redux store.");

	return eventChannel(emit => {
		const storeAsEcho = (data: any) => {
			/* console.log(data);
			console.log(JSON.stringify(data)); */
			const echo = echoConverter("twitter", data);
			emit(addSingleEcho(echo as Echo));
		};

		socket.on(emittedEvent, storeAsEcho);
		socket.on("connect", () => emit(openSocketConnection(socket)));
		socket.on("disconnect", () => emit(closeSocketConnection()));
		socket.on("connect_error", () =>
			emit(openSocketConnectionRejected("Socket connection couldn't be established."))
		);

		return () => {
			socket.close();
			console.log("Socket connection was closed!!!");
		};
	});
}

export function* workerSocketListen(socket: SocketIOClient.Socket) {
	const emittedEvent = yield* _select(getEmittedEvent);

	const channel = yield call(subscribe, socket);

	while (true) {
		const action:
			| ReturnType<typeof openSocketConnection>
			| ReturnType<typeof closeSocketConnection>
			| ReturnType<typeof closeSocketConnectionRejected> = yield take(channel);

		if (action.type === "CLOSE_SOCKET_CONNECTION") socketService.close(socket, emittedEvent);

		yield put(action);
	}
}

export function* workerSocketConnect() {
	const socket: SocketIOClient.Socket | null = yield call(
		[socketService, socketService.connect],
		"/"
	);

	if (!socket) throw new Error("Socket connection couldn't be established.");

	yield spawn(workerSocketListen, socket);
}
