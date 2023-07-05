import styled from "styled-components";
import Instruction from "../../blocks/common/Instruction/Instruction";
import Code from "../../blocks/common/Code/Code";

const Game = () => {
  return (
    <div>
      <Wrapper>
        {/* game instructions */}
        <Instruction />

        {/* game code */}
        <Code />
      </Wrapper>
    </div>
  );
};

export default Game;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
  display: flex;
  flex-direction: column;
  gap: 10;
`;
