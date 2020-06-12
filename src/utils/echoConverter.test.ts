import echoConverter from "./echoConverter";
import {twitterData} from "./jestTestData";
import {Echo} from "../components/Echo";

const mockIdsAndDates = (echo: Echo): Echo => {
	// @ts-ignore
	echo.id = "123";
	// @ts-ignore
	echo.sourceId = "1271062275340873730";
	// @ts-ignore
	echo.date = 1591879841712;
	// @ts-ignore
	echo.sourceDate = "1591879836293";
	return echo;
};

describe("echoConverter", () => {
	const {tweetWithoutMedia, tweetWithUploadedImage} = twitterData;

	it("should return null if given the wrong data", () => {
		const echo = echoConverter("twitter", {wrongData: 123} as any) as Echo;
		expect(echo).toBeNull();
	});

	/* it("should return null if given improper platform name as first arg", () => {
		const res = echoConverter("twittter" as any, tweetWithoutMedia);
		expect(res).toBeNull();
	}); */

	describe("echo without media", () => {
		it("should return an echo given twitter data with no media", () => {
			const unmockedEchoWithoutMedia = echoConverter("twitter", tweetWithoutMedia) as Echo;
			const echo = mockIdsAndDates(unmockedEchoWithoutMedia);

			expect(echo).toEqual({
				id: "123",
				sourceId: "1271062275340873730",
				text: "TESTTESTTEST #test123456",
				echoLikes: 0,
				author: "Nagarjuna",
				authorScreenName: "AryaNagarjuna",
				date: 1591879841712,
				sourceDate: "1591879836293",
				sourceLikesFavorites: 0,
				profileImageUrl:
					"http://pbs.twimg.com/profile_images/1253345515/Nagarjuna_normal.jpg",
				platform: "twitter",
			});
		});
	});

	describe("echo with uploaded image", () => {
		it("should return an echo given twitter data with an uploaded image", () => {
			const unmockedEchoWithOwnUploadedImage = echoConverter(
				"twitter",
				tweetWithUploadedImage
			) as Echo;
			const echo = mockIdsAndDates(unmockedEchoWithOwnUploadedImage);

			expect(echo).toEqual({
				id: "123",
				sourceId: "1271062275340873730",
				text: "TESTWITHIMAGE #test123456 https://t.co/x8ehyquajR",
				echoLikes: 0,
				author: "Nagarjuna",
				authorScreenName: "AryaNagarjuna",
				date: 1591879841712,
				sourceDate: "1591879836293",
				sourceLikesFavorites: 0,
				mediaUrl: "http://pbs.twimg.com/media/EaO2qZEXQAEWPpx.jpg",
				profileImageUrl:
					"http://pbs.twimg.com/profile_images/1253345515/Nagarjuna_normal.jpg",
				platform: "twitter",
			});
		});
	});

	describe("echo with linked image", () => {
		it("should return an echo given twitter data with a linked image", () => {});
	});
});