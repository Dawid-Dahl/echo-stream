import express from "express";
import T from "../../config/twitConfig";
import {jsonResponse} from "../../src/utils/utils";
import {Stream} from "twit";
import io from "../../config/socketIoConfig";

const feedRouter = express.Router();

feedRouter.post("/start", async (req, res) => {
	try {
		const stream = T.stream("statuses/filter", {track: "#LOLOLLHDAGSFDJHGFASD" ?? ""});

		console.log("Stream has been started.");

		stream.on("tweet", tweet => {
			io.emit("tweet", {tweet: tweet});
		});

		const {hashtag} = req.body;

		req.app.locals.isFetching = true;
		req.app.locals.stream = stream;
		req.app.locals.hashtag = hashtag;

		res.status(200).json(
			jsonResponse(true, JSON.stringify({message: "Stream has started!", hashtag: hashtag}))
		);
	} catch (e) {
		console.log(e);
	}
});

feedRouter.get("/stop", async (req, res) => {
	try {
		const stream: Stream = req.app.locals.stream;

		stream.stop();

		console.log("Stream has been stopped.");

		req.app.locals.isFetching = false;
		req.app.locals.stream = null;
		req.app.locals.hashtag = null;

		res.status(200).json(
			jsonResponse(true, JSON.stringify({message: "Stream has been stopped!"}))
		);
	} catch (e) {
		console.log(e);
	}
});

export default feedRouter;
