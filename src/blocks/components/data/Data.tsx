import styled from "styled-components";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import One from "../../../page/GameLevels/One";

const Data = () => {
  return (
    <div>
      <Wrapper>
        <Main>
          {/* Header comp */}
          <Header />

          {/* children */}
          <One />

          {/* footer comp */}
          <Footer />
        </Main>
      </Wrapper>
    </div>
  );
};

export default Data;

const Wrapper = styled.div`
  background-color: #7d03ba;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  width: 90%;
  height: 90%;
  background-color: aqua;
`;
