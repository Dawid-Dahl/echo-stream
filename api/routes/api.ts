import express from "express";
import streamRouter from "./streamRouter";
import {jsonResponse} from "../../src/utils/utils";
import tweetsRouter from "./tweetsRouter";

const apiRouter = express.Router();

apiRouter.get("/ping", (req, res, next) => {
	res.json(jsonResponse(true, "Pong!"));
	next();
});

apiRouter.use("/feed", streamRouter);
apiRouter.use("/tweets", tweetsRouter);

export default apiRouter;
