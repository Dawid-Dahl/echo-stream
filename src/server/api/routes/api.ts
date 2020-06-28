import express from "express";
import streamRouter from "./streamRouter";
import tweetsRouter from "./tweetsRouter";
import {jsonResponse} from "../../../client/utils/utils";

const apiRouter = express.Router();

apiRouter.get("/ping", (req, res, next) => {
	res.json(jsonResponse(true, "Pong!"));
	next();
});

apiRouter.use("/feed", streamRouter);
apiRouter.use("/tweets", tweetsRouter);

export default apiRouter;
