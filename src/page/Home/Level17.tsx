import styled from "styled-components";

import Data from "../../blocks/components/data/Data";

import Level17Graphic from "../../blocks/components/graphic/Level17Graphic";

const Level17 = () => {
  return (
    <div>
      <Wrapper>
        {/* container with data */}
        <Data
          titleText=""
          definitionText="Combine order with align-self to help the frogs to their destinations."
          exampleText=""
          compareData="order:2;align-self:flex-end"
          routePath="level18"
          textAreaOne="none"
          ContainerTwo="block"
          classCss=".yellow"
          textAreaTwo="flex"
          secondCodeText="align-items: flex-start;"
          lev="17"
        />
        {/* container with game */}
        <Level17Graphic />
      </Wrapper>
    </div>
  );
};

export default Level17;

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
