import styled from "styled-components";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import Game from "../../../page/GameLevels/Game";
import { instructionData } from "../../../util/types";
import { FC } from "react";

const Data: FC<instructionData> = ({
  titleText,
  definitionText,
  exampleText,
  compareData,
}) => {
  return (
    <div>
      <Wrapper>
        <Main>
          {/* Header comp */}
          <Header lev="level 1" />

          {/* children / levels */}
          <Game
            titleText={titleText}
            exampleText={exampleText}
            definitionText={definitionText}
            compareData={compareData}
          />

          {/* footer comp */}
          <Footer />
        </Main>
      </Wrapper>
    </div>
  );
};

export default Data;

const Wrapper = styled.div`
  background-image: radial-gradient(
    circle farthest-corner at 22.4% 21.7%,
    orange 0%,
    darkorange 100.2%
  );
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;
`;
