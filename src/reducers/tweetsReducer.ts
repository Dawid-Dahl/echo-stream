import {TweetsActionTypes} from "../actions/tweetsActions";
import {Status as Tweet} from "twitter-d";
import {range, dummyTweet} from "../utils/utils";
import {DummyTweet} from "../types/types";

//Use dummy data until actual Twitter integration

const dummyData = range(1, 20).map(x =>
	dummyTweet(x, "This is the tweet content.", Math.round(Math.random() * 10))
);

export type TweetsReducerState = {
	tweets: DummyTweet[];
};

const initialState: TweetsReducerState = {
	tweets: dummyData,
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
