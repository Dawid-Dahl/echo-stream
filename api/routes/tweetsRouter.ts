import express from "express";
import T from "../../config/twitConfig";
import {jsonResponse} from "../../src/utils/utils";
import {Stream} from "twit";
import {ioServer} from "../../server";
import {Platforms} from "../../src/types/enums";
import {restartServer} from "./api-utils/apiUtils";

const tweetsRouter = express.Router();

tweetsRouter.get("/getSingleTweet", (req, res) => {
	const {id} = req.body;

	console.log(id);

	T.get(`statuses/show.json?id=${id}`, function (err, data, response) {
		if (data) {
			console.log(data);
			res.status(200).json(data);
		} else {
			res.status(404);
		}
	});
});

export default tweetsRouter;
