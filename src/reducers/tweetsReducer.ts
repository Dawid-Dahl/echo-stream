import {TweetsActionTypes} from "../actions/tweetsActions";
import {Status as Tweet} from "twitter-d";

export type TweetsReducerState = {
	tweets: Tweet[];
};

const initialState: TweetsReducerState = {
	tweets: [],
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
