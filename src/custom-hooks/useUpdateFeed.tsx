import {useEffect} from "react";
import {RootState} from "../store";
import {useSelector} from "react-redux";

const useUpdateFeed = () => {
	const {isFeedActive} = useSelector((state: RootState) => state.feedReducer);

	useEffect(() => {
		if (isFeedActive) {
			const clear = setInterval(() => {
				console.log("Updating");
			});
			return () => {
				clearInterval(clear);
			};
		}
	}, [isFeedActive]);
};

export default useUpdateFeed;
