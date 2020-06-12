import {Echo} from "../components/Echo";
import {generateId} from "../utils/utils";
import {SocialMediaPlatforms} from "../types/types";

export type DefaultEcho = typeof defaultEcho;

export const defaultEcho = {
	id: "0",
	sourceId: "0",
	text: "",
	echoLikes: 0,
	author: "",
	authorScreenName: "",
	date: 0,
	sourceDate: "",
	sourceLikesFavorites: 0,
	profileImageUrl: "",
	platform: "twitter",
} as const;

export type EchoConstructorArg = {
	sourceId: string;
	text: string;
	author: string;
	authorScreenName: string;
	sourceDate: string;
	sourceLikesFavorites: number;
	profileImageUrl: string;
	sourceLink: string;
	echoLikes: number;
	platform: SocialMediaPlatforms;
	mediaUrl?: string;
};

const unconfiguredEcho = (generateId: () => string) => ({
	from(echoConstructorArg: EchoConstructorArg): Echo {
		return Object.entries(echoConstructorArg).reduce((acc, [k, v]) => ({...acc, [k]: v}), {
			...defaultEcho,
			id: generateId(),
			date: Date.now(),
		});
	},
});

const echo = unconfiguredEcho(generateId);

export default echo;
