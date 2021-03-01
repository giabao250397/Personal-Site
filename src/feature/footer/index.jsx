import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Flex,
  Heading,
  Icon,
  IconButton,
  space,
  Spacer,
} from "@chakra-ui/react";
import {
  SunIcon,
  TimeIcon,
  UpDownIcon,
  WarningTwoIcon,
} from "@chakra-ui/icons";

FooterFeature.propTypes = {};

function FooterFeature(props) {
  return (
    <Flex bg="black">
      <Box paddingLeft={10}>
        <IconButton
          borderRadius={50}
          margin={7}
          icon={<SunIcon></SunIcon>}
          variant="outline"
          colorScheme="red"
          aria-label="Call Sage"
          fontSize="20px"
        />
        <IconButton
          variant="outline"
          colorScheme="red"
          aria-label="Call Sage"
          fontSize="20px"
          margin={7}
          borderRadius={50}
          icon={<UpDownIcon />}
        />
        <IconButton
          variant="outline"
          colorScheme="red"
          aria-label="Call Sage"
          fontSize="20px"
          margin={7}
          borderRadius={50}
          icon={<TimeIcon />}
        />
        <IconButton
          variant="outline"
          colorScheme="red"
          aria-label="Call Sage"
          fontSize="20px"
          margin={7}
          borderRadius={50}
          icon={<WarningTwoIcon />}
        />
      </Box>
      <Spacer />
      <Heading fontSize={20} padding={10} borderRadius>
        Copyright © 2021 BaoTG. All Rights Reserved.
      </Heading>
    </Flex>
  );
}

export default FooterFeature;
