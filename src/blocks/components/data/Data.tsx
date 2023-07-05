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
  /* background-color: #43a047; */
  background-image: radial-gradient(
    circle farthest-corner at 22.4% 21.7%,
    rgba(4, 189, 228, 1) 0%,
    rgba(2, 83, 185, 1) 100.2%
  );
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const Main = styled.div`
  width: 90%;
  height: 97%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
