import GifticonItem from "../components/GifticonItem";
import styled from "styled-components";
import SortFilter from "../components/styledComponents/SortFilter";
import BackButton from "../components/styledComponents/BackButton";
const Header = styled.div`
  height: 114px;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 2;
  box-shadow: 0 2px rgba(0, 0, 0, 0.05);
  .buttonText-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
  }
  .backButton-Div {
    position: absolute;
    top: 20px;
    left: 20px;
  }
  .header-text {
    font-size: 20px;
    font-weight: 400;
    line-height: 24.2px;
  }
  .sortFilter-container {
    margin-left: 20px;
    margin-top: 21px;
  }
`;

function UsedGifticon() {
  return (
    <div>
      <Header>
        <div className="buttonText-container">
          <div className="backButton-Div">
            <BackButton />
          </div>
          <div className="header-text">사용한 기프티콘</div>
        </div>
        <div className="sortFilter-container">
          <SortFilter />
        </div>
      </Header>

      <GifticonItem />
    </div>
  );
}

export default UsedGifticon;
