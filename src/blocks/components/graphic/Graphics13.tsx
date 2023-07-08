import styled from "styled-components";
import Icon from "./Icon";
import { selector, useRecoilValue } from "recoil";
import { IconState } from "../../../util/state/Recoil";

const Graphics13 = () => {
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
          <Box></Box>
        </Div>

        <Icon bgCol="#158b2e95" />

        <Icon bgCol="#751c0697" />
        <Icon bgCol="darkorange" />
      </Wrapper>
    </div>
  );
};

export default Graphics13;

const Div = styled.div`
  position: absolute;
 
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  z-index: -9;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 12px;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
 margin-bottom: 21px;
  /* margin-right: 100px; */
  /* position: absolute; */
  background-color: #070707;
  z-index: -1;
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
