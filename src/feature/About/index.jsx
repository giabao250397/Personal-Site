import {
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import "./styles.scss";

AboutFeature.propTypes = {};

function AboutFeature(props) {
  return (
    <Flex id="about1" justify="center" wrap="nowrap" padding={140} bg="#38B2AC">
      <SimpleGrid columns={2} spacing={2} bg="#38B2AC">
        <Box w={850}>
          <Image
            className="image"
            w={600}
            h={550}
            borderRadius={10}
            marginLeft={40}
            src="https://scontent.fdad3-2.fna.fbcdn.net/v/t1.0-9/148600969_2748453558802391_1390348623922650746_o.jpg?_nc_cat=104&ccb=3&_nc_sid=8bfeb9&_nc_ohc=Iod68lkx9BIAX8o9nVw&_nc_ht=scontent.fdad3-2.fna&oh=7772456f6972a07147500cb076a6ad27&oe=605E70CB"
          />
        </Box>
        <Box w={850} bg="#38B2AC" color="#FBD38D">
          <Heading fontSize={60} fontWeight="bold">
            About Me
          </Heading>
          <Heading fontSize={20}>
            <p>
              I am a person who has many enthusiasts with cars, especially super
              cars.
            </p>
            <p>
              So I started to search and learn about exotic supercars in
              Vietnam.
            </p>
            <p>
              With the wish that someday when I qualify for the economy I will
              reward myself with a super car to satisfy my passion.
            </p>
            <p>
              To do that, first of all, I have to learn IT well because that is
              the factor that helps me earn money to satisfy my passion.
            </p>
          </Heading>
          <Tabs>
            <TabList>
              <Tab className="text__tab">Main Skills</Tab>
              <Tab className="text__tab">Experience</Tab>
              <Tab className="text__tab">Education & Certification</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <p>
                  <b>User interface & experience design</b> - UI/UX
                </p>
                <p>Delight the user and make it work.</p>
                <p>
                  <b>Payment gateway, Third-party service</b> - API interation
                </p>
                <p>I like to move it move it.</p>
                <p>
                  <b>Modern web app with newest technologies</b> - Development
                </p>
                <p>Turn your idea into reality .</p>
              </TabPanel>
              <TabPanel>
                <p>
                  <b>Web & App Developer</b> - Freelancer
                </p>
                <p>2021 - Present</p>
                <p>
                  <b>Full-stack Engineer & Team Leader</b> - Luxtech
                </p>
                <p>2021 - 2026</p>
              </TabPanel>
              <TabPanel>
                <p>
                  <b>Good Degree in Information Technology</b> - Luxtech
                  University of Technology (LUT)
                </p>
                <p>2020-2021</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </SimpleGrid>
    </Flex>
  );
}

export default AboutFeature;
