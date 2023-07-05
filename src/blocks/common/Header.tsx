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

const Levels = styled.div``;
const Logo = styled.h2`
  margin: 0;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 15px 0 15px 0;
  background-color: pink;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
