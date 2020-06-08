import {RootState} from "../store";
import {ThunkAction} from "redux-thunk";
import {Action} from "redux";

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;

export type SocialMediaPlatforms = "facebook" | "twitter" | "instagram";

export type Hashtag = string;

export type AuthJsonResponse = {
	success: boolean;
	payload?: string | NodeJS.ReadableStream | undefined;
};
