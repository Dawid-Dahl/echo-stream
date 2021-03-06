import React from "react";
import styled from "styled-components";

type Props = {
	text: string;
	hashtag: string | null;
};

const FeedHeader: React.FC<Props> = ({text, hashtag}) => {
	return (
		<Wrapper>
			<p>{`${text}: ${hashtag}`}</p>
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
