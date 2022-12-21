import BackButton from '../components/styledComponents/BackButton';
import styled from 'styled-components';
import { GreenBottomButton } from '../components/styledComponents/GreenButton';
import {
    LabelTextInput,
    SelectBox,
    Label,
} from '../components/styledComponents/Input';

const UserInfoEditContiner = styled.div`
    height: 844px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;

    .header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 64px;

        & > a {
            position: absolute;
            left: 20px;
        }

        & > p {
            font-size: 20px;
        }
    }

    .userinfo-edit-form {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-top: 112px;
        margin-bottom: 178px;
        & > div {
            margin-bottom: 20px;
        }
    }
`;

function UserInfoEditPage() {
    return (
        <UserInfoEditContiner>
            <div className="header">
                <BackButton linkTo="/settings" />
                <p>수정하기</p>
            </div>
            <div className="userinfo-edit-form">
                <LabelTextInput id="name" text="이름" placeholder="이름" />
                <LabelTextInput
                    id="email"
                    text="이메일"
                    placeholder="hell_O_world@helloworld.com"
                />
                <LabelTextInput
                    id="password"
                    text="비밀번호 변경"
                    placeholder="비밀번호 변경"
                />
                <LabelTextInput
                    id="password-confirm"
                    text="비밀번호 변경 확인"
                    placeholder="비밀번호 변경 확인"
                />

                <div>
                    <Label htmlFor="category-select">만료 알림 설정</Label>
                    <SelectBox name="categories" id="category-select">
                        <option>--선택하콩--</option>
                        <option>7일</option>
                        <option>3일</option>
                        <option>설정안함</option>
                    </SelectBox>
                </div>
            </div>
            <GreenBottomButton>등록하기</GreenBottomButton>
        </UserInfoEditContiner>
    );
}

export default UserInfoEditPage;
