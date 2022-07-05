import React, { useState } from "react";
import Img from "../images/Logo.svg";
import MobileNav from "./MobileNav";
import {
  Nav,
  Leftcont,
  Image,
  Ul,
  Rightcont,
  Register,
  Icon,
  Closebtn,
} from "./styles/Nav.styled";
const Navigation = () => {
  const [mobile, setMobile] = useState(false);

  const toggle = () => {
    setMobile((prev) => !prev);
  };

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
      <Closebtn />
      <MobileNav mobile={mobile} setMobile={setMobile} />
    </>
  );
};

export default Navigation;
