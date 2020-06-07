import {Echo} from "../components/Echo";

export const range = (start: number, end: number): number[] =>
	end <= start ? [end] : [...range(start, end - 1), end];

export const generateId = () => Math.random().toString(36).substring(2) + Date.now().toString(36);

const echoWithoutIdFunction = (generateId: () => string) => (
	text: string,
	likes: number,
	author: string
): Echo => ({
	id: generateId(),
	text,
	likes,
	author,
	date: new Date().toLocaleString(),
});

export const echo = echoWithoutIdFunction(generateId);
