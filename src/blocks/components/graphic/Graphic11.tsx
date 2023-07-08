import styled from "styled-components";
import Icon from "./Icon";
import { selector, useRecoilValue } from "recoil";
import { IconState } from "../../../util/state/Recoil";

const Graphic11 = () => {
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

export default Graphic11;

const IconHold = styled.div`
  
 
  gap:12px;
  display:flex;
  flex-direction: column;
`

const Div = styled.div`
  position: absolute;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  /* padding: 20px; */
  z-index: -9;
  display: flex;
  gap: 12px;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
/* margin-top: 100px; */
  position: relative;
  background-color: #070707;
  z-index: -1;
`;

const Wrapper = styled.div<{ text: string }>`
  height: 97vh;
  display: flex;
  background-color: #fff;
  padding: 20px;
  gap: 12px;
  ${(props) => props.text};
  position: relative;
  z-index: 999;

  @media not all and (min-width: 890px) {
    height: 50vh;
  }
`;


const Container = styled.div`
 `