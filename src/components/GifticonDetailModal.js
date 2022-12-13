import styled from "styled-components";
import modify from "../assets/modify.svg";
import barcode from "../assets/barcode.svg";
import close from "../assets/close.svg";

const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  button {
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .bg {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  .modal {
    width: 350px;
    height: 680px;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    position: relative;
  }

  .close {
    position: absolute;
    top: -30px;
    right: 0;
    span {
      font-weight: 400;
      font-size: 16px;
      color: #fff;
      padding-right: 10px;
      padding-bottom: 2px;
    }
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 310px;
    height: 30px;
  }

  h3.brand {
    margin-top: 20px;
    font-weight: 700px;
    font-size: 24px;
  }

  .icon {
    width: 165px;
    height: 165px;
    border-radius: 50%;
    background-color: #295907;
    position: relative;
    margin-top: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon > .dDay {
    position: absolute;
    bottom: -6px;
    width: 115px;
    height: 35px;
    border-radius: 3px;
    background-color: #89bf15;
    font-size: 24px;
    font-weight: 700;
    color: #fff;
    text-align: center;
    line-height: 33px;
  }

  h4.item {
    margin-top: 26px;
    font-size: 24px;
    font-weight: 400;
  }

  p.memo {
    width: 204px;
    height: 90px;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    margin-top: 20px;
  }

  p.expDate {
    margin-top: 10px;
    font-weight: 400;
    font-size: 20px;
  }

  .barcode {
    margin-top: 20px;
  }

  .useItem {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    border-radius: 0 0 10px 10px;
    border: 0;
    background-color: #4c8c0d;
  }
`;

const GifticonDetailModal = ({ modalHandler }) => {
  return (
    <ModalContainer>
      <div className="bg" onClick={modalHandler}>
        <article
          className="modal"
          role="dialog"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="close" onClick={modalHandler}>
            <span>닫기</span> <img src={close} />
          </button>
          <div className="modal-header">
            <div>토글 버튼</div>
            <button>
              <img src={modify} />
            </button>
          </div>
          <h3 className="brand">브랜드명</h3>
          <div className="icon">
            이미지
            <div className="dDay">D - 134</div>
          </div>
          <h4 className="item">상품명</h4>
          <p className="memo">메모</p>
          <p className="expDate">~ 2022.2.22</p>
          <div className="barcode">
            <img src={barcode} />
          </div>
          <button className="useItem">사용하기</button>
        </article>
      </div>
    </ModalContainer>
  );
};

export default GifticonDetailModal;
