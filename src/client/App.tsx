import React, {useEffect} from "react";
import Feed from "./components/Feed";
import {useDispatch, useSelector} from "react-redux";
import {connectToFeed} from "./actions/feedActions";
import {RootState} from "./store";
import {openAdmin, closeAdmin} from "./actions/adminActions";

const App: React.FC = () => {
	const dispatch = useDispatch();
	const isAdminOpen = useSelector((state: RootState) => state.adminReducer.isAdminOpen);

	const toggleAdmin = e => {
		if (e.ctrlKey && e.key === "q") {
			if (isAdminOpen) {
				dispatch(closeAdmin());
			} else {
				dispatch(openAdmin());
			}
		}
	};

	useEffect(() => {
		dispatch(connectToFeed());
	}, []);

	useEffect(() => {
		window.addEventListener("keydown", toggleAdmin);

		return () => {
			window.removeEventListener("keydown", toggleAdmin);
		};
	});

	return (
		<>
			<Feed />
		</>
	);
};

export default App;
