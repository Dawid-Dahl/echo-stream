import {SocialMediaPlatforms} from "../types/types";
import {Echo} from "../components/Echo";
import echo from "../entities/echo";

const echoConverter = (platform: SocialMediaPlatforms, data: any): Echo | {} => {
	if (platform === "twitter") {
		console.log("THE DATA", data.tweet);
		const {id_str, text, timestamp_ms, favorite_count} = data.tweet;
		const {name, profile_image_url} = data.tweet.user;
		console.log(id_str);
		console.log(text);
		console.log(name);
		console.log(timestamp_ms);
		console.log(profile_image_url);
		console.log(favorite_count);
		return echo.from(id_str, text ?? "", name, timestamp_ms, favorite_count, profile_image_url);
	} else {
		console.log("No platform selected");
		return {};
	}
};

export default echoConverter;
