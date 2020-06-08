import React, {useEffect} from "react";
import Feed from "./components/Feed";
import {useDispatch, useSelector} from "react-redux";
import {startFeedAsync, setHashtag} from "./actions/feedActions";
import {RootState} from "./store";

const App: React.FC = () => {
	const dispatch = useDispatch();

	const hashtag = "#DRAMATIX";

	useEffect(() => {
		dispatch(startFeedAsync(hashtag));
	}, []);

	return (
		<>
			<Feed />
		</>
	);
};

export default App;
