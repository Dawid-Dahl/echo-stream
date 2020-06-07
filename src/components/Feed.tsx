import React from "react";
import styled from "styled-components";
import {RootState} from "../store";
import Tweet from "./Tweet";
import {useSelector} from "react-redux";

type Props = {};

const Feed: React.FC<Props> = () => {
	const tweets = useSelector((state: RootState) => state.tweetsReducer.tweets);

	return (
		<Wrapper>
			{tweets.map(tweet => (
				<Tweet key={tweet.id} text={tweet.text} likes={tweet.likes} />
			))}
		</Wrapper>
	);
};

export default Feed;

const Wrapper = styled.div`
	max-width: 30em;
	height: 100vh;
	border: 1px solid red;
`;
