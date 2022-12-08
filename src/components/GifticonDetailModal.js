import { useState } from "react";
import styled from "styled-components";

export const ModalContainer = styled.div`
	box-sizing: border-box;
	width: 90%;
	height: 20rem;
	margin: 1rem auto;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	position: absolute;
	top: 0;
`;

export const ModalBackdrop = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.4);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 2;
`;

export const ModalView = styled.div.attrs((props) => ({
	role: "dialog",
}))`
	width: 60%;
	height: 50%;
	min-height: 200px;
	background-color: white;
	padding: 25px;
	border-radius: 25px;
	color: black;
`;

const GifticonDetailModal = () => {
	return (
		<>
			<ModalContainer>
				<ModalBackdrop>
					<ModalView onClick={(e) => e.stopPropagation()}>
						여기에 기프티콘 디테일을 넣어주세욤!
					</ModalView>
				</ModalBackdrop>
			</ModalContainer>
		</>
	);
};

export default GifticonDetailModal;
