import {eventChannel} from "redux-saga";
import {_select, getEmittedEvent} from "./selectors";
import echoConverter from "../utils/echoConverter";
import {Echo} from "../components/Echo";
import {addSingleEcho} from "../actions/echoActions";
import {closeSocketConnection, openSocketConnection} from "../actions/socketActions";

export function* subscribe(socket: SocketIOClient.Socket) {
	const emittedEvent = yield* _select(getEmittedEvent);

	if (!emittedEvent) throw new Error("No emitted event found in Redux store.");

	return eventChannel(emit => {
		const storeAsEcho = (data: any) => {
			const echo = echoConverter("twitter", data);
			emit(addSingleEcho(echo as Echo));
		};

		socket.on(emittedEvent, storeAsEcho);
		socket.on("connect", () => emit(openSocketConnection(socket)));
		socket.on("disconnect", () => emit(closeSocketConnection()));

		return () => {
			socket.close();
			console.log("Socket connection was closed!!!");
		};
	});
}
