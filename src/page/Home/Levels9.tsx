

import styled from "styled-components"
import Data from "../../blocks/components/data/Data";


import Graphic9 from "../../blocks/components/graphic/Graphic9";

const Levels9 = () => {
  return (
    <div>
      <Wrapper>
        {/* container with data */}
        <Data
          titleText="Help the frogs find their column of lilypads using flex-direction. This CSS property defines the direction items are placed in the container, and accepts the following values:"
          definitionText="row: Items are placed the same as the text direction.
          row-reverse: Items are placed opposite to the text direction.
          column: Items are placed top to bottom.
          column-reverse: Items are placed bottom to top."
          exampleText=""
          compareData="flex-direction: column"
        
        />
        {/* container with game */}
        <Graphic9 />
      </Wrapper>
    </div>
  );
}

export default Levels9

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