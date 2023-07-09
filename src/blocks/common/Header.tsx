import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <Wrapper>
        {/* logo*/}
        <Logo>Learn Flex</Logo>

        {/* level display */}
        <Levels>Level 1</Levels>
      </Wrapper>
    </div>
  );
};

export default Header;

const Levels = styled.div`
  padding: 5px 20px;
  background-color: #ffffff58;
`;
const Logo = styled.h2`
  margin: 0;
`;

const Wrapper = styled.div`
  height: 10vh;
  max-width: 100%;
  min-width: 45vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media not all and (min-width: 890px) {
    padding: 10px 0 10px 0;
    flex-direction: column;
    gap: 5px;
  }
`;
