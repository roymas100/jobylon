import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import themes from "src/shared/themes";
import GlobalStyle from "src/shared/themes/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";

const queryClient = new QueryClient();
const Hooks: React.FC<React.PropsWithChildren<any>> = ({ children }) => {
  return (
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      <SkeletonTheme baseColor="#e3e7ed" highlightColor="#cdd4e0">
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>{children}</BrowserRouter>
        </QueryClientProvider>
      </SkeletonTheme>
    </ThemeProvider>
  );
};

export default Hooks;
