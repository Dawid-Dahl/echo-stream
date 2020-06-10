import React, {useEffect} from "react";
import styled from "styled-components";
import {RootState} from "../store";
import Echo from "./Echo";
import FeedHeader from "./FeedHeader";
import useUpdateFeed from "../customHooks/useUpdateFeed";
import {useSelector} from "react-redux";
import WelcomeMessage from "./WelcomeMessage";
import socketService from "../utils/socketService";
import {config} from "dotenv";
import {Platforms} from "../types/enums";

config({
	path: "../../.env",
});

type Props = {};

const Feed: React.FC<Props> = () => {
	const echoes = useSelector((state: RootState) => state.echoReducer.echoes);
	const {hashtag, isFeedActive} = useSelector((state: RootState) => state.feedReducer);

	/* useEffect(() => {
		if (isFeedActive) {
			if (socketService.isConnected()) {
				if (hashtag)
					socketService.listenForAndStoreEchoes(`${Platforms.twitter}_${hashtag}`);
			} else {
				socketService.connect(process.env.SERVER_URL!);
				if (hashtag)
					socketService.listenForAndStoreEchoes(`${Platforms.twitter}_${hashtag}`);
			}
		} else {
			if (hashtag) {
				socketService.close();
			}
		}
	}, [isFeedActive, hashtag]); */

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
