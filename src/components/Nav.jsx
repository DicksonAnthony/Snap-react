import React from "react";
import Img from "../images/logo.svg";
import {
  Nav,
  Leftcont,
  Image,
  Ul,
  Rightcont,
  Register,
  Icon,
} from "./styles/Nav.styled";
const Navigation = () => {
  return (
    <>
      <Nav>
        <Leftcont>
          <Image src={Img} alt="logo" />
          <Ul>
            <li>
              Features
              <Icon />
            </li>

            <li>
              Company
              <Icon />
            </li>

            <li>Careers</li>
            <li>About</li>
          </Ul>
        </Leftcont>
        <Rightcont>
          <p>Login</p>
          <Register>Register</Register>
        </Rightcont>
      </Nav>
    </>
  );
};

export default Navigation;
