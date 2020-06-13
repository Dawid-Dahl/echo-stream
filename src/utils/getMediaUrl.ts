import * as R from "rambda";

/* export const getMediaUrl = <T, U>(data: T): U =>
	R.view<T, U>(R.lensPath(["tweet", "entities", "media", 0, "media_url"]), data); */

type Viewer = (data: any) => string;

type GetMediaUrlConfig = {
	twitter: Viewer[] | [];
	instagram?: Viewer[] | [];
	facebook?: Viewer[] | [];
};

const config = {
	twitter: [
		//own uploaded video
		(data: any) =>
			R.view<any, string>(R.lensPath(["tweet", "entities", "media", 0, "url"]), data),
		//uploaded image
		(data: any) =>
			R.view<any, string>(R.lensPath(["tweet", "entities", "media", 0, "media_url"]), data),
		//linked image or Youtube video
		(data: any) =>
			R.view<any, string>(R.lensPath(["tweet", "entities", "urls", 0, "url"]), data),
	],
	instagram: [],
	facebook: [],
};

export const getMediaUrlUnconfigured = (config: GetMediaUrlConfig) => (
	data: any
): string | undefined => {
	return undefined;
};

export const getMediaUrl = getMediaUrlUnconfigured(config);
