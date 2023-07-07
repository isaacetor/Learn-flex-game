import styled from "styled-components";
import Data from "../../blocks/components/data/Data";
import Level3Graphic from "../../blocks/components/graphic/Level3Graphic";

const Level3 = () => {
  return (
    <div>
      <Wrapper>
        {/* container with data */}
        <Data
          titleText="If you find yourself forgetting the possible values for a property, you can click on the property name to view them. Try clicking on justify-content."
          definitionText=""
          exampleText="Help all three frogs find their lilypads just by using justify-content. This time, the lilypads have lots of space all around them."
        />
        {/* container with game */}
        <Level3Graphic />
      </Wrapper>
    </div>
  );
};

export default Level3;

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
