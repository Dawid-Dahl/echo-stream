import echo, {EchoConstructorArg, defaultEcho} from "./echo";
import {constructTwitterUrl} from "../utils/utils";
import {Echo} from "../components/Echo";

const echoFromWithFixedIdAndDate = (echoConstructorArg: EchoConstructorArg): Echo => {
	return Object.entries(echoConstructorArg).reduce((acc, [k, v]) => ({...acc, [k]: v}), {
		...defaultEcho,
		id: "123",
		date: 1591879841712,
	});
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

	it("should construct an echo if given all obligatory arg", () => {
		expect(echoFromWithFixedIdAndDate(obligatoryEchoConstructorArg)).toEqual({
			id: "123",
			sourceId: "1271062275340873730",
			text: "TESTTESTTEST #test123456",
			echoLikes: 0,
			author: "Nagarjuna",
			authorScreenName: "AryaNagarjuna",
			date: 1591879841712,
			sourceDate: "1591879836293",
			sourceLink: "https://twitter.com/AryaNagarjuna/status/1271059951402864641",
			sourceLikesFavorites: 0,
			profileImageUrl: "http://pbs.twimg.com/profile_images/1253345515/Nagarjuna_normal.jpg",
			platform: "twitter",
		});
	});
});
