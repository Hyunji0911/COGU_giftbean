import GifticonDetailModal from './GifticonDetailModal';
import { useState } from 'react';
import styled from 'styled-components';
import Item from './styledComponents/Item';
import SortFilter from './styledComponents/SortFilter';

export const GifticonItemContainer = styled.div`
    width: 100%;
    height: 844px;
    background-color: red;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function GifticonItem() {
    const [isOpen, setIsOpen] = useState(false);

    const modalHandler = () => {
        setIsOpen(!isOpen);
    };

    return (
        <GifticonItemContainer>
            <SortFilter />
            {isOpen ? (
                <GifticonDetailModal modalHandler={modalHandler} />
            ) : null}
            <ul className="ItemList">
                <Item modalHandler={modalHandler} />
            </ul>
        </GifticonItemContainer>
    );
}

export default GifticonItem;
