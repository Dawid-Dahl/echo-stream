import React from "react";
import styled from "styled-components";
import {RootState} from "../store";
import Echo from "./Echo";
import FeedHeader from "./FeedHeader";
import {useSelector} from "react-redux";
import WelcomeMessage from "./WelcomeMessage";
import {config} from "dotenv";

config({
	path: "../../.env",
});

type Props = {};

const Feed: React.FC<Props> = () => {
	const echoes = useSelector((state: RootState) => state.echoReducer.echoes);
	const {hashtag} = useSelector((state: RootState) => state.feedReducer);

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
						sourceId={echo.sourceId}
						sourceDate={echo.sourceDate}
						sourceLink={echo.sourceLink}
						echoLikes={echo.echoLikes}
						author={echo.author}
						authorScreenName={echo.authorScreenName}
						date={echo.date}
						platform={echo.platform}
						sourceLikesFavorites={echo.sourceLikesFavorites}
						profileImageUrl={echo.profileImageUrl}
						mediaUrl={echo.mediaUrl}
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
