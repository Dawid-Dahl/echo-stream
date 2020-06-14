import * as R from "rambda";
import {SocialMediaPlatforms} from "../types/types";
import {
	TwitterMedia,
	TwitterMediaVideo,
	TwitterMediaPhoto,
	TwitterMediaGif,
} from "./mockData/jestTestData";

type Viewer = (data: any) => string | undefined;

type GetMediaUrlConfig = {
	twitter?: Viewer[] | [];
	instagram?: Viewer[] | [];
	facebook?: Viewer[] | [];
};

const config = {
	twitter: [
		//own uploaded photo or video
		(data: any) => {
			try {
				const extendedMedia = R.view<any, TwitterMedia | undefined>(
					R.lensPath(["tweet", "extended_entities", "media"]),
					data
				);

				if (!extendedMedia) return;

				return extendedMedia[0].type === "video"
					? (extendedMedia[0] as TwitterMediaVideo).video_info.variants.find(
							variant => variant.bitrate === 2176000
					  )?.url
					: extendedMedia[0].type === "photo"
					? (extendedMedia[0] as TwitterMediaPhoto).media_url
					: extendedMedia[0].type === "animated_gif"
					? (extendedMedia[0] as TwitterMediaGif).video_info.variants.find(
							variant => variant.bitrate === 0
					  )?.url
					: undefined;
			} catch (e) {
				return;
			}
		},
		//linked image or Youtube video
		(data: any) =>
			R.view<any, string>(R.lensPath(["tweet", "entities", "urls", 0, "url"]), data),
	],
	instagram: [],
	facebook: [],
};

export const getMediaUrlUnconfigured = (config: GetMediaUrlConfig) => (
	platform: SocialMediaPlatforms,
	data: any
): string | undefined => {
	const viewer = config[platform]?.find(viewer => viewer(data));
	return viewer && viewer(data);
};

export const getMediaUrl = getMediaUrlUnconfigured(config);
