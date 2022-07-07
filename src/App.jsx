import React, { useState } from "react";
import Content from "./components/Content";
import Navigation from "./components/Nav";
import { GlobalStyle } from "./GlobalStyle";
import MobileNav from "./components/MobileNav";

function App() {
  const [mobile, setMobile] = useState(false);
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <MobileNav mobile={mobile} setMobile={setMobile} />
      <Content />
    </>
  );
}

export default App;
