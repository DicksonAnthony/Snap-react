import React from "react";
import Img from "../images/Logo.svg";
import { FaAngleDown as Icon } from "react-icons/fa";
import { FaBars as Bars } from "react-icons/fa";

import {
  Nav,
  Image,
  Div,
  Divtwo,
  Divthree,
  Ul,
  Closebtn,
  Register,
  Divfour,
} from "./styles/MobileNav.styled";

const MobileNav = ({ mobile, setMobile }) => {
  const toggle = () => {
    setMobile(!mobile);
  };

  return (
    <>
      <Divfour mobile={mobile}>
        <Divtwo mobile={mobile}>
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
          <Divthree>
            <p>Login</p>
            <Register>Register</Register>
          </Divthree>
        </Divtwo>
      </Divfour>
      <Nav>
        <Image src={Img} alt="logo" />
        <Div onClick={toggle}>{mobile ? <Closebtn /> : <Bars />}</Div>
      </Nav>
    </>
  );
};

export default MobileNav;
