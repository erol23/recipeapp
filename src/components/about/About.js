import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./aboutStyle";
import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <AboutContainer>
      <StyledImage src={codingSvg} alt="coding" />
      <HeaderContainer>
        <h1>
          About FullStack Developer <span>Erkan Erol</span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h1>I'm Erkan.</h1>
        <h2>I’m currently learning Full-Stack Development Languages.</h2>
        <h2>
          I've already known JS, ReactJS, Django
        </h2>
        <h2>
          <a href="mailto:hurkanrol15@gmail.com">Send email</a> :
          hurkanrol15@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;