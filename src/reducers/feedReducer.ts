import {FeedActionTypes} from "../actions/feedActions";

export type FeedReducerState = {
	isFetching: boolean;
	fetchSpeed: number;
	error: Error | null;
};

const initialState: FeedReducerState = {
	isFetching: true,
	fetchSpeed: 5000,
	error: null,
};

export const feedReducer = (
	state: FeedReducerState = initialState,
	action: FeedActionTypes
): FeedReducerState => {
	switch (action.type) {
		default:
			return state;
	}
};
