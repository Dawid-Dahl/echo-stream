import {EchoActionTypes} from "../actions/echoActions";
import {Echo} from "../components/Echo";

export type EchoReducerState = {
	echoes: Echo[];
};

const initialState: EchoReducerState = {
	echoes: [],
};

export const echoReducer = (
	state: EchoReducerState = initialState,
	action: EchoActionTypes
): EchoReducerState => {
	switch (action.type) {
		case "ADD_SINGLE_ECHO":
			return {
				...state,
				echoes:
					state.echoes.length >= 1000
						? [...state.echoes]
						: [action.payload, ...state.echoes],
			};
		default:
			return state;
	}
};
