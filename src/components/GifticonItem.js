import GifticonDetailModal from "./GifticonDetailModal";
import { useState } from "react";
import styled from "styled-components";

export const GifticonItemContainer = styled.button`
	width: 100%;
	height: 100%;
	background-color: red;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ModalBtn = styled.button`
	width: 230px;
	padding: 20px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	background-color: purple;
	color: white;
	text-decoration: none;
	border: none;
	border-radius: 30px;
	cursor: pointer;
`;

function GifticonItem() {
	const [isOpen, setIsOpen] = useState(false);

	const openModalHandler = () => {
		isOpen ? setIsOpen(false) : setIsOpen(true);
	};

	return (
		<GifticonItemContainer>
			<ModalBtn onClick={openModalHandler}>
				{isOpen ? <GifticonDetailModal /> : null}
				<div>banner</div>
				<div>title</div>
				<div>pic</div>
				<div>name</div>
				<div>date</div>
			</ModalBtn>
		</GifticonItemContainer>
	);
}

export default GifticonItem;
