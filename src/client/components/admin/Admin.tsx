import React, {useState} from "react";
import styled from "styled-components";
import {config} from "dotenv";
import TextInput from "../inputs/TextInput";
import {useDispatch, useSelector} from "react-redux";
import Button from "../inputs/Button";
import {RootState} from "../../store";
import {startFeed} from "../../actions/feedActions";
import {addHashtagToString} from "../../utils/utils";
import {closeAdmin} from "../../actions/adminActions";

config({
	path: "../../.env",
});

type Props = {};

const Admin: React.FC<Props> = () => {
	const dispatch = useDispatch();

	const isAdminOpen = useSelector((state: RootState) => state.adminReducer.isAdminOpen);

	const [adminHashtag, setAdminHashtag] = useState("");
	const [password, setPassword] = useState("");

	const changeHashtag = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (adminHashtag.length === 0) return;

		dispatch(startFeed(addHashtagToString(adminHashtag), password));
		setAdminHashtag("");
		setPassword("");
		dispatch(closeAdmin());
	};

	return (
		<StyledForm onSubmit={changeHashtag} isAdminOpen={isAdminOpen}>
			<div className="innerWrapper">
				<TextInput
					value={adminHashtag}
					type="text"
					onChangeHandle={e => setAdminHashtag(e.target.value)}
					name="Change #Hashtag?"
				/>
				<TextInput
					value={password}
					type="text"
					onChangeHandle={e => setPassword(e.target.value)}
					name="Password"
				/>
				<Button title="Edit Hashtag" kind="white" type="submit" />
			</div>
		</StyledForm>
	);
};

export default Admin;

type StyledFormProps = {
	isAdminOpen: boolean;
};

const StyledForm = styled.form<StyledFormProps>`
	position: fixed;
	top: 0;
	background-color: black;
	height: 99.8vh;
	width: 100%;
	overflow: auto;
	transform: ${props => (props.isAdminOpen ? "translateX(0%)" : "translateX(-100%)")};
	z-index: 1;
	transition: all 0.5s;

	.innerWrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 50vh;
	}
`;
