import {Echo} from "../components/Echo";
import {generateId} from "../utils/utils";

const unconfiguredEcho = (generateId: () => string) => ({
	from(
		sourceId: string,
		text: string,
		author: string,
		sourceDate: Date | string,
		sourceLikesFavorites: number,
		profileImageUrl?: string,
		sourceLink?: string,
		mediaUrl?: string,
		likes: number = 0
	): Echo {
		return {
			id: generateId(),
			sourceId,
			text,
			likes,
			author,
			date: Date.now(),
			sourceDate,
			sourceLikesFavorites,
			sourceLink,
			mediaUrl,
			profileImageUrl,
			platform: "twitter",
		};
	},
});

const echo = unconfiguredEcho(generateId);

export default echo;
