import styled from "styled-components";
import { FC } from "react";
import { useRecoilState } from "recoil";
import { IconState } from "../../../util/state/Recoil";
import GlobalButton from "../../../props/GlobalButton";

interface check {
  check: string;
  path: string;
}

const Code: FC<check> = ({ check, path }) => {
  const [text, setText] = useRecoilState(IconState);
  text.trim();

  return (
    <div>
      <Wrapper>
        <Coding>
          <p>.pond {"{"}</p>
          <Container>
            <p>display: flex;</p>
            {/* input area */}
            <textarea
              onChange={(e) => {
                setText(e.target.value);
              }}></textarea>
          </Container>
          <p>{"}"}</p>
        </Coding>
        <GlobalButton compare={check} route={path} />
      </Wrapper>
    </div>
  );
};

export default Code;

const Container = styled.div`
  width: 95%;
  margin-left: 30px;
  display: flex;
  flex-direction: column;

  textarea {
    flex: 1;
    font-size: 17px;
    color: #000000b0;
    outline: none;
    border: none;
    height: 44px;
    font-family: poppins;
  }
`;

const Coding = styled.div`
  width: 100%;
  height: 35vh;
  display: flex;
  flex-direction: column;

  p {
    margin: 0;
    font-size: 17px;
  }
`;

const Wrapper = styled.div`
  background-color: #ffffff63;
  border-radius: 10px;
  /* margin: 10px 0px; */
  height: 100%;
  color: #000;
  padding: 10px;
  overflow: hidden;
  position: relative;
`;
