import {useEffect} from "react";
import {RootState} from "../store";
import {useSelector, useDispatch} from "react-redux";
import {addSingleEcho} from "../actions/echoActions";
import echo from "../entities/echo";

const useUpdateFeed = () => {
	const {fetchSpeed, isFetching} = useSelector((state: RootState) => state.feedReducer);

	useEffect(() => {
		if (isFetching) {
			const clear = setInterval(() => {
				console.log("Updating");
			}, fetchSpeed);
			return () => {
				clearInterval(clear);
			};
		}
	}, [fetchSpeed, isFetching]);
};

export default useUpdateFeed;
