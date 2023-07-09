import styled from "styled-components";

import { selector, useRecoilValue } from "recoil";
import { IconState } from "../../../util/state/Recoil";
import Icon2 from "./Icon2";
import Icon from "./Icon";
const Level15Graphic = () => {
  const JustifyState = selector({
    key: "charCountState", // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {
      const text = get(IconState);
      return text;
    },
  });
  const count = useRecoilValue(JustifyState);

  return (
    <div>
      <Wrapper>
        <Div>
          <Box2 bg="red"></Box2>
          <Box2 bg="green"></Box2>
          <Box2 bg="green"></Box2>
          <Box2 bg="green"></Box2>
          <Box2 bg="green"></Box2>
        </Div>
        <IconWrap text={count}>
          <Icon2 />
          <Icon2 />
          <Icon2 />
          <Icon />
          <Icon2 />
        </IconWrap>
      </Wrapper>
    </div>
  );
};

export default Level15Graphic;

const IconWrap = styled.div<{ text: string }>`
  position: absolute;
  display: flex;
  gap: 20px;

  :nth-child(4) {
    ${(props) => props.text};
  }
`;

const Div = styled.div`
  position: absolute;
  top: 0;
  padding: 20px;
  width: 100%;
  height: 100%;
  z-index: -1;
  margin-left: -20px;
  display: flex;
  justify-content: flex-start;
  gap: 20px;
`;

const Box2 = styled.div<{ bg: string }>`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bg};
  z-index: -1;
  /* margin-right: 40px; */

  @media not all and (min-width: 890px) {
    width: 60px;
    height: 60px;
  }
`;

const Wrapper = styled.div`
  background-color: #fff;
  height: 100%;
  padding: 20px;
  display: flex;
  position: relative;
  z-index: 999;
  @media not all and (min-width: 890px) {
    height: 50vh;
  }
`;
