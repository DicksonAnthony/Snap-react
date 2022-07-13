import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";

export const Nav = styled.nav`
  display: flex;
  overflow: visible;
  position: relative;
  align-items: center;
  padding: 20px 40px 0;
  color: hsl(0, 0%, 41%);
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: none;
  }
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
export const Lione = styled.li`
  &:hover {
    cursor: pointer;
    color: hsl(0, 0%, 8%);
  }
`;
export const Litwo = styled.li`
  &:hover {
    cursor: pointer;
    color: hsl(0, 0%, 8%);
  }
`;
export const Lithree = styled.li`
  &:hover {
    cursor: pointer;
    color: hsl(0, 0%, 8%);
  }
`;
export const Icon = styled(FaAngleDown)`
  margin-top: 2px;
  margin-left: 5px;
`;
export const Rightcont = styled.div`
  gap: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    p {
      cursor: pointer;
      color: hsl(0, 0%, 8%);
    }
  }
`;
export const Register = styled.a`
  padding: 10px 25px;
  border-radius: 13px;
  border: 2px solid hsl(0, 0%, 41%);

  &:hover {
    cursor: pointer;
    color: hsl(0, 0%, 8%);
    border: 2px solid hsl(0, 0%, 8%);
  }
`;
export const Popone = styled.ul`
  top: 70px;
  left: 120px;
  list-style: none;
  position: absolute;
  border-radius: 7px;
  padding: 20px 30px 3px;
  background-color: hsl(0, 0%, 98%);
  transition: visibility 2s ease-out;
  box-shadow: 5px 10px 30px hsl(0, 0%, 65%);
  visibility: ${({ pop }) => (pop ? "visible" : "hidden")};

  li {
    margin-bottom: 20px;
  }
`;
export const Poptwo = styled(Popone)`
  left: 350px;
  height: 130px;
  padding: 20px 30px;
  visibility: ${({ popTwo }) => (popTwo ? "visible" : "hidden")};
`;
export const PopImg = styled.img`
  width: 15px;
  height: auto;
  margin-right: 5px;
`;
