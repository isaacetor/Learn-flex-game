import styled from "styled-components";

import { useRecoilState } from "recoil";
import { IconState } from "../../../util/state/Recoil";
import GlobalButton from "../../../props/GlobalButton";

const Code = () => {
  const [text, setText] = useRecoilState(IconState);

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
              }}
            ></textarea>
          </Container>
          <p>{"}"}</p>
        </Coding>
        <GlobalButton />
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
    font-family: jost;
    font-size: 17px;
    color: #000000b0;
    outline: none;
    border: none;
    height: 44px;
  }
`;

const Coding = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;

  p {
    margin: 0;
    font-size: 17px;
  }
`;

const Wrapper = styled.div`
  background-color: #e0e0e0;
  border-radius: 10px;
  height: 100%;
  font-family: jost;
  color: #999999;
  padding: 10px;
  overflow: hidden;
  position: relative;
`;
