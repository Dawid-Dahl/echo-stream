import {Hashtag, AppThunk} from "../types/types";
import {config} from "dotenv";

config({
	path: "../../../.env",
});

if (!process.env.SERVER_URL) throw new Error("Can't find server URL enviroment variable");

export const setFetchSpeed = (payload: number) =>
	({
		type: "SET_FETCH_SPEED",
		payload,
	} as const);

export const startFeedAsync = (payload: Hashtag): AppThunk => dispatch => {
	fetch(`${process.env.SERVER_URL}/api/feed/start`, {
		method: "POST",
		body: JSON.stringify({hashtag: payload}),
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then(res => res.json())
		.then(data => {
			const {hashtag} = JSON.parse(data.payload);

			dispatch(startFeed());
			dispatch(setHashtag(hashtag));
		})
		.catch(console.error);
};

export const startFeed = () =>
	({
		type: "START_FEED",
	} as const);

export const stopFeedAsync = (): AppThunk => dispatch => {
	fetch(`${process.env.SERVER_URL}/api/feed/stop`)
		.then(res => res.json())
		.then(data => dispatch(stopFeed()))
		.catch(console.error);
};

export const stopFeed = () =>
	({
		type: "STOP_FEED",
	} as const);

export const setHashtag = (payload: Hashtag) =>
	({
		type: "SET_HASHTAG",
		payload,
	} as const);

export type FeedActionTypes =
	| ReturnType<typeof startFeed>
	| ReturnType<typeof stopFeed>
	| ReturnType<typeof setFetchSpeed>
	| ReturnType<typeof setHashtag>;
