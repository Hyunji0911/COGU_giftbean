import styled from "styled-components";
import sort from "../../assets/sort.svg";
import filter from "../../assets/filter.svg";

const Container = styled.div`
  width: 350px;
  height: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 20px 0;
  ul {
    background: none;
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
    }
  }
`;

const SortFilter = () => {
  return (
    <Container>
      <ul className="sort">
        <img src={sort} />
        <span>등록 순</span>
      </ul>
      <ul className="filter">
        <span>카테고리</span>
        <img src={filter} />
      </ul>
    </Container>
  );
};

export default SortFilter;
