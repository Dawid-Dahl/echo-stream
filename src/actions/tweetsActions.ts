export const selectCollection = () =>
	({
		type: "SELECT_COLLECTION",
	} as const);

export type TweetsActionTypes = ReturnType<typeof selectCollection>;
