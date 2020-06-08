import React from "react";
import styled from "styled-components";
import {RootState} from "../store";
import Echo from "./Echo";
import FeedHeader from "./FeedHeader";
import useUpdateFeed from "../customHooks/useUpdateFeed";
import {useSelector} from "react-redux";
import WelcomeMessage from "./WelcomeMessage";

type Props = {};

const Feed: React.FC<Props> = () => {
	const echoes = useSelector((state: RootState) => state.echoReducer.echoes);
	const hashtag = useSelector((state: RootState) => state.feedReducer.hashtag);

	useUpdateFeed();

	return (
		<Wrapper>
			<FeedHeader text="DELTA I KONVERSATIONEN PÅ TWITTER" hashtag={hashtag} />
			{echoes.length === 0 ? (
				<WelcomeMessage hashtag={hashtag} />
			) : (
				echoes.map(echo => (
					<Echo
						key={echo.id}
						text={echo.text}
						likes={echo.likes}
						author={echo.author}
						date={echo.date}
						platform={echo.platform}
					/>
				))
			)}
		</Wrapper>
	);
};

export default Feed;

const Wrapper = styled.div`
	position: relative;
	height: 99.8vh;
	overflow: auto;
`;
