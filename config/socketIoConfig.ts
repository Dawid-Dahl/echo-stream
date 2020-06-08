import {app} from "../server";
import ioserver, {Socket} from "socket.io";

const server = require("http").Server(app);

const io = ioserver(server);

export default io;
