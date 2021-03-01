import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import Particles from "react-tsparticles";
import "./styles.scss";
HomeFeature.propTypes = {};

function HomeFeature(props) {
  return (
    <Box id="home1">
      <Box className="home">
        <Heading fontSize={25}>WELCOME TO MY WORLD</Heading>
        <Heading fontSize={80}>Hi, I’m Bao.</Heading>
        <div class="product">
          <h1>
            <span id="spin"></span>
          </h1>
        </div>
        <Heading fontSize={80}>based in Viet Nam.</Heading>
      </Box>

      <Particles
        className="particle"
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#0d47a1",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
    </Box>
  );
}

export default HomeFeature;
