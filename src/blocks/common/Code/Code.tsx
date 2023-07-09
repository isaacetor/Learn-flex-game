import styled from "styled-components";
import { FC } from "react";
import { useRecoilState } from "recoil";
import { IconState } from "../../../util/state/Recoil";
import GlobalButton from "../../../props/GlobalButton";
import { inputData } from "../../../util/types";

const Code: FC<inputData> = ({
  check,
  path,
  ContainerTwo,
  textAreaOne,
  textAreaTwo,
  classCss,
  secondCodeText,
}) => {
  const [text, setText] = useRecoilState(IconState);
  text.trim();

  return (
    <div>
      <Wrapper>
        <Coding>
          <p>.pond {"{"}</p>
          <Container inputDisplay={textAreaOne!}>
            <p>display: flex;</p>
            <SecondText>{secondCodeText}</SecondText>
            {/* input area */}
            <textarea
              onChange={(e) => {
                setText(e.target.value);
              }}
            ></textarea>
          </Container>
          <p>{"}"}</p>
          {/* second coding environment */}
          <Coding2 display={ContainerTwo!}>
            <p>
              {classCss} {"{"}
            </p>

            <Container2 inputDisplay2={textAreaTwo!}>
              {/* input area */}

              <textarea
                onChange={(e) => {
                  setText(e.target.value);
                }}
              ></textarea>
            </Container2>
            <p>{"}"}</p>
          </Coding2>
        </Coding>

        {/* button */}
        <GlobalButton compare={check!} route={path!} />
      </Wrapper>
    </div>
  );
};

export default Code;

const SecondText = styled.p``;

const Container = styled.div<{ inputDisplay: string }>`
  width: 95%;

  margin-left: 30px;
  display: flex;
  flex-direction: column;

  textarea {
    flex: 1;
    display: ${({ inputDisplay }) => inputDisplay};
    font-size: 15px;
    color: #000000b0;
    outline: none;
    border: none;
    height: 44px;
    font-family: poppins;
    /* display: none; */
  }
`;
const Container2 = styled.div<{ inputDisplay2: string }>`
  width: 95%;
  margin-left: 30px;
  display: flex;
  flex-direction: column;

  textarea {
    flex: 1;
    font-size: 15px;
    color: #000000b0;
    outline: none;
    border: none;
    height: 44px;
    font-family: poppins;
    display: ${({ inputDisplay2 }) => inputDisplay2};
  }
`;

const Coding = styled.div`
  width: 100%;
  height: 30vh;
  gap: 10px;
  display: flex;
  flex-direction: column;

  p {
    margin: 0;
    font-size: 15px;
  }
`;
const Coding2 = styled.div<{ display: string }>`
  width: 100%;
  /* height: 10vh; */
  display: ${({ display }) => display};
  flex-direction: column;

  p {
    margin: 0;
    font-size: 15px;
  }
`;

const Wrapper = styled.div`
  background-color: #ffffff63;
  border-radius: 10px;
  /* margin: 10px 0px; */
  height: 100%;
  color: #000;
  padding: 15px;
  overflow: hidden;
  position: relative;
`;
