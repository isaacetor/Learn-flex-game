import styled from "styled-components";

import { selector, useRecoilValue } from "recoil";
import { IconState } from "../../../util/state/Recoil";
import Icon from "./Icon";
const Level14Graphic = () => {
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
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </Div>
        <IconWrap text={count}>
          <Icon bgCol="yellow" />
          <Icon bgCol="red" />
          <Icon bgCol="blue" />
        </IconWrap>
      </Wrapper>
    </div>
  );
};

export default Level14Graphic;

const IconWrap = styled.div<{ text: string }>`
  position: absolute;
  display: flex;
  gap: 45px;

  :nth-child(1) {
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
  gap: 30px;
`;

const Box = styled.div`
  width: 80px;
  height: 80px;
  background-color: #070707;
  z-index: -1;
  display: flex;
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
