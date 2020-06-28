import {EchoActionTypes} from "../actions/echoActions";
import {Echo} from "../components/echo/Echo";
import {twitterData} from "../utils/mockData/jestTestData";
import echoConverter from "../utils/echoConverter";

export type EchoReducerState = {
	echoes: Echo[];
};

const initialState: EchoReducerState = {
	echoes: [],
};

//fake
/* const initialState: EchoReducerState = {
	echoes: [echoConverter("twitter", tweet)],
}; */

export const echoReducer = (
	state: EchoReducerState = initialState,
	action: EchoActionTypes
): EchoReducerState => {
	switch (action.type) {
		case "ADD_SINGLE_ECHO":
			return {
				...state,
				echoes:
					state.echoes.length >= 10000
						? [...state.echoes]
						: [action.payload, ...state.echoes],
			};
		default:
			return state;
	}
};
