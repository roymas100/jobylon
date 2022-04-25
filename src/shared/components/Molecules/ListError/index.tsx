import React from "react";
import Button from "src/shared/components/Atoms/Button";
import Title from "src/shared/components/Atoms/Title";
import accessDeniedImg from "src/shared/images/access_denied.svg";
import themes from "src/shared/themes";
import styled from "styled-components";

interface ListErrorProps {
  onClick?: () => void;
}

const ListError: React.FC<ListErrorProps> = ({ onClick }) => {
  return (
    <Wrapper data-testid="list-error">
      <img alt="List error" src={accessDeniedImg} />
      <Title
        color={themes.colors.danger}
        style={{ marginTop: 16, marginBottom: 16 }}
      >
        Something went wrong. Try again later.
      </Title>
      {onClick && (
        <Button buttonType="danger" onClick={onClick}>
          Try again
        </Button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;

  img {
    width: 200px;
  }
`;

export default ListError;
