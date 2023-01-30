import { createGlobalStyle } from "styled-components"

export const GlobalStyled = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  background-image: linear-gradient(#232630, #050507);
  min-height: 100vh;
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
}

`
