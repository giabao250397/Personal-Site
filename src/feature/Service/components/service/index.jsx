import React from "react";
import PropTypes from "prop-types";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import "./styles.scss";
import { transform } from "framer-motion";

Service.propTypes = {
  service: PropTypes.object.isRequired,
};

function Service({ service }) {
  //   console.log("aaaaaa", service, service2);
  return (
    <Box
      bg="grey"
      w={450}
      h={300}
      borderRadius="lg"
      paddingTop={10}
      paddingLeft={10}
      _hover={{ bg: "tomato", color: "white", transform: "scale(1.1)" }}
      className="transform"
    >
      <Heading paddingBottom="7">{service.icon}</Heading>
      <Heading
        fontSize="35px"
        fontWeight="bold"
        color="white"
        paddingBottom="7"
      >
        {service.title}
      </Heading>
      <Heading fontSize="25px">{service.name}</Heading>
    </Box>
  );
}

export default Service;
