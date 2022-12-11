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

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <GifticonItemContainer>
      {isOpen ? (
        <GifticonDetailModal openModalHandler={openModalHandler} />
      ) : null}
      <Item modalHandler={openModalHandler} />
    </GifticonItemContainer>
  );
}

export default GifticonItem;
