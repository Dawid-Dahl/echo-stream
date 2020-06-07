import React from "react";
import styled from "styled-components";
import {DummyTweet} from "../types/types";

type Props = Omit<DummyTweet, "id">;

const Tweet: React.FC<Props> = ({text, likes}) => {
	return (
		<Wrapper>
			<h3>{text}</h3>
			<p>{likes}</p>
		</Wrapper>
	);
};

export default Tweet;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid blue;
`;
