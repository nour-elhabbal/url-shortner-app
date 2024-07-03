import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { workingImage } from "../assets/images";

const Hero = () => {
  return (
    <Flex
      direction={["column-reverse", null, "row"]}
      align="center"
      justify="space-between"
      minH="90vh"
    >
      <Flex
        direction="column"
        align={["center", null, "unset"]}
        width={["90%", null, "45%"]}
        m="8%"
      >
        <Box
          as="h1"
          fontSize={["2em", "3em", null, "4.5em"]}
          fontWeight="700"
          color="neutral.VeryDarkBlue"
          textAlign={["center", null, "unset"]}
        >
          More than just shorter links
        </Box>

        <Text fontSize="1.5em" color="neutral.GrayishViolet" textAlign={["center", null, "unset"]}>
          Build your brand's recognition and get detailed insights on how your links are preforming
        </Text>

        <Button
          bgColor="primary.Cyan"
          _hover={{ opacity: "0.6" }}
          color="white"
          borderRadius="30px"
          width="170px"
          p="25px 0 "
          mt="50px"
        >
          Get Started
        </Button>
      </Flex>
      <Box
        as="img"
        src={workingImage}
        width={["95%", null, "40%"]}
        maxW="760px"
        ml={["5%", null, "0"]}
      ></Box>
    </Flex>
  );
};

export default Hero;
