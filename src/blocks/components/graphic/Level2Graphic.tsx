import styled from "styled-components";
import { selector, useRecoilValue } from "recoil";
import { IconState } from "../../../util/state/Recoil";
import Iconify from "./Iconify";

const Level2Graphic = () => {
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
      <Wrapper text={count}>
        <Div>
          <Box></Box>
          <Box></Box>
        </Div>
        <div style={{ display: "flex", gap: "2px" }}>
          <Iconify bgCol="red" />
          <Iconify bgCol="blue" />
        </div>
      </Wrapper>
    </div>
  );
};

export default Level2Graphic;

const Div = styled.div`
  position: absolute;
  top: 0;
  padding: 20px;
  width: 100%;
  height: 100%;
  z-index: -1;
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  width: 60px;
  height: 60px;
  background-color: orange;
  z-index: -1;
  margin: 1px;
`;

const Wrapper = styled.div<{ text: string }>`
  height: 100%;
  padding: 20px;
  display: flex;
  ${(props) => props.text};
  position: relative;
  z-index: 999;
  background-color: #fff;
  @media not all and (min-width: 890px) {
    height: 50vh;
  }
`;
