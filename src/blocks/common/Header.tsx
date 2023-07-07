import styled from "styled-components";

type changeLevel = {
  lev : string
}

const Header:React.FC<changeLevel> = ({lev}) => {
  return (
    <div>
      <Wrapper>
        {/* logo*/}
        <Logo>Learn Flex</Logo>

        {/* level display */}
        <Levels>{lev}</Levels>
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
  width: 100%;
  padding: 20px 0 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media not all and (min-width: 890px) {
    padding: 10px 0 10px 0;
    flex-direction: column;
    gap: 5px;
  }
`;
