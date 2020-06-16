import express from "express";
import feedRouter from "./feedRouter";
import {jsonResponse} from "../../src/utils/utils";
import tweetsRouter from "./tweetsRouter";

const apiRouter = express.Router();

apiRouter.get("/ping", (req, res, next) => {
	res.json(jsonResponse(true, "Pong!"));
	next();
});

apiRouter.use("/feed", feedRouter);
apiRouter.use("/tweets", tweetsRouter);

export default apiRouter;
