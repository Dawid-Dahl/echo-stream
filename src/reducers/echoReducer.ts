import {EchoActionTypes} from "../actions/echoActions";
import {range, echo} from "../utils/utils";
import {Echo} from "../components/Echo";

//Use dummy data until actual Twitter integration

const dummyData = range(1, 3).map(x =>
	echo("This is the echo content.", Math.round(Math.random() * 10), "author")
);

export type EchoReducerState = {
	echo: Echo[];
};

const initialState: EchoReducerState = {
	echo: dummyData,
};

export const echoReducer = (
	state: EchoReducerState = initialState,
	action: EchoActionTypes
): EchoReducerState => {
	switch (action.type) {
		case "ADD_SINGLE_ECHO":
			return {
				...state,
				echo: state.echo.length >= 500 ? [...state.echo] : [...state.echo, action.payload],
			};
		default:
			return state;
	}
};
