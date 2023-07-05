import { selector, useRecoilValue } from "recoil";
import styled from "styled-components";
import { IconState } from "../util/state/Recoil";

const GlobalButton = () => {
  const JustifyState = selector({
    key: "charCountState", // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {
      const text = get(IconState);

      return text;
    },
  });

  const count = useRecoilValue(JustifyState);

  const trueText = "justify-content: center";

  return (
    <div>
      {trueText === count ? (
        <Wrapper>Next</Wrapper>
      ) : (
        <Wrapper disabled>Next</Wrapper>
      )}
    </div>
  );
};

export default GlobalButton;

const Wrapper = styled.button`
  padding: 10px 20px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  /* background-color: red; */
  /* color: #fff; */
`;
