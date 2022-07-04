import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 30px 40px 0;
  justify-content: space-between;
`;
export const Leftcont = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
export const Image = styled.img`
  margin-right: 80px;
`;
export const Ul = styled.ul`
  gap: 50px;
  display: flex;
  font-weight: 500;
  list-style: none;
  align-items: center;
  text-decoration: none;
  justify-content: space-between;
`;
export const Rightcont = styled.div`
  gap: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Register = styled.a`
  padding: 10px 25px;
  border-radius: 13px;
  border: 2px solid hsl(0, 0%, 8%);
`;
export const Icon = styled(FaAngleDown)`
  margin-top: 2px;
  margin-left: 5px;
`;
