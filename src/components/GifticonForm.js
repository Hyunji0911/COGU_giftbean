import styled from "styled-components";
import {
	SelectBox,
	LabelTextInput,
	Label,
	TextInput,
	CheckBox,
} from "../components/styledComponents/Input";
import BackButton from "./styledComponents/BackButton";
import { GreenBottomButton } from "./styledComponents/GreenButton";

export const GifticonFormContainer = styled.div`
	/* width: 100%; */

	.backbuttonContainer {
		position: absolute;
		top: 20px;
		left: 20px;
	}

	.headertextContainer {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export const GifticonFormHeader = styled.header`
	width: 100%;
	height: 64px;
	background-color: white;
	display: flex;
`;

export const Form = styled.form`
	/* background-color: yellow; */
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	& > div:first-child {
		margin-top: 20px;
	}

	& > div {
		margin-bottom: 20px;
	}

	.checkboxContainer {
		width: 100%;
		padding: 0px 20px 0px 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;

		& > p {
			margin-left: 3px;
		}
	}

	.memo {
		height: 118px;
	}

	.greenBottomButton {
		position: absolute;
		bottom: 0;
		margin: 0;
	}
`;

export const SubmitButton = styled.button`
	background: green;
`;

function GifticonForm({ headertext, buttontext }) {
	return (
		<GifticonFormContainer>
			<GifticonFormHeader>
				<span className="backbuttonContainer">
					<BackButton linkTo={"/"} />
				</span>
				<div className="headertextContainer">{headertext}</div>
			</GifticonFormHeader>
			<Form>
				<div>
					<Label htmlFor="categories">Category</Label>
					<SelectBox
						name="categories"
						id="category-select">
						<option value="">--선택하콩--</option>
						<option value="dog">Dog</option>
						<option value="cat">Cat</option>
						<option value="hamster">Hamster</option>
						<option value="parrot">Parrot</option>
						<option value="spider">Spider</option>
						<option value="goldfish">Goldfish</option>
					</SelectBox>
				</div>
				<LabelTextInput
					id="brand"
					text="브랜드명"
					placeholder="브랜드명을 입력하세요"
				/>
				<div className="checkboxContainer">
					<span>금액권</span>
					<CheckBox id="금액권"></CheckBox>
				</div>
				<LabelTextInput
					id="itemName"
					text="제품명"
					placeholder="제품명을 입력하세요"
				/>
				<div>
					<Label htmlFor="expirationDate">유효기간</Label>
					<TextInput
						type="date"
						id="expirationDate"
						name="expirationDate"
						required
						minlength="4"
						maxlength="8"
						size="10"></TextInput>
				</div>
				<LabelTextInput
					id="barcode"
					text="바코드번호"
					placeholder="바코드 번호를 입력하세요"
				/>
				<div>
					<Label htmlFor="memo">메모</Label>
					<TextInput
						type="text"
						id="memo"
						name="memo"
						placeholder="메모를 입력하세요"
						required
						className="memo"></TextInput>
				</div>
				<div className="greenBottomButton">
					<GreenBottomButton>{buttontext}</GreenBottomButton>
				</div>
			</Form>
		</GifticonFormContainer>
	);
}

export default GifticonForm;
