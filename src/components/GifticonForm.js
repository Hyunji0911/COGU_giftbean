import styled from "styled-components";
import { Link } from "react-router-dom";
import {SelectBox, LabelTextInput, Label, TextInput, CheckLabel, CheckBox} from "../components/styledComponents/Input"

export const GifticonFormContainer = styled.div`
  width: 100%;
  background-color: yellowgreen;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const GifticonFormHeader = styled.header`
  display: flex;
`;

export const BackButton = styled.button``;

export const Form = styled.form`
  background-color: yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SubmitButton = styled.button`
  background: green;
`;

function GifticonForm({ headertext, buttontext }) {
  return (
    <GifticonFormContainer>
      <GifticonFormHeader>
        <Link to="/">
          <BackButton>⬅️</BackButton>
        </Link>
        <div>{headertext}</div>
      </GifticonFormHeader>
      <Form>
        <label htmlFor="category-select">Category</label>
        <SelectBox name="categories" id="category-select">
          <option value="">--선택하콩--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </SelectBox>

        <LabelTextInput id="brand" text="브랜드명" placeholder="브랜드명을 입력하세요" />
        <LabelTextInput id="itemName" text="제품명" placeholder="제품명을 입력하세요" />
        <LabelTextInput id="barcode" text="바코드번호" placeholder="브랜드명을 입력하세요" />
        
        {/* <label for="brand">브랜드명</label>
        <input
          type="text"
          id="brand"
          name="brand"
          required
          minlength="4"
          maxlength="8"
          size="10"
        ></input>
        
        <label for="itemName">상품 이름</label>
        <input
          type="text"
          id="itemName"
          name="itemName"
          required
          minlength="4"
          maxlength="8"
          size="10"
        ></input>

        <label for="barcode">바코드번호</label>
        <input
          type="number"
          id="barcode"
          name="barcode"
          required
          minlength="4"
          maxlength="8"
          size="10"
        ></input> */}

        <Label htmlFor="expirationDate">유효기간</Label>
        <TextInput
          type="date"
          id="expirationDate"
          name="expirationDate"
          required
          minlength="4"
          maxlength="8"
          size="10"
        ></TextInput>
        <LabelTextInput id="memo" text="브랜드명" placeholder="브랜드명을 입력하세요" />
        {/* <label for="memo">메모</label>
        <textarea
          type="text"
          id="memo"
          name="memo"
          required
          minlength="4"
          maxlength="8"
          size="10"
        ></textarea> */}
        <SubmitButton>{buttontext}</SubmitButton>
      </Form>
    </GifticonFormContainer >
  );
}

export default GifticonForm;
