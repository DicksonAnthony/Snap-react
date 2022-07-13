import styled from "styled-components";
import { FaAngleDown, FaTimes, FaAngleUp } from "react-icons/fa";

export const Wrapper = styled.div`
  display: none;

  @media screen and (max-width: 789px) {
    display: block;
  }
`;
export const Nav = styled.nav`
  gap: 50%;
  display: flex;
  padding-top: 10px;
  justify-content: space-around;
`;
export const Image = styled.img`
  height: auto;
  max-width: 70px;
  box-sizing: border-box;
`;
export const Div = styled.div`
  z-index: 200;
  font-size: 35px;
`;
export const Divtwo = styled.div`
  width: 70%;
  z-index: 100;
  height: 100vh;
  padding: 80px 20px;
  position: absolute;
  transition: all 1s ease-in-out;
  background-color: hsl(0, 0%, 98%);
  right: ${({ mobile }) => (mobile ? "0" : "-500px")};
`;
export const Divthree = styled.div`
  margin-top: 30px;
  text-align: center;
`;
export const Ul = styled.ul`
  gap: 25px;
  display: flex;
  list-style: none;
  text-decoration: none;
  flex-direction: column;
  justify-content: space-between;
`;
export const Register = styled.button`
  outline: none;
  margin-top: 20px;
  padding: 10px 49px;
  border-radius: 13px;
  background-color: transparent;
  border: 2px solid hsl(0, 0%, 8%);
`;
export const Closebtn = styled(FaTimes)`
  z-index: 1100;
  font-size: 35px;
  font-weight: 200;
`;
export const Divfour = styled.div`
  width: 100vw;
  z-index: 150;
  height: 100vh;
  position: absolute;
  transition: visibility 0.8s ease-in-out;
  background-color: rgba(20, 20, 20, 0.6);
  visibility: ${({ mobile }) => (mobile ? "visible" : "hidden")};
`;
export const Expandedone = styled.ul`
  padding-left: 20px;
  display: ${({ collapsed }) => (collapsed ? "block" : "none")};

  li {
    margin-bottom: 15px;
  }
`;
export const Expandedtwo = styled(Expandedone)`
  display: ${({ collapsedTwo }) => (collapsedTwo ? "block" : "none")};
`;
export const ExImg = styled.img`
  width: 15px;
  height: auto;
  margin-right: 5px;
`;
export const Icon = styled(FaAngleDown)`
  margin-left: 5px;
`;
export const Icontwo = styled(FaAngleUp)`
  margin-left: 5px;
`;
