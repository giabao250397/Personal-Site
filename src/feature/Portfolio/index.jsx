import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Heading } from "@chakra-ui/react";
import PortfolioList from "./components/portfolioList";

PortfolioFeature.propTypes = {};

function PortfolioFeature(props) {
  const portfolioList = [
    {
      id: 1,
      name: "McLaren 720 spider 2021 version",
      button: (
        <Button colorScheme="teal" variant="outline">
          VIEW DETAILS
        </Button>
      ),
      thumbnailUrl:
        "https://forgiato.com/photos/car-photos/thumbnails/mclaren/720/forgiato-custom-wheel-mclaren-720-navaja-ecx-forgiato-08-03-2020_5f2873aedcb7a_1.jpg",
    },
    {
      id: 2,
      name: "Lamborgini Aventador 2021 version",
      button: (
        <Button colorScheme="teal" variant="outline">
          VIEW DETAILS
        </Button>
      ),
      thumbnailUrl:
        "https://danchoioto.vn/wp-content/uploads/2019/04/lamborghini-aventador-gia-e1592792053162.jpg",
    },
    {
      id: 3,
      name: "Porsche 911 2021 version",
      button: (
        <Button colorScheme="teal" variant="outline">
          VIEW DETAILS
        </Button>
      ),
      thumbnailUrl:
        "https://muaxegiatot.vn/wp-content/uploads/2018/12/gia-xe-porsche-911-2019-muaxegiatot-vn-2.jpg",
    },
    {
      id: 4,
      name: "Rolls Royce Phantum 2021 version",
      button: (
        <Button colorScheme="teal" variant="outline">
          VIEW DETAILS
        </Button>
      ),
      thumbnailUrl:
        "https://cdn.baogiaothong.vn/upload/images/2020-1/article_img/2020-01-27/phantom-viii-ewb-8-15223160887392137099936-1580140328-width1004height565.jpg",
    },
    {
      id: 5,
      name: "Vinfast President 2021 version",
      button: (
        <Button colorScheme="teal" variant="outline">
          VIEW DETAILS
        </Button>
      ),
      thumbnailUrl:
        "https://danviet.mediacdn.vn/2020/9/19/screen-shot-2020-09-19-at-32318-pm-16005038242601570165998.png",
    },
    {
      id: 6,
      name: "Lamborgini Urus 2021 version",
      button: (
        <Button colorScheme="teal" variant="outline">
          VIEW DETAILS
        </Button>
      ),
      thumbnailUrl:
        "https://xehay.vn/uploads/images/2019/12/3/xehay-Venatus-201219-2.jpg",
    },
  ];
  return (
    <Box bg="#38B2AC" id="portfolio" padding={100}>
      <Heading
        fontSize={60}
        textAlign="center"
        color="white"
        marginBottom={7}
        paddingTop={20}
      >
        Refer To The Car Price List Here
      </Heading>
      <Heading fontSize={25} textAlign="center" marginBottom={10}>
        Click on each link for more clarity!
      </Heading>
      <PortfolioList portfolioList={portfolioList} />
    </Box>
  );
}

export default PortfolioFeature;
