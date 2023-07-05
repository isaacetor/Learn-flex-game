import styled from "styled-components";

const Code = () => {
  return (
    <div>
      <Wrapper>
        <Coding>
          <p>.pond {"{"}</p>

          <Container>
            <p>display: flex;</p>

            {/* input area */}

            <textarea name="" id="" rows="1"></textarea>
          </Container>
          <p>{"}"}</p>
        </Coding>
      </Wrapper>
    </div>
  );
};

export default Code;

const Container = styled.div`
  width: 95%;
  /* background-color: red; */
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
`;
