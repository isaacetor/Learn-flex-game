
import styled from "styled-components";
import Icon from "./Icon";
import { selector, useRecoilValue } from "recoil";
import { IconState } from "../../../util/state/Recoil";

const Graphic9 = () => {
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

export default Graphic9;

const Div = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  z-index: -9;
  display: flex;
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













// import { selector, useRecoilValue } from "recoil";
// import styled from "styled-components"
// import { IconState } from "../../../util/state/Recoil";
// import Icon from "./Icon";
// const Graphic13 = () => {

// const numberOfBox = [1, 2, 3,] // number of boxes 

//     const JustifyState = selector({
//       key: "charCountState", // unique ID (with respect to other atoms/selectors)
//       get: ({ get }) => {
//         const text = get(IconState);

//         return text;
//       },
//     });

//     const count = useRecoilValue(JustifyState);
//   return (
//     <div>
//       <Wrapper text={count}>
//         <Box></Box>
//         <Box></Box>
//         <Box></Box>
//         {numberOfBox.map((e) => (
//           <Icon key={e} />
//         ))}
//       </Wrapper>
//     </div>
//   );
// }

// export default Graphic13

// const Box = styled.div`
//   width: 100px;
//   height: 100px;
//   position: absolute;
//   background-color: #070707;
//   right: 20px;
//   top: 20px;
//   z-index: -1;
// `;

// const Wrapper = styled.div<{ text: string }>`
//   background-color: #fff;
//   height: 100%;
//   padding: 20px;
//   display: flex;
//   ${(props) => props.text};
//   position: relative;
//   z-index: 999;

//   @media not all and (min-width: 890px) {
//     height: 50vh;
//   }
// `;
