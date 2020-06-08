import express from "express";
import T from "../../config/twitConfig";
import {jsonResponse, unconfiguredSetLocalNodeState} from "../../src/utils/utils";
import {Stream} from "twit";
import {ioServer} from "../../server";

const feedRouter = express.Router();

feedRouter.post("/start", async (req, res) => {
	try {
		const setLocalNodeState = unconfiguredSetLocalNodeState(req);

		const {hashtag} = req.body;

		const stream = T.stream("statuses/filter", {track: hashtag ?? ""});

		console.log("Stream has been started.");

		stream.on("tweet", tweet => {
			ioServer.emit(`TWEET_${hashtag}`, {tweet});
		});

		setLocalNodeState(true, stream, hashtag);

		res.status(200).json(
			jsonResponse(true, JSON.stringify({message: "Stream has started!", hashtag: hashtag}))
		);
	} catch (e) {
		console.log(e);
	}
});

feedRouter.get("/stop", async (req, res) => {
	try {
		const setLocalNodeState = unconfiguredSetLocalNodeState(req);

		const stream: Stream = req.app.locals.stream;

		if (!stream) {
			res.status(404).json(
				jsonResponse(false, JSON.stringify({message: "No stream is active."}))
			);
			return;
		}

		stream.stop();

		console.log("Stream has been stopped.");

		setLocalNodeState(false, null, null);

		res.status(200).json(
			jsonResponse(true, JSON.stringify({message: "Stream has been stopped!"}))
		);
	} catch (e) {
		console.log(e);
	}
});

export default feedRouter;
