import * as R from "rambda";

export const getMediaUrl = <T, U>(data: T): U =>
	R.view<T, U>(R.lensPath(["tweet", "entities", "media", 0, "media_url"]), data);
