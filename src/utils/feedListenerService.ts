import store from "../store";
import io from "socket.io-client";
import {addSingleEcho} from "../actions/echoActions";
import {Dispatch} from "redux";
import {Echo} from "../components/Echo";

export type FeedListenerService = {};

const unconfiguredfeedListenerService = (io: SocketIOClientStatic, dispatch: Dispatch) => (
	socketUri: string
) => ({
	socket: io(socketUri),
	from(): FeedListenerService {
		return {
			storeEchoesInRedux(echo: Echo) {
				dispatch(addSingleEcho(echo));
			},
		};
	},
});

export default unconfiguredfeedListenerService(io, store.dispatch);
