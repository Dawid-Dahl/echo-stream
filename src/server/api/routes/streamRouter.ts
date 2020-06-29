import express from "express";
import T from "../../config/twitConfig";
import {Stream} from "twit";
import {Platforms} from "../../../client/types/enums";
import {ioServer} from "../../server";
import {jsonResponse} from "../../../client/utils/utils";

const streamRouter = express.Router();

//global variable for Twitter stream
let stream: Stream | null = null;

//password to change hashtag from Admin panel
const PASSWORD = "drama";

streamRouter.post("/start", async (req, res) => {
	try {
		const {hashtag, password} = req.body;

		if (password === PASSWORD) {
			stream?.stop();
			ioServer.emit("disconnect");

			stream = T.stream("statuses/filter", {track: hashtag ?? "#BACKUPHASHTAG"});

			console.log("Stream has been started.");

			const emittedEvent = `${Platforms.twitter}_${hashtag}`;

			stream.on("tweet", tweet => {
				console.log("Emitting tweet!");
				ioServer.emit(emittedEvent, {tweet});
			});

			res.status(200).json(
				jsonResponse(
					true,
					JSON.stringify({
						message: "Stream has started as is emitting!",
						hashtag,
						emittedEvent,
					})
				)
			);
		} else {
			console.log("Client entered the wrong password.");

			ioServer.emit("disconnect");

			res.status(401).json(
				jsonResponse(false, JSON.stringify({message: "Incorrect password"}))
			);
		}
	} catch (e) {
		console.log(e);
		res.status(404).json(
			jsonResponse(false, JSON.stringify({message: "Couldn't connect to the feed server."}))
		);
	}
});

streamRouter.get("/stop", async (req, res) => {
	try {
		if (!stream) {
			res.status(404).json(
				jsonResponse(false, JSON.stringify({message: "No stream is active."}))
			);
			return;
		}

		stream.stop();

		stream = null;

		console.log("Stream has been stopped.");

		ioServer.emit("disconnect");

		res.status(200).json(
			jsonResponse(true, JSON.stringify({message: "Stream has been stopped!"}))
		);
	} catch (e) {
		console.log(e);
		res.status(404).json(
			jsonResponse(
				false,
				JSON.stringify({message: "Something went wrong while stopping the feed server."})
			)
		);
	}
});

export default streamRouter;
