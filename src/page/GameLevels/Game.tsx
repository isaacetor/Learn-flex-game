import styled from "styled-components";
import { FC } from "react";
import Code from "../../blocks/common/Code/Code";
import { gameData } from "../../util/types";

const Game: FC<gameData> = ({
  titleText,
  definitionText,
  exampleText,
  compareData,
}) => {
  return (
    <div>
      <Wrapper>
        {/* game instructions */}
        {/* title */}
        <p>{titleText}</p>
        {/* definitions section */}
        <Definition>
          <p>{definitionText}</p>
        </Definition>
        {/* example section */}
        <p>{exampleText}</p>
        {/* game code */}
        <Code check={compareData!} />
      </Wrapper>
    </div>
  );
};

export default Game;

const Definition = styled.div`
  font-weight: 600;
  font-size: 18px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-between;

  @media not all and (min-width: 890px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;
