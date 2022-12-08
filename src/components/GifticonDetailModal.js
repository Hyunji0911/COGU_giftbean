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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ModalHeader = styled.header`
  display: flex;
  flex-direction: rows;
  justify-content: space-between;
`;

const GifticonDetailModal = ({ openModalHandler }) => {
  return (
    <>
      <ModalContainer>
        <ModalBackdrop onClick={openModalHandler}>
          <ModalView onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <div>토글 버튼 자리</div>
              <div>사용 여부 텍스트</div>
              <button>수정 버튼</button>
            </ModalHeader>
            <div>아이템 아이콘</div>
            <div>유효기간</div>
            <div>바코드 이미지</div>
            <button onClick={openModalHandler}>닫기</button>
          </ModalView>
        </ModalBackdrop>
      </ModalContainer>
    </>
  );
};

export default GifticonDetailModal;
