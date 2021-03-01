import { LinkIcon, LockIcon, UnlockIcon, ViewIcon } from "@chakra-ui/icons";
import {
  border,
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Link,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import "./styles.scss";

HeaderFeature.propTypes = {};

function HeaderFeature(props) {
  return (
    <Box position="fixed" zIndex={10} w="100%">
      <Flex>
        <Box bg="black">
          <Flex p={4} color="white">
            <Heading margin={4} className="header__x">
              <a href="#home1">Home</a>
            </Heading>
            <Heading margin={4} className="header__x">
              <a href="#about1">About</a>
            </Heading>
            <Heading margin={4} className="header__x">
              <a href="#service1">Service</a>
            </Heading>
            <Heading margin={4} className="header__x">
              <a href="#portfolio">Portfolio</a>
            </Heading>
          </Flex>
        </Box>
        <Spacer bg="black" />
        <Box p="4" bg="black">
          <Link
            href="https://www.facebook.com/profile.php?id=100009133212608"
            isExternal
          >
            <Icon
              _hover={{ transform: "scaleY(1.5)" }}
              color="white"
              margin={7}
              className="header__icon"
              as={ViewIcon}
              w={6}
              h={6}
            />
          </Link>
          <Link href="https://www.instagram.com/giabao6050/" isExternal>
            <Icon
              _hover={{ transform: "scaleY(1.5)" }}
              color="white"
              margin={7}
              className="header__icon"
              as={LockIcon}
              w={6}
              h={6}
            />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=100009133212608"
            isExternal
          >
            <Icon
              _hover={{ transform: "scaleY(1.5)" }}
              margin={7}
              color="white"
              className="header__icon"
              as={UnlockIcon}
              w={6}
              h={6}
            />
          </Link>
          <Link href="https://www.instagram.com/giabao6050/" isExternal>
            <Icon
              _hover={{ transform: "scaleY(1.5)" }}
              color="white"
              margin={7}
              className="header__icon"
              as={LinkIcon}
              w={6}
              h={6}
            />
          </Link>
          <a href="#contact">
            <Button
              _hover={{ transform: "scaleY(1.5)" }}
              className="header__icon"
              colorScheme="blue"
            >
              CONTACT
            </Button>
          </a>
        </Box>
      </Flex>
    </Box>
  );
}

export default HeaderFeature;
