import styled from "styled-components";

import { selector, useRecoilValue } from "recoil";
import { IconState } from "../../../util/state/Recoil";
import Iconify from "./Iconify";

const Level6Graphic = () => {
  const JustifyState = selector({
    key: "charCountState", // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {
      const text = get(IconState);

      return text;
    },
  });

  const count = useRecoilValue(JustifyState);

  return (
    <Wrapper text={count}>
      <Hold>
        <Iconify bgCol="red" />
      </Hold>
      <Box />
    </Wrapper>
  );
};

export default Level6Graphic;

const Hold = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  /* justify-content:space-between; */
  /* align-items:flex-start; */
  /* margin-left:30px;
margin-top:13px;  */
  /* margin-top: 13px;
  margin-left: 13px; */
  z-index: 999;
  @media screen and (min-width: 425px) {
    margin-top: 0;
    margin-left: 0;
    /* width:100%; */
    /* margin-left:170px; */
  }
  @media screen and (max-width: 375px) {
    margin-top: 0;
    margin-left: 0;
  }
  /* @media screen and (max-width:375px){
    width:300px;
    margin-left:20px;
   margin-bottom: 20px;
  } */
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  background-color: #070707;
  /* bottom: 20px; */
  top: calc(50% - 50px);
  left: calc(50% - 50px);
  /* z-index: -1; */
  @media screen and (min-width: 425px) {
    width: 70px;
    height: 70px;
    /* bottom: 190px; */
  }
  @media screen and (max-width: 375px) {
    width: 50px;
    height: 50px;
  }
`;

const Wrapper = styled.div<{ text: string }>`
  background-color: #fff;
  height: 100%;
  /* width:100%; */
  /* margin-bottom: 500px; */
  display: flex;
  ${(props) => props.text};
  position: relative;
  z-index: 999;

  @media not all and (min-width: 890px) {
    height: 50vh;
  }
`;
