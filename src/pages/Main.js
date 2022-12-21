import GifticonItem from '../components/GifticonItem';
import Logo_row from '../assets/Logo_row.svg';
import styled from 'styled-components';
import SortFilter from '../components/styledComponents/SortFilter';
const Header = styled.div`
    /* height: 114px; */
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 2;
    background-color: white;
    box-shadow: 0 2px rgba(0, 0, 0, 0.05);
    img {
        margin-top: 20px;
        margin-bottom: 10px;
    }
    .sort-Div {
        margin-bottom: 5px;
    }
`;

function Main() {
    return (
        <div>
            <Header>
                <img className="header-logo" alt="header logo" src={Logo_row} />
                <div className="sort-Div">
                    <SortFilter />
                </div>
            </Header>

            <GifticonItem />
        </div>
    );
}

export default Main;
