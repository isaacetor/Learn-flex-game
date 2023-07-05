import styled from "styled-components";
import Icon from "./Icon";

const Graphic = () => {
  return (
    <div>
      <Wrapper>
        <Icon />
      </Wrapper>
    </div>
  );
};

export default Graphic;

const Wrapper = styled.div`
  background-color: #1f5768;
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
`;
