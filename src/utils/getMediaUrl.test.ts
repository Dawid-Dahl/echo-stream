import {getMediaUrl} from "./getMediaUrl";
import {twitterData} from "./mockData/jestTestData";
import {set, lensPath} from "rambda";

describe("the getMediaUrl fn, which extracts the appropriate media from the supplied data source", () => {
	describe("the happy paths", () => {
		it("it should get mediaURL from tweet with own uploaded video", () => {
			expect(getMediaUrl("twitter", twitterData.tweetWithOwnUploadedVideo)).toBe(
				"https://video.twimg.com/ext_tw_video/1271062164888043521/pu/vid/1280x720/jXLW_dZTcbxDhG85.mp4?tag=10"
			);
		});

		it("it should get mediaURL from tweet with uploaded image", () => {
			expect(getMediaUrl("twitter", twitterData.tweetWithUploadedImage)).toBe(
				"http://pbs.twimg.com/media/EaO2qZEXQAEWPpx.jpg"
			);
		});

		it("it should get mediaURL from tweet with linked image", () => {
			expect(getMediaUrl("twitter", twitterData.tweetWithLinkedImage)).toBe(
				"https://t.co/WWPZTaCCIS"
			);
		});

		it("it should get mediaURL from tweet with video link from Youtube", () => {
			expect(getMediaUrl("twitter", twitterData.tweetWithYoutubeVideoLink)).toBe(
				"https://t.co/qpASLlqsbS"
			);
		});

		it("should get mediaURL from tweet with an animated GIF", () => {
			expect(getMediaUrl("twitter", twitterData.tweetWithAnimatedGif)).toBe(
				"https://video.twimg.com/tweet_video/DBMDLy_U0AAqUWP.mp4"
			);
		});
	});

	describe("the sad paths", () => {
		it("should return undefined if mediua_url was undefined", () => {
			const tweetWithUploadedImage = twitterData.tweetWithUploadedImage;
			const alteredData = set(
				lensPath(["tweet", "extended_entities", "media", 0, "media_url"]),
				undefined,
				tweetWithUploadedImage
			);

			expect(getMediaUrl("twitter", alteredData)).toBeUndefined();
		});

		it(`should return undefined if data contained an uploaded video but it couldn't 
			.find it because bitrate in data was no longer 2176000`, () => {
			const tweetWithOwnUploadedVideo = twitterData.tweetWithOwnUploadedVideo;
			const alteredTweet = set(
				lensPath(["tweet", "extended_entities", "media", 0, "video_info", "variants"]),
				[
					{
						bitrate: 666,
						content_type: "video/mp4",
						url:
							"https://video.twimg.com/ext_tw_video/1271062164888043521/pu/vid/640x360/0WSxwDL0dblKTNSf.mp4?tag=10",
					},
				],
				tweetWithOwnUploadedVideo
			);

			expect(getMediaUrl("twitter", alteredTweet)).toBeUndefined();
		});

		it("should return undefined if platform was supplied incorrectly, but data was correct", () => {
			//@ts-ignore
			expect(getMediaUrl("twittter", twitterData.tweetWithoutMedia)).toBeUndefined();
		});

		it("should return undefined if platform was not supplied but data was correct", () => {
			//@ts-ignore
			expect(getMediaUrl(twitterData.tweetWithoutMedia)).toBeUndefined();
		});

		it("should return undefined if platform was supplied correctly but data was incorrect", () => {
			//@ts-ignore
			expect(getMediaUrl("twitter", {invalid: "data"})).toBeUndefined();
		});

		it("should return undefined if both platform was not supplied and data was incorrect", () => {
			//@ts-ignore
			expect(getMediaUrl({invalid: "data"})).toBeUndefined();
		});
	});
});
