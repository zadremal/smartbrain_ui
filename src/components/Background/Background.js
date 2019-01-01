import React from "react";
import { MainBackground } from "./Styled";
import Particles from "react-particles-js";

const Background = () => {
  const particlesOptions = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 200
        }
      }
    }
  };
  return (
    <MainBackground>
      <Particles params={particlesOptions} />
    </MainBackground>
  );
};

export default Background;
