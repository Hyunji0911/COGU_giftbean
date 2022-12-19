import GifticonItem from "../components/GifticonItem";
import styled from "styled-components";
import SortFilter from "../components/styledComponents/SortFilter";
import BackButton from "../components/styledComponents/BackButton";
const Header = styled.div`
  height: 104px;
  width: 100%;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 2;
  box-shadow: 0 2px rgba(0, 0, 0, 0.05);

  .header-text {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 24.2px;
  }
`;

function UsedGifticon() {
  return (
    <div>
      <Header>
        <BackButton />
        <div className="header-text">사용한 기프티콘</div>
        <div className="sortFilter-container">
          <SortFilter />
        </div>
      </Header>

      <GifticonItem />
    </div>
  );
}

export default UsedGifticon;
