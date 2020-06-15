import React from "react";
import styled from "styled-components";

type Props = {
	mediaUrl: string | undefined;
	sourceLink: string | undefined;
};

const EchoMedia: React.FC<Props> = ({mediaUrl, sourceLink}) => {
	console.log(mediaUrl);
	return (
		<>
			<Wrapper>
				{mediaUrl && (
					<a href={sourceLink} target="_blank" rel="noopener noreferrer">
						<img src={mediaUrl} alt="video or image" />
					</a>
				)}
			</Wrapper>
		</>
	);
};

export default EchoMedia;

const Wrapper = styled.div`
	img {
		width: 100%;
		max-height: 25em;
		object-fit: cover;
		cursor: pointer;
	}
`;
