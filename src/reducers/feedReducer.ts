import {FeedActionTypes} from "../actions/feedActions";

export type FeedReducerState = {
	isFetching: boolean;
	fetchSpeed: number;
	hashtag: string | null;
	error: Error | null;
};

const initialState: FeedReducerState = {
	isFetching: false,
	fetchSpeed: 5000,
	hashtag: null,
	error: null,
};

export const feedReducer = (
	state: FeedReducerState = initialState,
	action: FeedActionTypes
): FeedReducerState => {
	switch (action.type) {
		case "START_FEED":
			return {...state, isFetching: true};
		case "STOP_FEED":
			return {...state, isFetching: false};
		case "SET_FETCH_SPEED":
			return {...state, fetchSpeed: action.payload};
		case "SET_HASHTAG":
			return {...state, hashtag: action.payload};
		default:
			return state;
	}
};
