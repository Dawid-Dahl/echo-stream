import React, {useEffect} from "react";
import styled from "styled-components";
import {RootState} from "../store";
import Echo from "./Echo";
import {echo} from "../utils/utils";
import {useSelector, useDispatch} from "react-redux";
import {addSingleEcho} from "../actions/echoActions";
import FeedHeader from "./FeedHeader";

type Props = {};

const Feed: React.FC<Props> = () => {
	const echoes = useSelector((state: RootState) => state.echoReducer.echo);
	const dispatch = useDispatch();

	useEffect(() => {
		const clear = setInterval(() => {
			dispatch(
				addSingleEcho(
					echo("This is the echo content.", Math.round(Math.random() * 10), "author")
				)
			);
		}, 2000);
		return () => {
			clearInterval(clear);
		};
	}, []);

	return (
		<Wrapper>
			<FeedHeader text="DELTA I KONVERSATIONEN PÅ TWITTER" hashtag="#awesomehashtag" />
			{echoes.map(echo => (
				<Echo key={echo.id} text={echo.text} likes={echo.likes} author={echo.author} />
			))}
		</Wrapper>
	);
};

export default Feed;

const Wrapper = styled.div`
	position: relative;
	height: 99.8vh;
	overflow: auto;
`;
