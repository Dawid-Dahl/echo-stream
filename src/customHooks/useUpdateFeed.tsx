import {useEffect} from "react";
import {RootState} from "../store";
import {useSelector} from "react-redux";

const useUpdateFeed = () => {
	const {fetchSpeed, isFeedActive} = useSelector((state: RootState) => state.feedReducer);

	useEffect(() => {
		if (isFeedActive) {
			const clear = setInterval(() => {
				console.log("Updating");
			}, fetchSpeed);
			return () => {
				clearInterval(clear);
			};
		}
	}, [fetchSpeed, isFeedActive]);
};

export default useUpdateFeed;
