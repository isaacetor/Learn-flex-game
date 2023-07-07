import styled from "styled-components";
import { selector, useRecoilValue } from "recoil";
import { IconState } from "../../../util/state/Recoil";
import Icon2 from "./Icon2";

const Level4Graphic = () => {
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
          <Box2></Box2>
        </Div>
        <Icon2 />
        <Icon2 />
      </Wrapper>
    </div>
  );
};

export default Level4Graphic;

const Div = styled.div`
  position: absolute;
  top: 0;
  padding: 20px;
  width: 100%;
  height: 100%;
  z-index: -1;
  margin-left: -20px;
  display: flex;
  justify-content: space-between;
`;

const Box2 = styled.div`
  width: 100px;
  height: 100px;
  background-color: #070707;
  z-index: -1;
  margin-right: 40px;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: #070707;
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
