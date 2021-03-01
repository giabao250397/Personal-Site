import {
  ArrowRightIcon,
  ArrowUpDownIcon,
  ChatIcon,
  ExternalLinkIcon,
  SearchIcon,
  StarIcon,
} from "@chakra-ui/icons";
import { Box, Heading, Icon } from "@chakra-ui/react";
import React from "react";
import ServiceList from "./components/ServiceList";
import "./styles.scss";

ServiceFeature.propTypes = {};

function ServiceFeature(props) {
  const serviceList = [
    {
      id: 1,
      title: "Business Stratagy",
      name: "Design a complete product from your amazing idea.",
      icon: <Icon as={ArrowUpDownIcon} w={14} h={14} />,
    },
    {
      id: 2,
      title: "Website Development",
      name: "Build highly-engaging websites with perfect UI/UX.",
      icon: <Icon as={StarIcon} w={14} h={14} />,
    },
    {
      id: 3,
      title: "Marketing",
      name: "Promote your product to worldwide community.",
      icon: <Icon as={ExternalLinkIcon} w={14} h={14} />,
    },
    {
      id: 4,
      title: "Mobile Development",
      name: "Build awwesome Android/ios applications.",
      icon: <Icon as={ChatIcon} w={14} h={14} />,
    },
    {
      id: 5,
      title: "Enhance your product",
      name: "Fix & improve your current product.",
      icon: <Icon as={ArrowRightIcon} w={14} h={14} />,
    },
    {
      id: 6,
      title: "SEO",
      name: "Best practices in Search Engine Optimization.",
      icon: <Icon as={SearchIcon} w={14} h={14} />,
    },
  ];
  return (
    <Box bg="black" padding={120} id="service1">
      <Heading
        fontSize="60px"
        textAlign="center"
        marginBottom="7"
        color="white"
      >
        The Most Expensive Supercars Now
      </Heading>
      <Heading fontSize="25px" textAlign="center" paddingBottom="10">
        If you want to see beautiful super cars come to me!
      </Heading>
      <div>
        <ServiceList serviceList={serviceList} />
      </div>
    </Box>
  );
}

export default ServiceFeature;
