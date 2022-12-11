import GifticonDetailModal from "./GifticonDetailModal";
import { useState } from "react";
import styled from "styled-components";
import Item from "./styledComponents/Item";

export const GifticonItemContainer = styled.ul`
  width: 100%;
  height: 100%;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function GifticonItem() {
  const [isOpen, setIsOpen] = useState(false);

  const modalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <GifticonItemContainer>
      {isOpen ? (
        <GifticonDetailModal modalHandler={modalHandler} />
      ) : null}
      <Item modalHandler={modalHandler} />
    </GifticonItemContainer>
  );
}

export default GifticonItem;
