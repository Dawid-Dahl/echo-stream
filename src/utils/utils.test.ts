import {constructTwitterUrl} from "./utils";

describe("constructTwitterUrl", () => {
	const sourceId = "1271145879878144009";
	const authorScreenName = "AryaNagarjuna";

	it("should construct an twitter status URL from args", () => {
		expect(constructTwitterUrl(authorScreenName, sourceId)).toBe(
			"https://twitter.com/AryaNagarjuna/status/1271145879878144009"
		);
	});

	it("should return an empty string if called incorrectly", () => {
		// @ts-ignore
		expect(constructTwitterUrl(authorScreenName)).toBe("");
		// @ts-ignore
		expect(constructTwitterUrl(sourceId)).toBe("");
	});
});
