import {SocialMediaPlatforms, ValueOf} from "../types/types";
import {Echo} from "../components/Echo";
import echo from "../entities/echo";
import {getMediaUrl} from "./dataGetters";
import {twitterData} from "./jestTestData";

const echoConverter = (
	platform: SocialMediaPlatforms,
	data: ValueOf<typeof twitterData>
): Echo | null => {
	if (platform === "twitter") {
		try {
			const media_url = getMediaUrl<object[], string | undefined>(data);

			const {id_str, text, timestamp_ms, favorite_count} = data.tweet;
			const {name, profile_image_url} = data.tweet.user;
			return echo.from(
				id_str,
				text ?? "",
				name,
				timestamp_ms,
				favorite_count,
				profile_image_url,
				media_url
			);
		} catch (e) {
			console.log(e);
			return null;
		}
	} else {
		console.log("No platform selected");
		return null;
	}
};

export default echoConverter;
