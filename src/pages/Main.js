import GifticonItem from "../components/GifticonItem";
import Logo_row from "../assets/Logo_row.svg";
import styled from "styled-components";
import SortFilter from "../components/styledComponents/SortFilter";
const Header = styled.div`
  background-color: red;
  height: 104px;
  text-align: center;
  position: sticky;
  top: 0;
  background-color: white;
  img {
    line-height: 64px;
  }
`;

function Main() {
  return (
    <div>
      <Header>
        <img className="header-logo" alt="header logo" src={Logo_row} />
        <SortFilter />
      </Header>

      <GifticonItem />
    </div>
  );
}

export default Main;
