import React from "react";
import Img1 from "../images/client-databiz.svg";
import Img2 from "../images/client-audiophile.svg";
import Img3 from "../images/client-meet.svg";
import Img4 from "../images/client-maker.svg";
// import Img5 from "../images/image-hero-desktop.png";
import {
  Div1,
  Heading,
  Desc,
  Button,
  Image,
  Div2,
  Wrapper,
  Imgdiv,
} from "./styles/Content.styled";

const Content = () => {
  return (
    <>
      <Wrapper>
        <Div1>
          <Heading>
            Make
            <br />
            remote work
          </Heading>
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
        <Div2>{/* <Image2 src={Img5} alt="hero-image" /> */}</Div2>
      </Wrapper>
    </>
  );
};

export default Content;
