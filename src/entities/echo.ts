import {Echo} from "../components/Echo";
import {SocialMediaPlatforms} from "../types/types";
import {generateId} from "../utils/utils";

const unconfiguredEcho = (generateId: () => string) => ({
	from(
		text: string,
		likes: number,
		author: string,
		platform: SocialMediaPlatforms,
		imageUrl?: string,
		profileImageUrl?: string
	): Echo {
		return {
			id: generateId(),
			text,
			likes,
			author,
			date: new Date().toLocaleString(),
			imageUrl,
			profileImageUrl,
			platform,
		};
	},
});

export default unconfiguredEcho(generateId);
