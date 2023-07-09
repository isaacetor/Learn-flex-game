import { selector, useRecoilValue } from "recoil";
import { styled, keyframes } from "styled-components";
import { IconState } from "../util/state/Recoil";

import { FC } from "react";
import { Link } from "react-router-dom";

type compareData = {
  compare: string;
  route: string;
};

const GlobalButton: FC<compareData> = ({ compare, route }) => {
  const JustifyState = selector({
    key: "charCountState",
    get: ({ get }) => {
      const text = get(IconState);
      return text;
    },
  });

  const count = useRecoilValue(JustifyState).trim().replace(" ", "");

  let trueText = `${compare}`;

  return (
    <div>
      {trueText == count ? (
        <Link to={`/${route}`}>
          <Wrapper bg="red">Next</Wrapper>
        </Link>
      ) : (
        <Wrapper disabled style={{ cursor: "not-allowed" }} bg="#fc9696">
          Next
        </Wrapper>
      )}
    </div>
  );
};

export default GlobalButton;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const Wrapper = styled.button<{ bg: string }>`
  padding: 8px 18px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  /* background-color: #fc9696; */
  background-color: ${(props) => props.bg};
  color: #fff;
  animation-name: ${pulseAnimation};
  animation-duration: 2s;
  animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  animation-iteration-count: infinite;
`;
