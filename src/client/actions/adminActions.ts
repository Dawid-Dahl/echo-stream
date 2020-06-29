export const openAdmin = () =>
	({
		type: "OPEN_ADMIN",
	} as const);

export const closeAdmin = () =>
	({
		type: "CLOSE_ADMIN",
	} as const);

export type AdminActionTypes = ReturnType<typeof openAdmin> | ReturnType<typeof closeAdmin>;
