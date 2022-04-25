import { createGlobalStyle } from "styled-components";
import themes from ".";

const GlobalStyle = createGlobalStyle`

body {
  font-family: -apple-system, 'Sora', BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  margin: 0;
	padding: 0;
	border: 0;
  background-color: ${themes.colors.background};
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

p {
    margin: 0;
    color: ${themes.colors.text};
    font-size: 14px;
}

`;

export default GlobalStyle;
