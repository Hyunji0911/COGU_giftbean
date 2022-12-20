import styled from 'styled-components';

const Container = styled.li`
    width: 165px;
    height: 165px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.15);
    letter-spacing: -2%;
    background-color: #fff;
    color: #000;
    box-sizing: border-box;
    cursor: pointer;
    .brand {
        font-size: 16px;
        line-height: 16px;
        font-weight: 700;
    }
    .icon {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: #295907;
        position: relative;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .icon > .dDay {
        position: absolute;
        bottom: 0;
        width: 50px;
        height: 15px;
        border-radius: 3px;
        background-color: #89bf15;
        font-size: 10px;
        font-weight: 500;
        color: #fff;
        text-align: center;
        line-height: 15px;
    }
    .item {
        font-size: 14px;
        line-height: 14px;
    }
    .expDate {
        font-size: 12px;
        line-height: 12px;
    }
`;

const Item = ({ data, modalHandler = () => {} }) => {
    return (
        <Container onClick={modalHandler}>
            <span className="brand">브랜드명</span>
            <div className="icon">
                이미지
                <div className="dDay">D - 134</div>
            </div>
            <span className="item">상품명</span>
            <span className="expDate">~ 2022.2.22</span>
        </Container>
    );
};

export default Item;
