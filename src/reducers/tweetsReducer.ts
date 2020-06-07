import {TweetsActionTypes} from "../actions/tweetsActions";

export type TweetsReducerState = {
	tweets: Tweet[];
};

const initialState: TweetsReducerState = {
	isFetching: true,
	fetchSpeed: 5000,
	error: null,
};

export const tweetsReducer = (
	state: TweetsReducerState = initialState,
	action: TweetsActionTypes
): TweetsReducerState => {
	switch (action.type) {
		default:
			return state;
	}
};
