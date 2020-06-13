import {getMediaUrl} from "./getMediaUrl";
import {twitterData} from "./jestTestData";

describe("the getMediaUrl fn, which extracts the appropriate media from the supplied data source", () => {
	describe("the happy paths", () => {
		it("it should get mediaURL from tweet with own uploaded video", () => {
			expect(getMediaUrl(twitterData.tweetWithOwnUploadedVideo)).toBe(
				"https://t.co/R219FTQ28P"
			);
		});

		it("it should get mediaURL from tweet with uploaded image", () => {
			expect(getMediaUrl(twitterData.tweetWithUploadedImage)).toBe(
				"http://pbs.twimg.com/media/EaO2qZEXQAEWPpx.jpg"
			);
		});

		it("it should get mediaURL from tweet with linked image", () => {
			expect(getMediaUrl(twitterData.tweetWithLinkedImage)).toBe("https://t.co/WWPZTaCCIS");
		});

		it("it should get mediaURL from tweet with video link from Youtube", () => {
			expect(getMediaUrl(twitterData.tweetWithYoutubeVideoLink)).toBe(
				"https://t.co/qpASLlqsbS"
			);
		});
	});

	describe("the sad paths", () => {
		it("should return undefined if data was undefined", () => {
			const tweetWithUploadedImage = twitterData.tweetWithUploadedImage;
			const alteredData = (tweetWithUploadedImage.tweet.entities.media[0].media_url = undefined as any);

			expect(getMediaUrl(alteredData)).toBeUndefined();
		});

		it("should return undefined if data was in an invalid format", () => {
			expect(getMediaUrl({invalid: "data"})).toBeUndefined();
		});
	});
});
