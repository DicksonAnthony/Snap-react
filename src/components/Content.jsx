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
  Image2,
  Div2,
} from "./styles/Content.styled";

const Content = () => {
  return (
    <>
      <Div1>
        <Heading>Make remote work</Heading>
        <Desc>
          Get your team in sync, no matter your location. Streamline processes,
          create team riuals, and watch productivity soar.
        </Desc>
        <Button>Learn more</Button>
        <Image src={Img1} alt="databiz" />
        <Image src={Img2} alt="audio" />
        <Image src={Img3} alt="meet" />
        <Image src={Img4} alt="maker" />
      </Div1>
      <Div2>
        <Image2 alt="hero-image" />
      </Div2>
    </>
  );
};

export default Content;
