import {createStore, combineReducers, applyMiddleware} from "redux";
import {feedReducer, echoReducer, socketReducer} from "../reducers/reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({feedReducer, echoReducer, socketReducer});

export type RootState = ReturnType<typeof rootReducer>;

const middleware = applyMiddleware(sagaMiddleware);

export const store = createStore(rootReducer, composeWithDevTools(middleware));

sagaMiddleware.run(rootSaga);

export default store;
