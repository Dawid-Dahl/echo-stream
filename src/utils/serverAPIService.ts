import store, {RootState} from "../store";
import {startFeedAsync, stopFeedAsync} from "../actions/feedActions";
import {Action} from "redux";
import {ThunkDispatch} from "redux-thunk";

export type ServerAPIService = {
	start: (hashtag: string) => void;
	stop: () => void;
};

//Communicates With Server

const unconfiguredServerAPIService = (
	dispatch: ThunkDispatch<RootState, unknown, Action<string>>
) => () => ({
	from(): ServerAPIService {
		return {
			start(hashtag: string) {
				dispatch(startFeedAsync(hashtag));
			},
			stop() {
				dispatch(stopFeedAsync());
			},
		};
	},
});

const serverAPIService = unconfiguredServerAPIService(store.dispatch);

export default serverAPIService;
