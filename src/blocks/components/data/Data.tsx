import styled from "styled-components";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import Game from "../../../page/GameLevels/Game";

const Data = () => {
  return (
    <div>
      <Wrapper>
        <Main>
          {/* Header comp */}
          <Header />

          {/* children / levels */}
          <Game />

          {/* footer comp */}
          <Footer />
        </Main>
      </Wrapper>
    </div>
  );
};

export default Data;

const Wrapper = styled.div`
  background-color: #000;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const Main = styled.div`
  width: 90%;
  height: 97%;
  display: grid;
  grid-template-rows: 0.2fr 1fr 0.2fr;
  gap: 10px;
`;
