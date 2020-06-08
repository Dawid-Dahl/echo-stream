import "dotenv/config";
import express from "express";
import errorhandler from "errorhandler";
import apiRouter from "./api/routes/api";
import morgan from "morgan";
import cors from "cors";

export const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan("dev"));
app.use(
	cors({
		origin: "http://localhost:1234",
		exposedHeaders: ["x-token"],
	})
);

app.locals.stream = null;
app.locals.isFetching = false;
app.locals.hashtag = null;

if (process.env.NODE_ENV === "production") {
	app.use(express.static("dist"));
}

app.use("/api", apiRouter);

app.use(errorhandler());

app.listen(PORT, () => console.log(`Server now listening at port: ${PORT}`));
