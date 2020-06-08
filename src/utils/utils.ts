import {AuthJsonResponse} from "../types/types";

export const range = (start: number, end: number): number[] =>
	end <= start ? [end] : [...range(start, end - 1), end];

export const generateId = () => Math.random().toString(36).substring(2) + Date.now().toString(36);

export const jsonResponse = (
	success: boolean,
	payload?: string | NodeJS.ReadableStream | undefined
): AuthJsonResponse => (!payload ? {success} : {success, payload});
