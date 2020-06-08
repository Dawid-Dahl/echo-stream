import express from "express";
import feedRouter from "./feedRouter";
import {jsonResponse} from "../../src/utils/utils";

const apiRouter = express.Router();

apiRouter.get("/ping", (req, res, next) => {
	res.json(jsonResponse(true, "Pong!"));
	next();
});

apiRouter.use("/feed", feedRouter);

export default apiRouter;
