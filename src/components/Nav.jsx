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
  Lione,
  Litwo,
  Lithree,
  Popone,
  Poptwo,
} from "./styles/Nav.styled";
const Navigation = () => {
  return (
    <>
      <Nav>
        <Leftcont>
          <Image src={Img} alt="logo" />
          <Ul>
            <Lione>
              Features
              <Icon />
            </Lione>

            <Litwo>
              Company
              <Icon />
            </Litwo>

            <Lithree>Careers</Lithree>
            <Lithree>About</Lithree>
          </Ul>
          <Popone>
            <li>Todo List</li>
            <li>Calenders</li>
            <li>Reminders</li>
            <li>Planning</li>
          </Popone>
          <Poptwo>
            <li>History</li>
            <li>Our Team</li>
            <li>Blog</li>
          </Poptwo>
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
