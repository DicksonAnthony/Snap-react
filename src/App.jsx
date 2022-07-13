import React, { useState } from "react";
import Content from "./components/Content";
import Navigation from "./components/Nav";
import { GlobalStyle } from "./GlobalStyle";
import MobileNav from "./components/MobileNav";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
`;

function App() {
  const [mobile, setMobile] = useState(false);
  return (
    <Wrapper>
      <GlobalStyle />
      <Navigation />
      <MobileNav mobile={mobile} setMobile={setMobile} />
      <Content />
    </Wrapper>
  );
}

export default App;
