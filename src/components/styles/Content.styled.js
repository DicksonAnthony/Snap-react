import styled from "styled-components";
import Img from "../../images/image-hero-desktop.png";

export const Wrapper = styled.div`
  gap: 150px;
  display: flex;
  padding: 5px 150px 0;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    gap: 45px;
    padding: 0;
    text-align: center;
    flex-direction: column;
  }
`;
export const Div1 = styled.div`
  padding-top: 100px;

  @media screen and (max-width: 786px) {
    order: 2;
    padding: 0;
  }
`;
export const Heading = styled.h1`
  font-size: 65px;
  padding-right: 10px;
  margin-bottom: 50px;

  @media screen and (max-width: 786px) {
    margin-bottom: 30px;
    text-align: center;
    font-size: 30px;
    padding: 0;
  }
`;
export const Desc = styled.p`
  font-size: 18px;
  margin-bottom: 65px;
  color: hsl(0, 0%, 41%);

  @media screen and (max-width: 786px) {
    padding: 0 10px;
    font-size: 16px;
    margin-bottom: 20px;
    text-align: center;
  }
`;
export const Button = styled.button`
  border: none;
  font-weight: 500;
  padding: 15px 30px;
  border-radius: 10px;
  color: hsl(0, 0%, 98%);
  background-color: hsl(0, 0%, 8%);

  &:hover {
    cursor: pointer;
    font-weight: 600;
    color: hsl(0, 0%, 8%);
    border: 1px solid;
    background-color: transparent;
  }

  @media screen and (max-width: 786px) {
    margin: 0;
  }
`;
export const Image = styled.img`
  @media screen and (max-width: 768px) {
    width: 70px;
  }
`;
export const Div2 = styled.div`
  width: 100%;
  background-image: url(${Img});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  box-sizing: content-box;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Imgdiv = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    justify-content: space-around;
    margin-top: 20px;
  }
`;
export const Imagetwo = styled.img`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
    height: 400px;
  }
  @media screen and (max-width: 500px) {
    display: block;
    width: 100%;
    height: 220px;
  }
`;
