export const selectCollection = () =>
	({
		type: "SELECT_COLLECTION",
	} as const);

export type FeedActionTypes = ReturnType<typeof selectCollection>;
