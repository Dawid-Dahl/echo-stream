import {SocialMediaPlatforms, ValueOf} from "../types/types";
import {Echo} from "../components/Echo";
import echo from "../entities/echo";
import {getMediaUrl} from "./dataGetters";
import {twitterData} from "./jestTestData";
import {constructTwitterUrl} from "./utils";

const echoConverter = (
	platform: SocialMediaPlatforms,
	data: ValueOf<typeof twitterData>
): Echo | null => {
	if (platform === "twitter") {
		try {
			const media_url = getMediaUrl<object[], string | undefined>(data);

			const {id_str, text, timestamp_ms, favorite_count} = data.tweet;
			const {name, screen_name, profile_image_url} = data.tweet.user;
			return echo.from({
				sourceId: id_str,
				text: text ?? "",
				author: name,
				authorScreenName: screen_name,
				sourceDate: timestamp_ms,
				sourceLikesFavorites: favorite_count,
				profileImageUrl: profile_image_url,
				sourceLink: constructTwitterUrl(screen_name, id_str),
				echoLikes: 0,
				platform: platform,
				mediaUrl: media_url,
			});
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
