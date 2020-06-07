export const range = (start: number, end: number): number[] =>
	end <= start ? [end] : [...range(start, end - 1), end];

export const dummyTweet = (id: number, text: string, likes: number) => ({
	id,
	text,
	likes,
});
