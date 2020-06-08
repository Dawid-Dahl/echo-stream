import store, {RootState} from "../store";
import {startFeedAsync} from "../actions/feedActions";
import {Action} from "redux";
import {ThunkDispatch} from "redux-thunk";

export type StreamService = {
	start: (hashtag: string) => void;
	stop: () => void;
};

const unconfiguredStreamService = (
	dispatch: ThunkDispatch<RootState, unknown, Action<string>>
) => () => ({
	from(): StreamService {
		return {
			start(hashtag: string) {
				dispatch(startFeedAsync(hashtag));
			},
			stop() {
				/* dispatch(stopFeedAsync()); */
			},
		};
	},
});

export default unconfiguredStreamService(store.dispatch);
