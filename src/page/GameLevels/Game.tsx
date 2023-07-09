import styled from "styled-components";
import { FC } from "react";
import Code from "../../blocks/common/Code/Code";
import { gameData } from "../../util/types";

const Game: FC<gameData> = ({
  titleText,
  definitionText,
  exampleText,
  compareData,
  routePath,
  textAreaOne,
  textAreaTwo,
  ContainerTwo,
  classCss,
  secondCodeText,
  lev,
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
        <Code
          check={compareData!}
          path={routePath!}
          textAreaOne={textAreaOne}
          ContainerTwo={ContainerTwo}
          classCss={classCss}
          textAreaTwo={textAreaTwo}
          secondCodeText={secondCodeText}
          lev={lev}
        />
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

  p {
    font-size: 15px;
    width: 89%;
    letter-spacing: 1px;
    text-align: justify;
    color: #000000d5;
  }

  @media not all and (min-width: 890px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;
