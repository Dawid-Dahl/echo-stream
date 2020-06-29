import {AdminActionTypes} from "../actions/adminActions";

export type AdminReducerState = {
	isAdminOpen: boolean;
};

const initialState: AdminReducerState = {
	isAdminOpen: false,
};

export const adminReducer = (
	state: AdminReducerState = initialState,
	action: AdminActionTypes
): AdminReducerState => {
	switch (action.type) {
		case "OPEN_ADMIN":
			return {
				...state,
				isAdminOpen: true,
			};
		case "CLOSE_ADMIN":
			return {
				...state,
				isAdminOpen: false,
			};
		default:
			return state;
	}
};
