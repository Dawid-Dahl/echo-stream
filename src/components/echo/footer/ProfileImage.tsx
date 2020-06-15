import React from "react";
import styled from "styled-components";

type Props = {
	profileImageUrl: string | undefined;
};

const ProfileImage: React.FC<Props> = ({profileImageUrl}) => {
	return (
		<>
			<Wrapper>
				<img src={profileImageUrl} alt="profile image" />
			</Wrapper>
		</>
	);
};

export default ProfileImage;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1em;

	img {
		border-radius: 50%;
	}
`;
