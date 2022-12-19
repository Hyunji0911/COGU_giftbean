import GifticonDetailModal from "./GifticonDetailModal";
import { useState } from "react";
import styled from "styled-components";
import Item from "./styledComponents/Item";

const Wrapper = styled.div``;
export const GifticonItemContainer = styled.div`
  width: 100%;
  height: 844px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  .ItemList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 350px;
  }
`;

function GifticonItem() {
  const [isOpen, setIsOpen] = useState(false);

  const modalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <GifticonItemContainer>
        {isOpen ? <GifticonDetailModal modalHandler={modalHandler} /> : null}
        <ul className="ItemList">
          <Item modalHandler={modalHandler} />
          <Item modalHandler={modalHandler} />
          <Item modalHandler={modalHandler} />
          <Item modalHandler={modalHandler} />
          <Item modalHandler={modalHandler} />
          <Item modalHandler={modalHandler} />
          <Item modalHandler={modalHandler} />
          <Item modalHandler={modalHandler} />
          <Item modalHandler={modalHandler} />
        </ul>
      </GifticonItemContainer>
    </Wrapper>
  );
}

export default GifticonItem;
