import { createGlobalStyle } from "styled-components";
import "@fontsource/saira-stencil-one/400.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/400.css";

const GlobalStyles = createGlobalStyle`
*, ::after, ::before {
  box-sizing: border-box;
}

body {
  padding: 18px;
  margin: 0;
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  min-height: 100vh;
}

a {
  text-decoration: none;
  color: inherit;
}

h1, h2 {
  padding: 0;
  margin: 0;
  font-size: 2rem;
}

ol, ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
  text-decoration: none;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: inherit;
}
`;

export default GlobalStyles;
