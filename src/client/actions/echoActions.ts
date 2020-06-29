import {Echo} from "../components/echo/Echo";

export const addSingleEcho = (payload: Echo) =>
	({
		type: "ADD_SINGLE_ECHO",
		payload,
	} as const);

export const clearEchoes = () =>
	({
		type: "CLEAR_ECHOES",
	} as const);

export type EchoActionTypes = ReturnType<typeof addSingleEcho> | ReturnType<typeof clearEchoes>;
