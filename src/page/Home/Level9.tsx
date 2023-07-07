

import styled from "styled-components"
import Data from "../../blocks/components/data/Data";

import Graphic13 from "../../blocks/components/graphic/Graphic9";
import Graphic9 from "../../blocks/components/graphic/Graphic9";

const Level9 = () => {
  return (
    <div>
      <Wrapper>
        {/* container with data */}
        <Data
          titleText=""
          definitionText="Help the frogs find their lilypads using flex,direction, justify-content, and align-items"
          exampleText="For example, justify-content: flex-end; will move the frog to the right"
        />
        {/* container with game */}
        <Graphic9 />
      </Wrapper>
    </div>
  );
}

export default Level9

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