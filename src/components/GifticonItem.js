import GifticonDetailModal from "./GifticonDetailModal";
import { useState } from "react";
import styled from "styled-components";
import Item from "./styledComponents/Item";
// import SortFilter from "./styledComponents/SortFilter";

const Wrapper = styled.div`
  /* display: flex; */
`;
export const GifticonItemContainer = styled.div`
  width: 100%;
  height: 844px;
  background-color: skyblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  .ItemList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: red;
    width: 350px;
    height: 650px;
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
