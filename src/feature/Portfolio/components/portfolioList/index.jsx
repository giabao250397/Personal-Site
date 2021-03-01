import React from "react";
import PropTypes from "prop-types";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import Portfolio from "../portfolio";

PortfolioList.propTypes = {
  portfolioList: PropTypes.array.isRequired,
};

function PortfolioList({ portfolioList }) {
  return (
    <Flex justify="center" align="center" wrap="nowrap">
      <SimpleGrid columns={3} spacing={10}>
        {portfolioList.map((portfolio) => (
          <Box key={portfolio.id}>
            <Portfolio portfolio={portfolio} />
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  );
}

export default PortfolioList;
