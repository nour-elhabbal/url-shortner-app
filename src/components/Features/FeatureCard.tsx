import { Box, Flex } from "@chakra-ui/react";

interface FeatureCardProp {
  icon: any;
  featureName: string;
  featureDetails: string;
  posY: string;
}

const FeatureCard = ({ icon, featureName, featureDetails, posY }: FeatureCardProp) => {
  return (
    <Flex
      direction="column"
      align={["center", null, "unset"]}
      bg="#ffff"
      w={["85%", null, "25%"]}
      minW="240px"
      minH={["unset", null, "280px"]}
      p="0 20px 30px"
      borderRadius="5px"
      position={["unset", null, "relative"]}
      top={posY}
      zIndex="10"
      m={["50px 0", null, "25px 0 200px"]}
    >
      <Box
        transform="translateY(-50%)"
        borderRadius="50%"
        bgImg={icon}
        bgRepeat="no-repeat"
        bgPos="center"
        w="90px"
        h="90px"
        bgColor="primary.DarkViolet"
      ></Box>
      <Box fontWeight="700" color="neutral.VeryDarkBlue" fontSize="1.2em" m="-20px 0 10px">
        {featureName}
      </Box>
      <Box textAlign={["center", null, "unset"]} color="neutral.GrayishViolet" fontSize="1em">
        {featureDetails}
      </Box>
    </Flex>
  );
};

export default FeatureCard;
