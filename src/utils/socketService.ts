import store from "../store";
import io from "socket.io-client";
import {config} from "dotenv";
import {SocketUri} from "../types/types";
import {FeedReducerState} from "../reducers/reducers";

config({
	path: "../../.env",
});

if (!process.env.SERVER_URL) throw new Error("Can't retrieve .env variable.");

export type SocketService = {
	connect: (socketUri: SocketUri) => Promise<SocketIOClient.Socket | null>;
	/* listenForAndStoreEchoes: (event: string) => void; */
	close: (socket: SocketIOClient.Socket, event: FeedReducerState["emittedEvent"]) => void;
};

//Communicates With Socket.io

const unconfiguredsocketService = (io: SocketIOClientStatic): SocketService => ({
	connect(socketUri: string) {
		try {
			const socket = io(socketUri);
			return new Promise(res => {
				socket && socket.on("connect", () => console.log("Client connected!"));
				res(socket);
			});
		} catch (e) {
			console.log(e);
			return Promise.reject(null);
		}
	},
	/* listenForAndStoreEchoes(event: string) {
		if (!this.socket) {
			console.error("No socket connected!");
			return;
		}

		this.connect(process.env.SERVER_URL!);

		this.event = event;

		console.log(`Listening for "${this.event}" events.`);

		this.socket.on(this.event, (data: any) => {
			const echo = echoConverter("twitter", data);

			dispatch(addSingleEcho(echo as Echo));
		});
	}, */
	close(socket, event) {
		event
			? console.log(`Stops listening for "${event}" events.`)
			: console.error("Can't find any event!");
		socket
			? socket.close()
			: console.error(
					"Unable to close socket connection because socket was null or undefined."
			  );
	},
});

const socketService = unconfiguredsocketService(io);

export default socketService;
