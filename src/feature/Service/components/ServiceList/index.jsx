import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";
import Service from "../service";
import "./styles.scss";

ServiceList.propTypes = {
  serviceList: PropTypes.array.isRequired,
};

function ServiceList({ serviceList }) {
  return (
    <Flex justify="center" align="center" wrap="nowrap">
      <SimpleGrid columns={3} spacing={10}>
        {serviceList.map((service) => (
          <Box key={service.id}>
            <Service service={service} />
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  );
}

export default ServiceList;
