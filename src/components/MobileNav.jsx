import React, { useState } from "react";
import Img from "../images/logo.svg";
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
  Wrapper,
  Expandedone,
  Expandedtwo,
  ExImg,
  Icon,
  Icontwo,
} from "./styles/MobileNav.styled";
import Todo from "../images/icon-todo.svg";
import Calendar from "../images/icon-calendar.svg";
import Reminder from "../images/icon-reminders.svg";
import Planning from "../images/icon-planning.svg";

const MobileNav = ({ mobile, setMobile }) => {
  const toggle = () => {
    setMobile(!mobile);
  };
  const [collapsed, setCollapsed] = useState(false);
  const [collapsedTwo, setCollapsedTwo] = useState(false);
  const showCollasped = () => {
    setCollapsed(!collapsed);
  };
  const showCollaspedTwo = () => {
    setCollapsedTwo(!collapsedTwo);
  };

  return (
    <Wrapper>
      <Divfour mobile={mobile}>
        <Divtwo mobile={mobile}>
          <Ul>
            <li onClick={showCollasped}>
              Features
              {collapsed ? <Icontwo /> : <Icon />}
            </li>
            <Expandedone collapsed={collapsed}>
              <li>
                <ExImg src={Todo} />
                Todo List
              </li>
              <li>
                <ExImg src={Calendar} />
                Calendar
              </li>
              <li>
                <ExImg src={Reminder} />
                Reminder
              </li>
              <li>
                <ExImg src={Planning} />
                Planning
              </li>
            </Expandedone>
            <li onClick={showCollaspedTwo}>
              Company
              {collapsedTwo ? <Icontwo /> : <Icon />}
            </li>
            <Expandedtwo collapsedTwo={collapsedTwo}>
              <li>History</li>
              <li>Our Team</li>
              <li>Blog</li>
            </Expandedtwo>
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
    </Wrapper>
  );
};

export default MobileNav;
