import React from "react";
import styled from "styled-components";

type Props = {
	mediaUrl: string | undefined;
};

const EchoMedia: React.FC<Props> = ({mediaUrl}) => {
	return (
		<>
			<div></div>
		</>
	);
};

export default EchoMedia;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
