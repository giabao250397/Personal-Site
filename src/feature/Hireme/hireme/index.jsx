import React from "react";
import PropTypes from "prop-types";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";

Hireme.propTypes = {
  hireme: PropTypes.object.isRequired,
};

function Hireme({ hireme }) {
  return (
    <Flex>
      <Image boxSize="40px" src={hireme.thumbnailUrl} />
      <Heading fontSize={15} textAlign="center" margin={3}>
        {hireme.name}
      </Heading>
    </Flex>
  );
}

export default Hireme;
