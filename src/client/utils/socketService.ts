import io from "socket.io-client";
import {SocketUri} from "../types/types";
import {FeedReducerState} from "../reducers/reducers";

export type SocketService = {
	connect: (socketUri: SocketUri) => Promise<SocketIOClient.Socket | null>;
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
