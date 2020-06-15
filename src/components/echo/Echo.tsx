import React from "react";
import styled from "styled-components";
import {SocialMediaPlatforms} from "../../types/types";

export type Echo = Readonly<{
	id: string;
	sourceId: string;
	text: string;
	echoLikes: number;
	sourceLikesFavorites: number;
	author: string;
	authorScreenName: string;
	date: number;
	sourceDate: string;
	sourceLink: string | undefined;
	mediaUrl: string | undefined;
	profileImageUrl: string | undefined;
	platform: SocialMediaPlatforms;
}>;

type Props = Omit<Echo, "id">;

const Echo: React.FC<Props> = ({text, sourceLikesFavorites, author, date}) => {
	return (
		<Wrapper>
			{/* <EchoMedia mediaUrl={mediaUrl} />
			<EchoText text={text} />
			<EchoFooter date={date} author={author} /> */}
			<h1>{text}</h1>
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
		text-align: center;
	}

	p {
		margin: 0.4em;
	}
`;
