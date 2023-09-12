import {
  Box,
  Heading,
  Text,
  Button,
  Image,
  Flex,
} from '@chakra-ui/react';

const LandingPanel = () => {
  return (
    <Flex direction="row" className="panel banner right">
      {/* Image Section */}
      <Box className="image filtered span-1-75" data-position="25% 25%" position="relative" flex="1.75">
        {/* Headshot */}
        <Box className="headshot" position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
          <Image src="/ArchaaPortfolio.png" alt="Headshot" objectFit="cover" />
        </Box>
        {/* Background image */}
        <Image src="/pic01.jpg" alt="A headshot of Archaa standing in front of a fence looking at the camera" />
      </Box>
      {/* Content Section */}
      <Box className="content color0 span-3-75" p={4} flex="3.75">
        <Heading as="h1" className="major">
          Archaa Shrivastav
        </Heading>
        <Heading as="h2">Software Engineer</Heading>
        <Text mt={4}>
          A <strong>full-stack software engineer</strong> who loves building
          well-designed applications that solve real-world problems.
        </Text>
        <Flex mt={4} direction="row" className="actions">
          <Button as="a" href="#first" className="button primary color1 circle icon solid">
            Next
          </Button>
        </Flex>
      </Box>


    </Flex>
  );
};

export default LandingPanel;
