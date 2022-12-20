import styled from "styled-components";
import React, { useState } from "react";

const ToggleWrapper = styled.div`
  width: 98px;
  height: 20px;
  display: flex;
  align-items: center;
  /* border: solid 1px blue; */
`;
const ToggleText = styled.div`
  font-family: "Noto Sans KR";
  font-weight: 700;
  font-size: 12px;
  align-items: center;
  text-align: center;
  color: ${(props) => (props.toggleOn ? "#4c8c0d" : "#555555")};
  margin-left: 8.33px;
`;

const ToggleContainer = styled.div`
  position: relative;
  cursor: pointer;

  > .toggle-container {
    width: 38.67px;
    height: 20.5px;
    border-radius: 30px;
    border: solid 3px;
    border-color: #4c8c0d;
    background-color: none;
    transition: all 0.2s ease;
    &.toggle--checked {
      background-color: #555555;
      border-color: #555555;
    }
  }

  > .toggle-circle {
    position: absolute;
    top: 5.8px;
    left: 6px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #4c8c0d;
    transition: all 0.25s ease;

    &.toggle--checked {
      background-color: white;
      left: 23px;
    }
  }
`;

function Toggle() {
  const [toggleOn, setToggleOn] = useState(true);
  // toggleOn이 True => "사용가능 상태"
  function toggleHandler() {
    setToggleOn(!toggleOn);
  }
  return (
    <ToggleWrapper>
      <ToggleContainer onClick={toggleHandler}>
        <div
          className={`toggle-container ${toggleOn ? "" : "toggle--checked"}`}
        />

        <div className={`toggle-circle ${toggleOn ? "" : "toggle--checked"}`} />
      </ToggleContainer>

      <ToggleText toggleOn={toggleOn}>
        {toggleOn ? "사용 가능" : "사용 완료"}
      </ToggleText>
    </ToggleWrapper>
  );
}

export default Toggle;
