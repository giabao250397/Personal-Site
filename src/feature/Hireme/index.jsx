import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";
import HiremeList from "./HiremeList";

HiremeFeature.propTypes = {};

function HiremeFeature(props) {
  const hiremeList = [
    {
      id: 1,
      name: "Upwork",
      thumbnailUrl:
        "https://pbs.twimg.com/profile_images/1280897745906270214/_lUXucxE.png",
    },
    {
      id: 2,
      name: "Danang University of Science and Technology",
      thumbnailUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/0b/Logodhbk.jpg",
    },
  ];
  return (
    <Flex
      bg="#38B2AC"
      justify="center"
      align="center"
      wrap="nowrap"
      //   paddingLeft={10}
      padding={180}
      id="contact"
    >
      <Box>
        <Box w={900}>
          <Heading fontWeight="bold" fontSize={60} color="white">
            Hire Me
          </Heading>
          <Heading fontSize={25} paddingBottom={20}>
            I am available for freelance work. Connect with me via Telegram:
            giabaotran.
          </Heading>
        </Box>

        <Box
          bg="gray"
          w={480}
          h={380}
          paddingTop={10}
          paddingLeft={10}
          borderRadius={7}
        >
          <Flex>
            <Image
              boxSize="100px"
              borderRadius={50}
              src="https://scontent.fdad3-3.fna.fbcdn.net/v/t1.0-9/69365217_2281929878788097_2413292563994771456_o.jpg?_nc_cat=111&ccb=3&_nc_sid=8bfeb9&_nc_ohc=0VDW2odgdmkAX8nxjOG&_nc_ht=scontent.fdad3-3.fna&oh=82b4c0c8926f12c3dd916f6d17986b8f&oe=605F7A93"
            />
            <SimpleGrid column={1} spacing={1}>
              <Heading
                fontSize={17}
                color="white"
                paddingLeft={7}
                paddingTop={5}
              >
                Bảo Trần Gia
              </Heading>
              <Heading
                fontSize={15}
                color="white"
                paddingLeft={7}
                paddingBottom={5}
              >
                Bachelor's degree at Danang University of Science and…
              </Heading>
            </SimpleGrid>
          </Flex>
          <Box paddingTop={10}>
            <HiremeList hiremeList={hiremeList} />
          </Box>
          <Flex>
            <Button colorScheme="blue">View profile</Button>
            <Spacer />
            <Image
              marginRight={10}
              w={40}
              h={10}
              src="https://victor-mochere.com/wp-content/uploads/2018/03/How-to-mass-follow-people-on-LinkedIn.jpg"
            />
          </Flex>
        </Box>
      </Box>
      <Box>
        <Image
          boxSize="520px"
          borderRadius={10}
          src="https://scontent.fdad3-3.fna.fbcdn.net/v/t1.0-9/142097936_2735031443477936_4942299998820400081_o.jpg?_nc_cat=111&ccb=3&_nc_sid=8bfeb9&_nc_ohc=bpNicVbVRdoAX_wBh3d&_nc_ht=scontent.fdad3-3.fna&oh=df9064431b9a3fbf34595733a117082e&oe=605FBEA3"
        />
      </Box>
    </Flex>
  );
}

export default HiremeFeature;
