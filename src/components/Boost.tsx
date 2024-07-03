import { Box, Button, Flex } from "@chakra-ui/react";
import { boostBG } from "../assets/images";

const Boost = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      bgImage={boostBG}
      bgColor="primary.DarkViolet"
      bgRepeat="no-repeat"
      bgSize="cover"
      height="250px"
    >
      <Box as="h1" fontSize={["1.5em", "2em", "2.5em"]} fontWeight="700" color="#ffff">
        Boost your links today
      </Box>
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
  );
};

export default Boost;
