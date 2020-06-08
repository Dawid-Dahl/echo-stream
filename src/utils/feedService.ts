import store from "../store";
import io from "socket.io-client";
import {Dispatch} from "redux";
import echoConverter from "./echoConverter";
import {addSingleEcho} from "../actions/echoActions";
import {Echo} from "../components/Echo";

export type FeedService = {
	socket: SocketIOClient.Socket | null;
	event: string | null;
	isConnected: () => boolean;
	connect: (socketUri: string) => void;
	listenForAndStoreEchoes: (event: string) => void;
	close: () => void;
};

//Communicates With Socket.io

const unconfiguredfeedService = (io: SocketIOClientStatic, dispatch: Dispatch): FeedService => ({
	socket: null,
	event: null,
	isConnected() {
		return this.socket ? true : false;
	},
	connect(socketUri: string) {
		this.socket = io(socketUri);
		this.socket.on("connect", () => console.log("Client connected!"));
	},
	listenForAndStoreEchoes(event: string) {
		if (!this.socket) {
			console.error("No socket connected!");
			return;
		}

		this.event = event;

		console.log(`Listening for "${this.event}" events.`);

		console.log(this.event);

		this.socket.on(this.event, (data: any) => {
			const echo = echoConverter("twitter", data);

			dispatch(addSingleEcho(echo as Echo));
		});
	},
	close() {
		console.log(`Stops listening for "${this.event}" events.`);
		this.socket?.close();
	},
});

const feedService = unconfiguredfeedService(io, store.dispatch);

export default feedService;
