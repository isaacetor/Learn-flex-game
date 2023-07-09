import styled from "styled-components";

import Data from "../../blocks/components/data/Data";
import Graphic12 from "../../blocks/components/graphic/Graphics12";

const Level12 = () => {
  return (
    <div>
      <Wrapper>
        {/* container with data */}
        <Data
          titleText="Help the frogs find their lilypads using flex-direction and justify-content."
          definitionText=""
          exampleText=""
          compareData="flex-direction:column-reverse; justify-content: space-between"
          routePath="13"
        />
        {/* container with game */}
        <Graphic12 />
      </Wrapper>
    </div>
  );
};

export default Level12;

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
