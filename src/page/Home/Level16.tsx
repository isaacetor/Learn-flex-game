import styled from "styled-components";

import Data from "../../blocks/components/data/Data";
import Level16Graphic from "../../blocks/components/graphic/Level16graphic";

const Level16 = () => {
  return (
    <div>
      <Wrapper>
        {/* container with data */}
        <Data
          titleText=""
          definitionText=""
          exampleText="Use the order property to send the red frog to his lilypad."
          compareData="order:-1"
          routePath="level16"
          textAreaOne="none"
          ContainerTwo="block"
          classCss=".red"
          textAreaTwo="flex"
          secondCodeText="align-items: flex-start;"
        />
        {/* container with game */}
        <Level16Graphic />
      </Wrapper>
    </div>
  );
};

export default Level16;

const Wrapper = styled.div`
  min-height: 100vh;
  max-height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media not all and (min-width: 890px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    & > :nth-child(1) {
      order: 2;
    }
    & > :nth-child(2) {
      order: 1;
    }
    height: 100%;
  }
`;
