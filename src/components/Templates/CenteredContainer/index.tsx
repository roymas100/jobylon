import React from "react";
import Menu from "src/components/Organisms/Menu";
import styled from "styled-components";

interface CenteredContainerProps {}

const CenteredContainer: React.FC<
  React.PropsWithChildren<CenteredContainerProps>
> = ({ children }) => {
  return (
    <Wrapper>
      <Menu />
      <div className="body-container" data-testid="body-container">
        {children}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;

  .body-container {
    padding: 80px 16px 0 16px;
    margin: auto;
    max-width: 800px;

    display: flex;
    flex-direction: column;
  }
`;

export default CenteredContainer;
