import styled from "styled-components";
import Icon from "./Icon";
import { selector, useRecoilValue } from "recoil";
import { IconState } from "../../../util/state/Recoil";

const Level5Graphic = () => {
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
        <Hold>
          <Icon />
          <Icon />
          <Icon />
        </Hold>
        <Holds>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        </Holds>
      </Wrapper>
    </div>
  );
};

export default Level5Graphic;

const Holds = styled.div`
display:flex;
width:400px;
justify-content:space-between;
position:fixed;
margin-left:30px;
margin-bottom:30px;
bottom:0;
/* align-items:center; */
`
const Hold = styled.div`
display:flex;
width:400px;
justify-content:space-between;
align-items:flex-start;
margin-left:30px;
margin-bottom:50px;
z-index:999;
`

const Box = styled.div`
  width: 100px;
  height: 100px;
  /* position: fixed; */
  background-color: #070707;
  bottom: 20px;
  /* top: 20px; */
  /* z-index: -1; */
`;

const Wrapper = styled.div<{ text: string }>`
  background-color: #fff;
  height: 100%;
  width:100%;
  /* margin-bottom: 500px; */
  display: flex;
  ${(props) => props.text};
  position: relative;
  z-index: 999;
  /* flex-direction:column; */
  /* align-items:flex-end; */

  @media not all and (min-width: 890px) {
    height: 50vh;
  }
`;
