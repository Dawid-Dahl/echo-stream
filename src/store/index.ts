import {createStore, combineReducers, applyMiddleware} from "redux";
import {feedReducer, echoReducer} from "../reducers/reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";

export const rootReducer = combineReducers({feedReducer, echoReducer});

export type RootState = ReturnType<typeof rootReducer>;

const middleware = applyMiddleware(ReduxThunk);

export const store = createStore(rootReducer, composeWithDevTools(middleware));

export default store;
