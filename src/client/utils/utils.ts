import {JsonResponse} from "../types/types";
import {Stream} from "twit";
import {Request} from "express-serve-static-core";
import {Echo} from "../components/echo/Echo";

export const range = (start: number, end: number): number[] =>
	end <= start ? [end] : [...range(start, end - 1), end];

export const generateId = () => Math.random().toString(36).substring(2) + Date.now().toString(36);

export const jsonResponse = (
	success: boolean,
	payload?: string | NodeJS.ReadableStream | undefined
): JsonResponse => (!payload ? {success} : {success, payload});

export const isServerLive = async (url: string): Promise<boolean> => {
	try {
		return await fetch(`${url}/api/ping`).then(res => (res.ok ? true : false));
	} catch (e) {
		console.log(e);
		return Promise.resolve(false);
	}
};

export const unconfiguredSetLocalNodeState = (req: Request) => (
	isFetching: boolean,
	stream: Stream | null,
	hashtag: string | null
): void => {
	req.app.locals.isFetching = isFetching;
	req.app.locals.stream = stream;
	req.app.locals.hashtag = hashtag;
};

export const constructTwitterUrl = (
	authorScreenName: Echo["authorScreenName"],
	sourceId: Echo["sourceId"]
) =>
	authorScreenName && sourceId
		? `https://twitter.com/${authorScreenName}/status/${sourceId}`
		: "";

export const stringTrimmer = (trimAway: string, str: string) =>
	str ? str.replace(new RegExp(trimAway), "") : "";

export const addHashtagToString = (str: string) => {
	if (str && typeof str === "string") {
		if (str.match(/^#/)) {
			if (str.match(/^#*/)) {
				return `#${[...str.match(/^#*/)?.input].filter(cur => cur !== "#").join("")}` ?? "";
			} else {
				return str;
			}
		} else {
			return `#${str}`;
		}
	} else {
		return "";
	}
};
