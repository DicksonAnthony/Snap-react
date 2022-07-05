import styled from "styled-components";
import Img from "../../images/image-hero-desktop.png";

export const Wrapper = styled.div`
  gap: 150px;
  display: flex;
  padding: 5px 150px 0;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0;
  }
`;
export const Div1 = styled.div`
  padding-top: 100px;

  @media screen and (max-width: 786px) {
    order: 2;
  }
`;
export const Heading = styled.h1`
  font-size: 65px;
  margin-bottom: 50px;
`;
export const Desc = styled.p`
  font-size: 18px;
  margin-bottom: 65px;
  color: hsl(0, 0%, 41%);
`;
export const Button = styled.a`
  padding: 15px 30px;
  border-radius: 10px;
  color: hsl(0, 0%, 98%);
  background-color: hsl(0, 0%, 8%);
`;
export const Image = styled.img``;
export const Div2 = styled.div`
  width: 100%;
  background-image: url(${Img});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  box-sizing: content-box;
`;
export const Imgdiv = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
