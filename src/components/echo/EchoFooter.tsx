import React from "react";
import styled from "styled-components";
import {SocialMediaPlatforms} from "../../types/types";

type Props = {
	author: string;
	authorScreenName: string;
	profileImageUrl: string | undefined;
	sourceDate: string;
	platform: SocialMediaPlatforms;
};

const EchoFooter: React.FC<Props> = ({
	author,
	authorScreenName,
	profileImageUrl,
	sourceDate,
	platform,
}) => {
	return (
		<>
			<div></div>
		</>
	);
};

export default EchoFooter;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
