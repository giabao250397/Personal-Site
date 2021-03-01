import React from "react";
import PropTypes from "prop-types";
import { Box, Flex, Image } from "@chakra-ui/react";
import Hireme from "../hireme";

HiremeList.propTypes = {
  hiremeList: PropTypes.array.isRequired,
};

function HiremeList({ hiremeList }) {
  return (
    <Box margin={1}>
      {hiremeList.map((hireme) => (
        <Flex key={hireme.id} paddingBottom={5} color="white">
          <Hireme hireme={hireme} />
        </Flex>
      ))}
    </Box>
  );
}

export default HiremeList;
