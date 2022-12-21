import { useState } from 'react';
import Logo from '../assets/Logo.svg';
import Toggle from '../components/styledComponents/Toggle';
import BackButton from '../components/styledComponents/BackButton';
import NavigationBar from '../components/styledComponents/NavigationBar';
import {
    CheckBox,
    LabelTextInput,
    SelectBox,
    TextInput,
    TextInputCenter,
} from '../components/styledComponents/Input';
import {
    GreenButton,
    GreenBottomButton,
} from '../components/styledComponents/GreenButton';
import styled from 'styled-components';
import SortFilter from '../components/styledComponents/SortFilter';
import GifticonItem from '../components/GifticonItem';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function ComponentTestPage() {
    const [checked, setChecked] = useState(false);
    return (
        <Main>
            <img alt="Logo" width="50" src={Logo}></img>
            <Toggle />
            <p />
            <BackButton linkTo={'/'} />
            <NavigationBar />
            <TextInput placeholder="TextInput" />
            <TextInputCenter placeholder="TextInputCenter" />
            <SelectBox>
                <option>options</option>
                <option>options</option>
                <option>options</option>
            </SelectBox>
            <LabelTextInput
                id="id"
                text="LabelTextInput"
                placeholder="LabelTextInput"
            />
            <CheckBox
                id="idd"
                checked={checked}
                checkedHandler={(e) => {
                    setChecked(e.target.checked);
                }}
            />
            <GreenButton>GreenButton</GreenButton>
            <GreenBottomButton>GreenBottomButton</GreenBottomButton>
            <GifticonItem />
            <SortFilter />
        </Main>
    );
}
export default ComponentTestPage;

//jsDoc (vs코드 변수명이나 함수명에 주석)

// 1. 시멘틱하지 않다 ** >> 1. DX / 2.SEO (next.js가 핫한 이유)
// 2. 생각 이상으로 쪼개야 한다 >> 유효성 검사를 고려한
// 3. 지금 코드 유지보수 힘들다
// input에 들어온 값들을 handle하는 함수들을 많이 만들텐데 "hook"
// ** Layout Shift ** 검색해보기
