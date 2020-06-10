import {SocketUri} from "../types/types";

export const openSocketConnection = (socketUri: SocketUri) =>
	({
		type: "OPEN_SOCKET_CONNECTION",
		socketUri,
	} as const);

export const openSocketConnectionFulfilled = (socket: SocketIOClient.Socket) =>
	({
		type: "OPEN_SOCKET_CONNECTION_FULFILLED",
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

export const closeSocketConnectionFulfilled = () =>
	({
		type: "CLOSE_SOCKET_CONNECTION_FULFILLED",
	} as const);

export const closeSocketConnectionRejected = () =>
	({
		type: "CLOSE_SOCKET_CONNECTION_REJECTED",
	} as const);

export type SocketActionTypes =
	| ReturnType<typeof openSocketConnection>
	| ReturnType<typeof openSocketConnectionFulfilled>
	| ReturnType<typeof openSocketConnectionRejected>
	| ReturnType<typeof closeSocketConnection>
	| ReturnType<typeof closeSocketConnectionFulfilled>
	| ReturnType<typeof closeSocketConnectionRejected>;
