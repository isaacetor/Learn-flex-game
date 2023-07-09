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
      <Container>
        <Wrapper text={count}>
          <Div>
            <Box></Box>
            <Box></Box>
          </Div>

          <Icon bgCol="#158b2f" />

          <Icon bgCol="yellow" />
        </Wrapper>
      </Container>
    </div>
  );
};

export default Graphic12;

const Div = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -9;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 12px;
`;

const Box = styled.div`
  width: 80px;
  height: 80px;
  background-color: #070707;
  z-index: -1;
`;

const Wrapper = styled.div<{ text: string }>`
  height: 90%;
  width: 90%;
  display: flex;
  gap: 12px;
  ${(props) => props.text};
  position: relative;
  z-index: 999;

  @media not all and (min-width: 890px) {
    height: 50vh;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
