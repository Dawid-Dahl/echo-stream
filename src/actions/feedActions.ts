import {Hashtag, ParsedJsonResponsePayload} from "../types/types";

export const startFeed = (hashtag: Hashtag) =>
	({
		type: "START_FEED",
		hashtag,
	} as const);

export const startFeedFulfilled = () =>
	({
		type: "START_FEED_FULFILLED",
	} as const);

export const startFeedRejected = (message: string) =>
	({
		type: "START_FEED_REJECTED",
		message,
	} as const);

export const stopFeed = () =>
	({
		type: "STOP_FEED",
	} as const);

export const stopFeedFulfilled = () =>
	({
		type: "STOP_FEED_FULFILLED",
	} as const);

export const stopFeedRejected = (message: string) =>
	({
		type: "STOP_FEED_REJECTED",
		message,
	} as const);

export const setHashtag = (hashtag: Hashtag) =>
	({
		type: "SET_HASHTAG",
		hashtag,
	} as const);

export const setEmittedEvent = (emittedEvent: ParsedJsonResponsePayload["emittedEvent"]) =>
	({
		type: "SET_EMITTED_EVENT",
		emittedEvent,
	} as const);

export type FeedActionTypes =
	| ReturnType<typeof startFeed>
	| ReturnType<typeof startFeedFulfilled>
	| ReturnType<typeof startFeedRejected>
	| ReturnType<typeof stopFeed>
	| ReturnType<typeof stopFeedFulfilled>
	| ReturnType<typeof stopFeedRejected>
	| ReturnType<typeof setHashtag>
	| ReturnType<typeof setEmittedEvent>;
