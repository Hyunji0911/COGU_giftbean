import styled from "styled-components";
import sort from "../../assets/sort.svg";
import filter from "../../assets/filter.svg";

const Container = styled.div`
  width: 390px;
  height: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 0 20px;
  ul {
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    span {
      margin: 0 10px;
      font-weight: 400;
      font-size: 16px;
      color: #000;
      margin-top: ${(props) => props.margintop};
    }
    img {
    }
  }
`;

const SortFilter = (props) => {
  return (
    <Container>
      <ul className="sort">
        <img alt="sort" src={sort} />
        <span margintop={props.margintop}>등록 순</span>
      </ul>

      <ul className="filter">
        <span>카테고리</span>
        <img alt="filter" src={filter} />
      </ul>
    </Container>
  );
};
export default SortFilter;
