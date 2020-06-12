import echo, {EchoConstructorArg, defaultEcho, DefaultEcho} from "./echo";
import {constructTwitterUrl} from "../utils/utils";
import {Echo} from "../components/Echo";

type Keys = "withoutMedia" | "withMedia" | "defaultEcho";

type ExpectedResultObject = {
	[K in Keys]: K extends "defaultEcho" ? DefaultEcho : Echo;
};

const expectedEcho: ExpectedResultObject = {
	withoutMedia: {
		id: "123",
		sourceId: "1271062275340873730",
		text: "TESTTESTTEST #test123456",
		author: "Nagarjuna",
		authorScreenName: "AryaNagarjuna",
		echoLikes: 0,
		date: 1591879841712,
		sourceDate: "1591879836293",
		sourceLink: "https://twitter.com/AryaNagarjuna/status/1271059951402864641",
		sourceLikesFavorites: 0,
		profileImageUrl: "http://pbs.twimg.com/profile_images/1253345515/Nagarjuna_normal.jpg",
		platform: "twitter",
	},
	withMedia: {
		id: "123",
		sourceId: "1271062275340873730",
		text: "TESTTESTTEST #test123456",
		author: "Nagarjuna",
		authorScreenName: "AryaNagarjuna",
		echoLikes: 0,
		date: 1591879841712,
		sourceDate: "1591879836293",
		sourceLink: "https://twitter.com/AryaNagarjuna/status/1271059951402864641",
		sourceLikesFavorites: 0,
		profileImageUrl: "http://pbs.twimg.com/profile_images/1253345515/Nagarjuna_normal.jpg",
		platform: "twitter",
		mediaUrl: "http://pbs.twimg.com/media/EaO2qZEXQAEWPpx.jpg",
	},
	defaultEcho: defaultEcho,
};

describe("echo.from method", () => {
	const obligatoryEchoConstructorArg: EchoConstructorArg = {
		sourceId: "1271062275340873730",
		text: "TESTTESTTEST #test123456",
		author: "Nagarjuna",
		authorScreenName: "AryaNagarjuna",
		sourceDate: "1591879836293",
		sourceLikesFavorites: 0,
		profileImageUrl: "http://pbs.twimg.com/profile_images/1253345515/Nagarjuna_normal.jpg",
		sourceLink: constructTwitterUrl("AryaNagarjuna", "1271059951402864641"),
		echoLikes: 0,
		platform: "twitter",
	};

	const obligatoryEchoConstructorArgWithMedia: EchoConstructorArg = {
		sourceId: "1271062275340873730",
		text: "TESTTESTTEST #test123456",
		author: "Nagarjuna",
		authorScreenName: "AryaNagarjuna",
		sourceDate: "1591879836293",
		sourceLikesFavorites: 0,
		profileImageUrl: "http://pbs.twimg.com/profile_images/1253345515/Nagarjuna_normal.jpg",
		sourceLink: constructTwitterUrl("AryaNagarjuna", "1271059951402864641"),
		echoLikes: 0,
		platform: "twitter",
		mediaUrl: "http://pbs.twimg.com/media/EaO2qZEXQAEWPpx.jpg",
	};

	const obligatoryEchoConstructorArgScrambled: EchoConstructorArg = {
		text: "TESTTESTTEST #test123456",
		platform: "twitter",
		authorScreenName: "AryaNagarjuna",
		sourceId: "1271062275340873730",
		echoLikes: 0,
		sourceLikesFavorites: 0,
		sourceDate: "1591879836293",
		sourceLink: constructTwitterUrl("AryaNagarjuna", "1271059951402864641"),
		author: "Nagarjuna",
		profileImageUrl: "http://pbs.twimg.com/profile_images/1253345515/Nagarjuna_normal.jpg",
	};

	it("should construct an echo if given arg object with obligatory keys", () => {
		const constructedEcho = echo.from(obligatoryEchoConstructorArg);
		// @ts-ignore
		constructedEcho.id = "123";
		// @ts-ignore
		constructedEcho.date = 1591879841712;

		expect(constructedEcho).toEqual(expectedEcho.withoutMedia);
	});

	it("should construct an echo if given arg object with obligatory keys in different order", () => {
		const constructedEcho = echo.from(obligatoryEchoConstructorArgScrambled);
		// @ts-ignore
		constructedEcho.id = "123";
		// @ts-ignore
		constructedEcho.date = 1591879841712;

		expect(constructedEcho).toEqual(expectedEcho.withoutMedia);
	});

	it("should construct an echo if given a mediaUrl key in the arg object", () => {
		const constructedEcho = echo.from(obligatoryEchoConstructorArgWithMedia);
		// @ts-ignore
		constructedEcho.id = "123";
		// @ts-ignore
		constructedEcho.date = 1591879841712;

		expect(constructedEcho).toEqual(expectedEcho.withMedia);
	});

	it("should return a default echo if something goes wrong", () => {});
});
