import {all} from "redux-saga/effects";
import feedSaga from "./feedSaga";
import socketSaga from "./socketSaga";

export default function* rootSaga() {
	yield all([feedSaga(), socketSaga()]);
}
