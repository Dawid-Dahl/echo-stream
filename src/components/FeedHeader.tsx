import React from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {startFeed, stopFeed} from "../actions/feedActions";

type Props = {
	text: string;
	hashtag: string | null;
};

const FeedHeader: React.FC<Props> = ({text, hashtag}) => {
	const dispatch = useDispatch();
	return (
		<Wrapper>
			<p>{`${text}: ${hashtag}`}</p>
			{/* <button onClick={e => hashtag && dispatch(startFeed(hashtag))}>START FEED ASYNC</button>
			<button onClick={e => dispatch(stopFeed())}>STOP FEED ASYNC</button> */}
		</Wrapper>
	);
};

export default FeedHeader;

const Wrapper = styled.div`
	position: sticky;
	top: 0px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 0.7em;
	letter-spacing: 1px;
	z-index: 10;
	width: 100%;
	color: white;
	background-color: black;

	p {
		text-align: center;
	}
`;
