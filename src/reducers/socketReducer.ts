import {SocketActionTypes} from "../actions/socketActions";

export type SocketReducerState = {
	isConnectionOpen: boolean;
	error: Error | string | null;
};

const initialState: SocketReducerState = {
	isConnectionOpen: false,
	error: null,
};

export const socketReducer = (
	state: SocketReducerState = initialState,
	action: SocketActionTypes
): SocketReducerState => {
	switch (action.type) {
		case "OPEN_SOCKET_CONNECTION":
			return {...state, isConnectionOpen: true, error: null};
		case "OPEN_SOCKET_CONNECTION_REJECTED":
			return {...state, isConnectionOpen: false, error: action.message};
		case "CLOSE_SOCKET_CONNECTION":
			return {...state, isConnectionOpen: false, error: null};
		default:
			return state;
	}
};
