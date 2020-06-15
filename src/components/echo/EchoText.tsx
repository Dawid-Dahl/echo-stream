import React from "react";
import styled from "styled-components";

type Props = {
	text: string;
};

const EchoText: React.FC<Props> = ({text}) => {
	return (
		<>
			<div></div>
		</>
	);
};

export default EchoText;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
