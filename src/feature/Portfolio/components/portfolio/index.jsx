import React from "react";
import PropTypes from "prop-types";
import { Box, Heading } from "@chakra-ui/react";

Portfolio.propTypes = {
  portfolio: PropTypes.object.isRequired,
};

function Portfolio({ portfolio }) {
  return (
    <Box
      bgImage={`url(${portfolio.thumbnailUrl})`}
      w={450}
      h={600}
      paddingLeft={10}
      borderRadius="lg"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      _hover={{ transform: "scale(1.1)" }}
    >
      <Heading textAlign="center" paddingTop={400} color="white">
        {portfolio.name}
      </Heading>
      <Box textAlign="center" paddingTop={10}>
        {portfolio.button}
      </Box>
    </Box>
  );
}

export default Portfolio;
