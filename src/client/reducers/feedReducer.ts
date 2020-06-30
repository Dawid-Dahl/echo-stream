import {FeedActionTypes} from "../actions/feedActions";

export type FeedReducerState = {
	isFeedActive: boolean;
	hashtag: string | null;
	emittedEvent: string | null;
	error: Error | string | null;
};

const initialState: FeedReducerState = {
	isFeedActive: false,
	hashtag: null,
	emittedEvent: null,
	error: null,
};

export const feedReducer = (
	state: FeedReducerState = initialState,
	action: FeedActionTypes
): FeedReducerState => {
	switch (action.type) {
		case "START_FEED_FULFILLED":
			return {...state, isFeedActive: true, error: null};
		case "START_FEED_REJECTED":
			return {...state, isFeedActive: false, error: action.message};
		case "STOP_FEED_FULFILLED":
			return {
				...state,
				isFeedActive: false,
				emittedEvent: null,
				error: null,
			};
		case "STOP_FEED_REJECTED":
			return {...state, isFeedActive: false, error: action.message};
		case "SET_HASHTAG":
			return {...state, hashtag: action.hashtag};
		case "SET_EMITTED_EVENT":
			return {...state, emittedEvent: action.emittedEvent};
		default:
			return state;
	}
};
