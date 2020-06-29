import React from "react";
import styled from "styled-components";

type Props = {
	title: string;
	kind: "primary" | "white";
	type: "button" | "submit";
	onClickHandler?: (args: any) => any;
};

const Button: React.FC<Props> = ({title, kind, type, onClickHandler}) => {
	return (
		<>
			<Wrapper kind={kind}>
				<button onClick={onClickHandler} type={type}>
					{title}
				</button>
			</Wrapper>
		</>
	);
};

export default Button;

type WrapperProps = {
	kind: "primary" | "white";
};

const Wrapper = styled.div<WrapperProps>`
	z-index: 1;
	button {
		height: 3em;
		padding: 1em;
		min-width: 7em;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 30px;
		background-color: ${props =>
			props.kind === "primary"
				? "var(--light-grey-color)"
				: props.kind === "white"
				? "white"
				: "white"};
		margin: 1em 0;
		transition: all 0.2s;
		cursor: pointer;
		text-decoration: none;
		transition: all 0.2s;
		font-size: 1em;
		color: ${props =>
			props.kind === "primary" ? "white" : props.kind === "white" ? "black" : "black"};
		border: black;
		:hover {
			background-color: ${props =>
				props.kind === "primary"
					? "var(--light-grey-color)"
					: props.kind === "white"
					? "var(--super-light-grey-color)"
					: "var(--light-grey-color)"};
			box-shadow: "var(--box-shadow), inset 0px 0px 0px 5px #00000017";
		}
	}
`;
