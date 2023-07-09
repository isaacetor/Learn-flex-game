import styled from "styled-components";
import { selector, useRecoilValue } from "recoil";
import { IconState } from "../../../util/state/Recoil";
import Icon2 from "./Icon2";
import Icon from "./Icon";

const Level16Graphic = () => {
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
          <Left>
            <Box2 bg="red">
              <Icon2 />
            </Box2>
            <Box2 bg="green">
              <Icon2 />
            </Box2>
          </Left>

          {/* moving */}
          <IconWrap text={count}>
            <Icon2 />
          </IconWrap>
          {/* <Box2 bg="green"> */}

          {/* </Box2> */}

          {/* left */}
          <Right>
            <Box2 bg="green">
              <Icon2 />
            </Box2>
            <Box2 bg="green">
              <Icon2 />
            </Box2>
          </Right>
        </Div>
        {/* <IconWrap text={count}></IconWrap> */}
      </Wrapper>
    </div>
  );
};

export default Level16Graphic;

const Left = styled.div`
  display: flex;
  gap: 20px;
  position: relative;
`;
const Right = styled.div`
  display: flex;
  gap: 20px;
`;

const IconWrap = styled.div<{ text: string }>`
  position: absolute;
  /* display: flex; */
  bottom: 60px;
  left: 45%;
  gap: 20px;
  background-color: blue;
  /* width: 100px;
  height: 100px; */

  :nth-child(4) {
    /* ${(props) => props.text}; */
    align-self: flex-end;
  }
`;

const Div = styled.div`
  /* position: absolute; */
  /* top: 0; */
  width: 100%;
  height: 95%;
  z-index: -1;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  background-color: palegreen;
`;

const Box2 = styled.div<{ bg: string }>`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bg};
  z-index: -1;
  position: relative;
  top: 0;
  left: 0;

  @media not all and (min-width: 890px) {
    width: 60px;
    height: 60px;
  }
`;

const Wrapper = styled.div`
  background-color: #fff;
  position: relative;
  height: 100%;
  padding: 20px;
  display: flex;
  z-index: 999;
  @media not all and (min-width: 890px) {
    height: 50vh;
  }
`;
