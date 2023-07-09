import styled from "styled-components";
import { selector, useRecoilValue } from "recoil";
import { IconState } from "../../../util/state/Recoil";
import Icon from "./Icon";

const Level17Graphic = () => {
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
          <IconWrap text={count}>
            <Icon bgCol="#FAFA41" />
          </IconWrap>
          <Icon bgCol="#77F87A" />

          <IconWrap text={count}>
            <Icon bgCol="#FAFA41" />
          </IconWrap>

          <Icon bgCol="#77F87A" />

          <Icon bgCol="#77F87A" />
          {/* <Box2></Box2> */}
        </Div>
      </Wrapper>
    </div>
  );
};

export default Level17Graphic;

const IconWrap = styled.div<{ text: string }>`
  display: flex;

  :nth-child(1) {
    ${(props) => props.text};
    /* z-index: 1; */
    order: 1;
    align-self: flex-end;
  }
`;

const Box2 = styled.div`
  width: 80px;
  height: 80px;
  background-color: #c4c403;
  /* position: absolute; */
  /* bottom: 4px; */
  /* left: 44.5%; */
  z-index: 0;

  @media not all and (min-width: 890px) {
    bottom: 3.5px;
    left: 42.5%;
  }
`;

const Div = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
  display: flex;
`;

const Wrapper = styled.div`
  background-color: #fff;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media not all and (min-width: 890px) {
    height: 50vh;
  }
`;
