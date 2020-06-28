import {SocketUri} from "../types/types";

export const openSocketConnection = (socket: SocketIOClient.Socket) =>
	({
		type: "OPEN_SOCKET_CONNECTION",
		socket,
	} as const);

export const openSocketConnectionRejected = (message: string) =>
	({
		type: "OPEN_SOCKET_CONNECTION_REJECTED",
		message,
	} as const);

export const closeSocketConnection = () =>
	({
		type: "CLOSE_SOCKET_CONNECTION",
	} as const);

export const closeSocketConnectionRejected = () =>
	({
		type: "CLOSE_SOCKET_CONNECTION_REJECTED",
	} as const);

export type SocketActionTypes =
	| ReturnType<typeof openSocketConnection>
	| ReturnType<typeof openSocketConnectionRejected>
	| ReturnType<typeof closeSocketConnection>
	| ReturnType<typeof closeSocketConnectionRejected>;
