import styled from "styled-components";
import Graphic from "../../blocks/components/graphic/Graphic";
import Data from "../../blocks/components/data/Data";

const Main = () => {
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
          <br />
          flex-end: Items align to the right side of the container. center:
          Items align at the center of the container. <br /> space-between:
          Items display with equal spacing between them. <br /> space-around:
          Items display with equal spacing around them.
"
          exampleText="For example, justify-content: flex-end; will move the frog to the right"
        />
        {/* container with game */}
        <Graphic />
      </Wrapper>
    </div>
  );
};

export default Main;

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
