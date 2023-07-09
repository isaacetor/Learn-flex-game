import styled from "styled-components";
import Icon from "./Icon";
import { selector, useRecoilValue } from "recoil";
import { IconState } from "../../../util/state/Recoil";

const Graphic10 = () => {
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
        </Div>

        <IconHold text={count}>
          <Icon bgCol="red" />
          <Icon bgCol="green" />
        </IconHold>
      </Wrapper>
    </div>
  );
};

export default Graphic10;

const IconHold = styled.div<{ text: string }>`
  display: flex;
  gap: 28px;
  ${(props) => props.text};
`;

const Div = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  z-index: -9;
  display: flex;

  gap: 12px;
`;

const Box = styled.div`
  width: 80px;
  height: 80px;
  /* margin-right: 100px;
  position: absolute; */
  background-color: #070707;

  z-index: -1;
`;

const Wrapper = styled.div`
  background-color: #fff;
  height: 100%;
  gap: 12px;

  padding: 20px;
  display: flex;
  justify-content: flex-start;

  position: relative;
  z-index: 999;

  @media not all and (min-width: 890px) {
    height: 50vh;
  }
`;
