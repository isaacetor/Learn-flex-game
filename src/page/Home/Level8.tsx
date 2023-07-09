import styled from "styled-components";
import Data from "../../blocks/components/data/Data";
import Level8Graphic from "../../blocks/components/graphic/Level8Graphic";
const Level8 = () => {
  return (
    <div>
      <Wrapper>
        {/* container with data */}
        <Data
          titleText="The frogs need to get in the same order as their lilypads using flex-direction. This CSS property defines the direction items are placed in the container, and accepts the following values:"
          definitionText="row: Items are placed the same as the text direction.
          row-reverse: Items are placed opposite to the text direction.
          column: Items are placed top to bottom.
          column-reverse: Items are placed bottom to top."
          exampleText=""
          routePath="level9"
          compareData="flex-direction:row-reverse"
          ContainerTwo="none"
          lev="8"
        />
        {/* container with game */}
        <Level8Graphic />
      </Wrapper>
    </div>
  );
};

export default Level8;

const Wrapper = styled.div`
  height: 100vh;
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
