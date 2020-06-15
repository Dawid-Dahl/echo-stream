import React, {useEffect} from "react";
import Feed from "./components/Feed";
import {useDispatch} from "react-redux";
import {startFeed} from "./actions/feedActions";

const App: React.FC = () => {
	const dispatch = useDispatch();

	const HASHTAG = "#dogs";

	useEffect(() => {
		dispatch(startFeed(HASHTAG));
	}, []);

	return (
		<>
			<Feed />
		</>
	);
};

export default App;
