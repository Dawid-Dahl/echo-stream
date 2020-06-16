import express from "express";
import T from "../../config/twitConfig";

const tweetsRouter = express.Router();

tweetsRouter.get("/getSingleTweet", (req, res) => {
	const {id} = req.body;

	T.get(`statuses/show.json?id=${id}&tweet_mode=extended`, function (err, data, response) {
		try {
			if (data) {
				console.log(data);
				res.status(200).json(data);
			} else {
				res.status(404);
			}
		} catch (e) {
			console.log(err);
			res.status(404);
		}
	});
});

export default tweetsRouter;
