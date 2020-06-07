import {Echo} from "../components/Echo";

export const addSingleEcho = (payload: Echo) =>
	({
		type: "ADD_SINGLE_ECHO",
		payload,
	} as const);

export type EchoActionTypes = ReturnType<typeof addSingleEcho>;
