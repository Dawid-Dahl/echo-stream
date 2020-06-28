import {all} from "redux-saga/effects";
import feedSaga from "./feedSaga";

export default function* rootSaga() {
	yield all([feedSaga()]);
}
