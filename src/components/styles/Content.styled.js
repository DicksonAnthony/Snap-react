import styled from "styled-components";
import Img from "../../images/image-hero-desktop.png";

export const Wrapper = styled.div`
  gap: 75px;
  display: flex;
  padding: 32px 180px 0;
  justify-content: space-between;
`;
export const Div1 = styled.div`
  padding-top: 100px;
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
  background-position: fill;
  background-size: cover;
  background-repeat: no-repeat;
  box-sizing: content-box;
`;
// export const Image2 = styled.img`
//   box-sizing: border-box;
//   max-width: 100%;
// `;
export const Imgdiv = styled.div`
  margin-top: 100px;
`;
