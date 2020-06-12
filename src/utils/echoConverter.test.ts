import echoConverter from "./echoConverter";
import {twitterData} from "./jestTestData";
import {Echo} from "../components/Echo";
import {expectedEcho} from "../entities/echo.test";
import {testObj} from "./testObj";

const mockedTestObj = jest.genMockFromModule<typeof testObj>("./testObj");

console.log("MOCKED FROM JEST: ", (mockedTestObj.cool = false));

const mockIdsAndDates = (echo: Echo): Echo => {
	// @ts-ignore
	echo.id = "123";
	// @ts-ignore
	echo.sourceId = "1271062275340873730";
	// @ts-ignore
	echo.date = 1591879841712;
	// @ts-ignore
	echo.sourceDate = "1591879836293";
	// @ts-ignore
	echo.sourceLink = "https://twitter.com/AryaNagarjuna/status/1271062275340873730";
	return echo;
};

describe("echoConverter", () => {
	const {tweetWithoutMedia, tweetWithUploadedImage} = twitterData;

	it("should return a default echo if given the wrong data", () => {
		const echo = echoConverter("twitter", {wrongData: 123} as any) as Echo;

		jest.mock;
		// @ts-ignore
		echo.id = "123";
		// @ts-ignore
		echo.date = 1591879841712;

		expect(echo).toEqual(expectedEcho.defaultEcho);
	});

	/* it("should return null if given improper platform name as first arg", () => {
		const res = echoConverter("twittter" as any, tweetWithoutMedia);
		expect(res).toBeNull();
	}); */

	describe("echo without media", () => {
		it("should return an echo given twitter data with no media", () => {
			const unmockedEchoWithoutMedia = echoConverter("twitter", tweetWithoutMedia) as Echo;
			const echo = mockIdsAndDates(unmockedEchoWithoutMedia);

			expect(echo).toEqual(expectedEcho.withoutMedia);
		});
	});

	describe("echo with uploaded image", () => {
		it("should return an echo given twitter data with an uploaded image", () => {
			const unmockedEchoWithOwnUploadedImage = echoConverter(
				"twitter",
				tweetWithUploadedImage
			) as Echo;

			const echo = mockIdsAndDates(unmockedEchoWithOwnUploadedImage);

			expect(echo).toEqual(expectedEcho.withMedia);
		});
	});

	describe("echo with linked image", () => {
		it("should return an echo given twitter data with a linked image", () => {});
	});
});
