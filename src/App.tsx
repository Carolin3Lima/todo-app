import React from "react";
import Home from "./components/pages/Home";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Home />
  </>
);

export default App;
