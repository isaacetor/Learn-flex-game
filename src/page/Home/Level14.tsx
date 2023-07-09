import styled from "styled-components";
import Data from "../../blocks/components/data/Data";
import Level14Graphic from "../../blocks/components/graphic/Level14graphic";

const Level14 = () => {
  return (
    <div>
      <Wrapper>
        {/* container with data */}
        <Data
          titleText=""
          definitionText="Sometimes reversing the row or column order of a container is not enough. In these cases, we can apply the order property to individual items. By default, items have a value of 0, but we can use this property to also set it to a positive or negative integer value (-3,-2, -1, 0, 1, 2,3)."
          exampleText="Use the order property to reorder the frogs according to their lilypads."
          compareData="order:3"
          routePath="level15"
          textAreaOne="none"
          ContainerTwo="block"
          classCss=".yellow"
          textAreaTwo="flex"
          lev="14"
        />
        {/* container with game */}
        <Level14Graphic />
      </Wrapper>
    </div>
  );
};

export default Level14;

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
