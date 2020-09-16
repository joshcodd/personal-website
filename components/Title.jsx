import React, { useContext, useState } from "react";
import GlitchText from "./GlitchText";
import Rocket from "./Rocket";
import styled from "styled-components";
import { ColoursContext } from "./ColoursContext";
import ScrollAnimation from "react-animate-on-scroll";

const TitleContainer = styled.div`
  height: 120vh;
  width: 100vw;
  overflow: hidden;
`;

const LeftContainer = styled.div`
  height: 100%;
  width: 100vw;
  float: left;
  box-sizing: border-box;
`;

const RocketContainer = styled.div`
  position: relative;
  display: inline-block;

  top: 15vh;
  width: 20vw;
  height: 100%;
  float: left;
  left: 15%;
  @media (max-width: 775px) {
    left: -20px;
  }
`;

const TextContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 15vw;
  top: 52vh;
  width: 48%;
  max-width: 450px;
  float: left;

  @media (max-width: 630px) {
    margin-left: 5%;
    width: 65%;
  }
`;

const ImAText = styled.p`
  position: relative;

  opacity: 0.9;
`;

const Email = styled.h3`
  display: inline-block;
  position: relative;
  top: 20px;
  padding: 5px 40px;
  border-bottom: 2px solid ${(props) => props.textColour};
  z-index: 1;

  ::after {
    position: absolute;
    content: "";
    background: ${(props) => props.textColour};
    z-index: -1;
    height: 0;
    left: 0;
    bottom: 0;
    width: 100%;

    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }

  :hover {
    color: ${(props) => props.backgroundColour};
  }

  :hover:after {
    height: 100%;
  }
`;

function Title() {
  const { foreground, background } = useContext(ColoursContext);

  return (
    <TitleContainer>
      <LeftContainer>
        <TextContainer>
          <ScrollAnimation animateIn="animate__backInDown" duration={2}>
            <GlitchText text="Hi, I'm Josh" />

            <ImAText>
              I'm a software engineer based in Swansea, Wales. Focused on
              writing efficient, clean and readable code.
            </ImAText>

            <Email textColour={foreground} backgroundColour={background}>
              jjc21@live.co.uk
            </Email>
          </ScrollAnimation>
        </TextContainer>

        <RocketContainer>{/* <Rocket /> */}</RocketContainer>
      </LeftContainer>
    </TitleContainer>
  );
}

export default Title;
