import React from "react";
import Title from "src/shared/components/Atoms/Title";
import emptyImg from "src/shared/images/empty.svg";
import styled from "styled-components";

const EmptyList: React.FC = () => {
  return (
    <Wrapper data-testid="empty-list">
      <img alt="List is empty" src={emptyImg} />
      <Title style={{ marginTop: 16, marginBottom: 16 }}>List is empty</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 200px;
  }
`;

export default EmptyList;
