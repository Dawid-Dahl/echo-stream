import {SocketActionTypes} from "../actions/socketActions";

export type SocketReducerState = {
	isConnectionOpen: boolean;
	socket: SocketIOClient.Socket | null;
	error: Error | string | null;
};

const initialState: SocketReducerState = {
	isConnectionOpen: false,
	socket: null,
	error: null,
};

export const socketReducer = (
	state: SocketReducerState = initialState,
	action: SocketActionTypes
): SocketReducerState => {
	switch (action.type) {
		case "OPEN_SOCKET_CONNECTION_FULFILLED":
			return {...state, socket: action.socket, isConnectionOpen: true, error: null};
		case "OPEN_SOCKET_CONNECTION_REJECTED":
			return {...state, isConnectionOpen: false, error: action.message};
		default:
			return state;
	}
};
