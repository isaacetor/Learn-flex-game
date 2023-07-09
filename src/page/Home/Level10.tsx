import styled from "styled-components";
import Data from "../../blocks/components/data/Data";
import Graphic10 from "../../blocks/components/graphic/Graphic10";

const Level10 = () => {
  return (
    <div>
      <Wrapper>
        {/* container with data */}
        <Data
          titleText="Help the frogs get to their own lilypads. Although they seem close, it will take both flex-direction and justify-content to get them there."
          definitionText="Notice that when you set the direction to a reversed row or column, start and end are also reversed."
          exampleText=""
          routePath="11"
          compareData="flex-direction:row-reverse;justify-content:flex-end"
          ContainerTwo="none"
          lev="10"
        />
        {/* container with game */}
        <Graphic10 />
      </Wrapper>
    </div>
  );
};

export default Level10;

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
