import styled from "styled-components";
import Graphic from "../../blocks/components/graphic/Graphic";
import Data from "../../blocks/components/data/Data";

const Main = () => {
  return (
    <div>
      <Wrapper>
        {/* container with data */}
        <Data />
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
