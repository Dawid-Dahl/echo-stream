import {RootState} from "../store";
import {select} from "redux-saga/effects";

export function* _select<T>(fn: (state: RootState) => T) {
	const res: T = yield select(fn);
	return res;
}
export const getEmittedEvent = (state: RootState) => state.feedReducer.emittedEvent;
