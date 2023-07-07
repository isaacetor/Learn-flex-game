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
      <Wrapper text={count}>
        <Div>
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </Div>

    
          <Icon bgCol="darkorange" />
          <Icon bgCol="red" />
          <Icon bgCol="green" />
       
      </Wrapper>
    </div>
  );
};

export default Graphic10;

const IconHold = styled.div`
  display: flex;
  gap: 12px;
  
`

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
  width: 100px;
  height: 100px;
  /* margin-right: 100px; */
  /* position: absolute; */
  background-color: #070707;
  z-index: -1;
`;

const Wrapper = styled.div<{ text: string }>`
  background-color: #fff;
  height: 100%;
  /* justify-content:flex-end; */
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



