import styled from "styled-components";
import Graphics19 from "../../blocks/components/graphic/Graphics19";
import Data from "../../blocks/components/data/Data";

const Level19 = () => {
  return (
    <div>
      <Wrapper>
        {/* container with data */}
        <Data
          titleText="Welcome to LearnFlex, a game where you help Joan and friends by writing
        CSS code! Guide Joan to the lilypad on the right by using the
        justify-content property, which aligns items horizontally and accepts
        the following values:"
          definitionText="flex-start: Items align to the left side of the container.
         
          flex-end: Items align to the right side of the container. center:
          Items align at the center of the container.  space-between:
          Items display with equal spacing between them.  space-around:
          Items display with equal spacing around them.
"
          exampleText="For example, justify-content: flex-end; will move the frog to the right"
          compareData="flex-direction:column; flex-wrap:wrap;"
          routePath="level20"
          lev="19"
          ContainerTwo="none"
        />
        {/* container with game */}
        <Graphics19 />
      </Wrapper>
    </div>
  );
};

export default Level19;

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
