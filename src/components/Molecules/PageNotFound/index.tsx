import React from "react";
import Button from "src/components/Atoms/Button";
import Title from "src/components/Atoms/Title";
import PageNotFoundImg from "src/images/page_not_found.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface PageNotFoundProps {
  onClick?: () => void;
}

const PageNotFound: React.FC<PageNotFoundProps> = ({ onClick }) => {
  const navigate = useNavigate();
  return (
    <Wrapper data-testid="page-not-found">
      <img alt="Page not found" src={PageNotFoundImg} />
      <Title style={{ marginTop: 24, marginBottom: 24 }}>Page not found!</Title>
      <Button
        buttonType="default"
        onClick={() => onClick?.() || navigate("/", { replace: true })}
      >
        Home
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;

  img {
    width: 400px;
  }

  p {
    font-size: 26px;
  }
`;

export default PageNotFound;
