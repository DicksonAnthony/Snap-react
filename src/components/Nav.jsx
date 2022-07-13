import React, { useState } from "react";
import Img from "../images/logo.svg";
import Todo from "../images/icon-todo.svg";
import Calendar from "../images/icon-calendar.svg";
import Reminder from "../images/icon-reminders.svg";
import Planning from "../images/icon-planning.svg";
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
  PopImg,
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
            <li>
              <PopImg src={Todo} />
              Todo List
            </li>
            <li>
              <PopImg src={Calendar} />
              Calenders
            </li>
            <li>
              <PopImg src={Reminder} />
              Reminders
            </li>
            <li>
              <PopImg src={Planning} />
              Planning
            </li>
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
