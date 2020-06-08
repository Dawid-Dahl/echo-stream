import React from "react";
import styled from "styled-components";
import {SocialMediaPlatforms} from "../types/types";
import {startFeedAsync, stopFeedAsync} from "../actions/feedActions";
import {useDispatch} from "react-redux";

export type Echo = {
	id: string;
	text: string;
	likes: number;
	author: string;
	date: Date | string;
	imageUrl?: string | null;
	profileImageUrl?: string | null;
	platform: SocialMediaPlatforms;
};

type Props = {
	hashtag: string | null;
};

const WelcomeMessage: React.FC<Props> = ({hashtag}) => {
	const dispatch = useDispatch();
	return (
		<Wrapper>
			<h2>Welcome to the event!</h2>
			<h3>See your message displayed here by posting to the hashtag: ${hashtag}</h3>
			<h1>{`${hashtag}`}</h1>
			<button onClick={e => dispatch(startFeedAsync("#LOLLERCAUSTER"))}>
				START FEED ASYNC
			</button>
			<button onClick={e => dispatch(stopFeedAsync())}>STOP FEED ASYNC</button>
		</Wrapper>
	);
};

export default WelcomeMessage;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 1em;
	padding: 1em;
	color: black;

	h1 {
		margin: 0.4em;
		text-align: center;
	}

	h2 {
		margin: 0.4em;
		text-align: center;
	}

	h3 {
		margin: 0.4em;
		text-align: center;
	}
`;
