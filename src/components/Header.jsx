import React from "react";
import Content from "./Content";
import Nav from "./Nav";
import { Wrapper } from "./styles/Header.styled";

const Header = () => {
  return (
    <>
      <Wrapper>
        <Nav />
        <Content />
      </Wrapper>
    </>
  );
};

export default Header;
