import express from "express";
import feedRouter from "./feedRouter";

const apiRouter = express.Router();

apiRouter.get("/ping", (req, res, next) => {
	res.json("Pong!");
	next();
});

apiRouter.use("/feed", feedRouter);

export default apiRouter;
