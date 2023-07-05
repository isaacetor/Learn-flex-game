import styled from "styled-components";

const Definition = () => {
  return (
    <div>
      <Wrapper>
        <p>
          flex-start: Items align to the left side of the container.
          <br />
          flex-end: Items align to the right side of the container. center:
          Items align at the center of the container. <br /> space-between:
          Items display with equal spacing between them. <br /> space-around:
          Items display with equal spacing around them.
        </p>
      </Wrapper>
    </div>
  );
};

export default Definition;

const Wrapper = styled.div`
  font-weight: 600;
  font-size: 18px;
`;
