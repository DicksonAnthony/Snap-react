import React, { useState } from "react";
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
  const [pop, setPop] = useState(false);
  const [popTwo, setPopTwo] = useState(false);

  const showPop = () => {
    setPop((prev) => !prev);
  };
  const showPopTwo = () => {
    setPopTwo((prev) => !prev);
  };
  return (
    <>
      <Nav>
        <Leftcont>
          <Image src={Img} alt="logo" />
          <Ul>
            <Lione onMouseOver={showPop} onMouseOut={showPop}>
              Features
              <Icon />
            </Lione>

            <Litwo onMouseOver={showPopTwo} onMouseOut={showPopTwo}>
              Company
              <Icon />
            </Litwo>

            <Lithree>Careers</Lithree>
            <Lithree>About</Lithree>
          </Ul>
          <Popone pop={pop}>
            <li>Todo List</li>
            <li>Calenders</li>
            <li>Reminders</li>
            <li>Planning</li>
          </Popone>
          <Poptwo popTwo={popTwo}>
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
