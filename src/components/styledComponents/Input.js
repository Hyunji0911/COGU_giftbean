import styled from "styled-components";

/**
 * email, password 등 다른 타입 필요 시 type="" 속성 추가 필요
 */
const TextInput = styled.input`
	width: 350px;
	height: 40px;
	color: #000;
	border: 0.5px solid #ccc;
	padding: 0px 10px;
	font-size: 16px;
	outline: none;
	border-radius: 5px;
	&::placeholder {
		color: #aaa;
	}
`;

const TextInputCenter = styled(TextInput)`
	text-align: center;
`;

const Label = styled.label`
	font-size: 16px;
	color: #000;
	display: block;
	margin-left: 4px;
	margin-bottom: 5px;
`;

const SelectBox = styled.select`
	width: 350px;
	height: 40px;
	color: #000;
	border: 0.5px solid #ccc;
	padding-left: 10px;
	font-size: 16px;
	outline: none;
	border-radius: 5px;
`;

/**
 * 라벨과 인풋 텍스트가 결합된 형태.
 * @param {string} id - input id
 * @param {string} text - label에 들어갈 text
 * @param {string} placeholder - input에 들어갈 placeholder
 * @param {(e) => {}} onChange ((e) => {}) - input을 위한 이벤트 핸들러
 */
const LabelTextInput = ({
	id = "",
	text = "",
	placeholder = "",
	onChange = (e) => {},
}) => {
	return (
		<div className="labelTextInput-Container">
			<Label htmlFor={id}>{text}</Label>
			<TextInput
				name={id}
				placeholder={placeholder}
				onChange={(e) => onChange(e)}
			/>
		</div>
	);
};

// CheckBox 스타일링을 위한 스타일 컴포넌트
const CheckLabel = styled.label`
	display: inline-block;
	width: 33px;
	height: 33px;
	border: 0.5px solid ${(props) => (props.checked ? "#295907" : "#ccc")};
	background-color: ${(props) => (props.checked ? "#295907" : "#fff")};
	border-radius: 5px;
	font-size: 22px;
	text-align: center;
	color: #fff;
`;

const CheckInput = styled.input.attrs((props) => ({ type: "checkbox" }))`
	opacity: 0;
`;

/**
 * checkbox가 스타일된 컴포넌트.
 * @param {string} id - input id
 * @param {boolean} checked - 체크값 (state)
 * @param {(e) => {}} checkedHandler - state 변경 함수 ((e) => {})
 */
const CheckBox = ({ id, checked, checkedHandler = () => {} }) => {
	return (
		<>
			<CheckInput
				id={id}
				type="checkbox"
				onChange={(e) => checkedHandler(e)}
			/>
			<CheckLabel
				htmlFor={id}
				checked={checked}>
				{checked ? "✔" : undefined}
			</CheckLabel>
		</>
	);
};

export {
	TextInput,
	TextInputCenter,
	SelectBox,
	LabelTextInput,
	Label,
	CheckBox,
};
