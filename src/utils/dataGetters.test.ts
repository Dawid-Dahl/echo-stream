import {getMediaUrl} from "./dataGetters";
import {twitterData} from "./jestTestData";
import {ValueOf} from "../types/types";

describe("the getMediaUrl fn which extracts the appropriate media from the supplied data source", () => {
	describe("the happy paths", () => {
		it("it should get mediaURL from tweet with uploaded image", () => {
			expect(
				getMediaUrl<ValueOf<typeof twitterData>, string | undefined>(
					twitterData.tweetWithUploadedImage
				)
			).toBe("http://pbs.twimg.com/media/EaO2qZEXQAEWPpx.jpg");
		});

		it("it should get mediaURL from tweet with linked image", () => {
			expect(
				getMediaUrl<ValueOf<typeof twitterData>, string | undefined>(
					twitterData.tweetWithLinkedImage
				)
			).toBe("http://pbs.twimg.com/media/EaO2qZEXQAEWPpx.jpg");
		});

		it("it should get mediaURL from tweet with own uploaded video", () => {
			expect(
				getMediaUrl<ValueOf<typeof twitterData>, string | undefined>(
					twitterData.tweetWithOwnUploadedVideo
				)
			).toBe("http://pbs.twimg.com/media/EaO2qZEXQAEWPpx.jpg");
		});

		it("it should get mediaURL from tweet with video link from Youtube", () => {
			expect(
				getMediaUrl<ValueOf<typeof twitterData>, string | undefined>(
					twitterData.tweetWithYoutubeVideoLink
				)
			).toBe("http://pbs.twimg.com/media/EaO2qZEXQAEWPpx.jpg");
		});
	});

	describe("the sad paths", () => {
		it("should return undefined if data was undefined", () => {
			const tweetWithUploadedImage = twitterData.tweetWithUploadedImage;
			const alteredData = (tweetWithUploadedImage.tweet.entities.media[0].media_url = undefined as any);

			expect(
				getMediaUrl<ValueOf<typeof twitterData>, string | undefined>(alteredData)
			).toBeUndefined();
		});

		it("should return undefined if data was in an invalid format", () => {
			expect(
				getMediaUrl<ValueOf<any>, string | undefined>({invalid: "data"})
			).toBeUndefined();
		});
	});
});
