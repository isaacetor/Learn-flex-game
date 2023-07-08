import styled from "styled-components";
import Icon from "./Icon";
import { selector, useRecoilValue } from "recoil";
import { IconState } from "../../../util/state/Recoil";

const Graphic12 = () => {
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
          <Box3></Box3>
        </Div>

        <Icon bgCol="#158b2e95" />

        <Icon bgCol="#751c0697" />
        <Icon bgCol="darkorange" />
      </Wrapper>
    </div>
  );
};

export default Graphic12;

const Div = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  /* bottom: 0; */
  width: 100%;
  height: 100%;
  padding: 20px;
  z-index: -9;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 12px;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 100px;
  /* position: absolute; */
  background-color: #070707;
  z-index: -1;
`;

const Box2 = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 100px;
  /* position: absolute; */
  background-color: #070707;
  z-index: -1;
  /* margin-bottom: 39px; */
`;

const Box3 = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 100px;
  /* position: absolute; */
  background-color: #070707;
  z-index: -1;
  margin-bottom: 39px;

`;

const Wrapper = styled.div<{ text: string }>`
  background-color: #fff;
  height: 100%;
  padding: 20px;
  display: flex;
  gap: 12px;
  ${(props) => props.text};
  position: relative;
  z-index: 999;

  @media not all and (min-width: 890px) {
    height: 50vh;
  }
`;

