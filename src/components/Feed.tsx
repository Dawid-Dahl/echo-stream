import React, {useEffect} from "react";
import styled from "styled-components";
import {RootState} from "../store";
import Echo from "./Echo";
import FeedHeader from "./FeedHeader";
import useUpdateFeed from "../customHooks/useUpdateFeed";
import {useSelector} from "react-redux";
import WelcomeMessage from "./WelcomeMessage";
import feedService from "../utils/feedService";
import {config} from "dotenv";

config({
	path: "../../.env",
});

type Props = {};

const Feed: React.FC<Props> = () => {
	const echoes = useSelector((state: RootState) => state.echoReducer.echoes);
	const {hashtag, isFetching} = useSelector((state: RootState) => state.feedReducer);

	useEffect(() => {
		if (isFetching) {
			if (feedService.isConnected()) {
				if (hashtag) feedService.listenForAndStoreEchoes(`TWEET_${hashtag}`);
			} else {
				feedService.connect(process.env.SERVER_URL!);
				if (hashtag) feedService.listenForAndStoreEchoes(`TWEET_${hashtag}`);
			}
		} else {
			if (hashtag) {
				feedService.close();
			}
		}
	}, [isFetching, hashtag]);

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
						sourceId={echo.sourceId}
						sourceDate={echo.sourceDate}
						likes={echo.likes}
						author={echo.author}
						date={echo.date}
						platform={echo.platform}
						sourceLikesFavorites={echo.sourceLikesFavorites}
						profileImageUrl={echo.profileImageUrl}
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
