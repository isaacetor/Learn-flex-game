import styled from "styled-components";
import { selector, useRecoilValue } from "recoil";
import { IconState } from "../../../util/state/Recoil";
import Iconify from "./Iconify";

const Level3Graphic = () => {
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
          <Box style={{ marginLeft: "18px" }}></Box>
          <Box2 style={{ marginRight: "19px" }}></Box2>
        </Div>
        <Iconify bgCol="red" />
        <Iconify bgCol="blue" />
      </Wrapper>
    </div>
  );
};

export default Level3Graphic;

const Div = styled.div`
  position: absolute;
  top: 0;
  padding: 20px;
  width: 100%;
  height: 100%;
  z-index: -1;
  display: flex;
  justify-content: space-around;
`;
const Box2 = styled.div`
  width: 60px;
  height: 60px;
  background-color: orange;
  z-index: -1;
`;

const Box = styled.div`
  width: 60px;
  height: 60px;
  background-color: orange;
  z-index: -1;
`;

const Wrapper = styled.div<{ text: string }>`
  background-color: #fff;
  height: 100%;
  padding: 20px;
  display: flex;
  ${(props) => props.text};
  position: relative;
  z-index: 999;
  @media not all and (min-width: 890px) {
    height: 50vh;
  }
`;
