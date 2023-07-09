
import styled from "styled-components"
import Graphic11 from "../../blocks/components/graphic/Graphic11";
import Data from "../../blocks/components/data/Data";


const Level11 = () => {
  return (
    <div>
      <Wrapper>
        {/* container with data */}
        <Data
          titleText="Help the frogs find their lilypads using flex-direction and justify-content."
          definitionText="Notice that when the flex direction is a column, justify-content changes to the vertical and align-items to the horizontal"
          exampleText=""
          compareData="flex-direction:column;justify-content:flex-end"
          routePath="12"
        />
        {/* container with game */}
        <Graphic11 />
      </Wrapper>
    </div>
  );
}

export default Level11



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