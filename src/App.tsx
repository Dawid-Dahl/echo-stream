import React, {useEffect} from "react";
import Feed from "./components/Feed";
import {useDispatch} from "react-redux";
import {startFeedAsync} from "./actions/feedActions";

const App: React.FC = () => {
	const dispatch = useDispatch();

	const hashtag = "#arnedramatix";

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
