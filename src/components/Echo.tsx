import React from "react";
import styled from "styled-components";

export type Echo = {
	id: string;
	text: string;
	likes: number;
	author: string;
	date: Date | string;
};

type Props = Omit<Echo, "id" | "date">;

const Echo: React.FC<Props> = ({text, likes, author}) => {
	return (
		<Wrapper>
			<h3>{text}</h3>
			<p>{likes}</p>
			<p>{author}</p>
			<p>{"a day ago"}</p>
		</Wrapper>
	);
};

export default Echo;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 1em;
	border-radius: var(--border-radius);
	background-color: var(--main-grey-color);
	color: white;

	h3 {
		margin: 0.4em;
	}

	p {
		margin: 0.4em;
	}
`;
