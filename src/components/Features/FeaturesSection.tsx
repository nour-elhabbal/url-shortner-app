import { Box, Flex, Text } from "@chakra-ui/react";
import {
  brandRecognitionIcon,
  detailedRecordsIcon,
  fullyCustomizableIcon,
} from "../../assets/images";
import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  return (
    <>
      <Flex direction="column" align="center" textAlign="center" m="75px 0">
        <Box
          as="h1"
          fontSize={["2em", null, "2.5em"]}
          fontWeight="700"
          color="neutral.VeryDarkBlue"
        >
          Advanced Statistics
        </Box>

        <Text width={["90%", null, "50%"]} color="neutral.GrayishViolet">
          Track how your links are performing across the web with our advanced statistics dashboard.
        </Text>
      </Flex>

      <Flex
        pos="relative"
        direction={["column", null, "row"]}
        mt="100px"
        align="center"
        justify="center"
        gap="3%"
        zIndex="10"
      >
        <Box
          bgColor="primary.Cyan"
          height={["80%", null, "10px"]}
          width={["10px", null, "75%"]}
          position="absolute"
          top={["10%", null, "34%"]}
          zIndex="5"
        ></Box>

        <FeatureCard
          posY="0"
          icon={brandRecognitionIcon}
          featureName="Brand Recognition"
          featureDetails="Boost your brand recognition with
        each click. Generic links don't mean a
        thing. Branded links help instil
        confidence in your content."
        />

        <FeatureCard
          posY="40px"
          icon={detailedRecordsIcon}
          featureName="Detailed Records"
          featureDetails="Gain insights into who is clicking your links. Knowing when and where people engage with your content
                        helps inform better decisions."
        />

        <FeatureCard
          posY="80px"
          icon={fullyCustomizableIcon}
          featureName="Fully Customizable"
          featureDetails="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
        />
      </Flex>
    </>
  );
};

export default FeaturesSection;
