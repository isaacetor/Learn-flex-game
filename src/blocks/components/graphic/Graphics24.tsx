import styled from "styled-components";
import { selector, useRecoilValue } from "recoil";
import { IconState } from "../../../util/state/Recoil";

const Graphics24 = () => {
    const numberoFBox = [1, 2, 3, 4, 5, 6, 7]


  const JustifyState = selector({
    key: "charCountState", // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {
      const text = get(IconState);

      return text;
    },
  });

  const count = useRecoilValue(JustifyState);

  return (
    <Container>
          <Wrapper value={count}>
              {numberoFBox.map((e) => (
                  <Wrap key={e}>
                      <Box></Box>
                  </Wrap>
              ))}
          </Wrapper>
          <Column>
              {numberoFBox.map((e) => (
                  <Icon key={e}></Icon>
              ))}
          </Column>
    </Container>
  );
};

export default Graphics24;
const Icon = styled.div`
  width: 18%;
  height: 17%;
  margin: 5px;
  background-color: blue;

`;
const Wrap = styled.div`
  width: 18%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18%;
  margin: 3px;
  flex-wrap: wrap;
  /* background-color: purple; */
`;

const Box = styled.div`
  width: 70px;
  height: 70px;
  margin: 2px;
  background-color: red;
  border-radius: 50px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
   align-items: center;
  position: relative;
  justify-content: center;
`;
const Wrapper = styled.div<{ value: string }>`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 1em;
  ${(props) => props.value};
  position: absolute;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;;
`;
const Column = styled.div`
 display: flex;
  width: 100%;
  flex-direction: column;
  height: 100%;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: center;
  padding: 1em;
`;
 