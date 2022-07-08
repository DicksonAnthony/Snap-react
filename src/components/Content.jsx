import React from "react";
import Img1 from "../images/client-databiz.svg";
import Img2 from "../images/client-audiophile.svg";
import Img3 from "../images/client-meet.svg";
import Img4 from "../images/client-maker.svg";
import {
  Div1,
  Heading,
  Desc,
  Button,
  Image,
  Div2,
  Wrapper,
  Imgdiv,
  Imagetwo,
} from "./styles/Content.styled";

const Content = () => {
  return (
    <>
      <Wrapper>
        <Div1>
          <Heading>Make remote work</Heading>
          <Desc>
            Get your team in sync, no matter your location. Streamline
            processes, create team riuals, and watch productivity soar.
          </Desc>
          <Button>Learn more</Button>
          <Imgdiv>
            <Image src={Img1} alt="databiz" />
            <Image src={Img2} alt="audio" />
            <Image src={Img3} alt="meet" />
            <Image src={Img4} alt="maker" />
          </Imgdiv>
        </Div1>
        <Div2></Div2>
        <Imagetwo src={require("../images/image-hero-mobile.png")} />
      </Wrapper>
    </>
  );
};

export default Content;
