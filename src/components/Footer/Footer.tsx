import { Box, Flex } from "@chakra-ui/react";

import { FacebookIcon, InstagramIcon, Logo, PinterestIcon, TwitterIcon } from "../../assets/images";
import FooterLinksList from "./FooterLinksList";

const Footer = () => {
  return (
    <Flex
      as="footer"
      overflow="hidden"
      bgColor="neutral.VeryDarkViolet"
      minH="320px"
      justify={["center", null, "space-evenly"]}
      align={["center", null, "unset"]}
      pt="80px"
      direction={["column", null, "row"]}
    >
      <Box color="#ffff" m={["0", null, "0 10% 0 0"]}>
        <Logo />
      </Box>

      <FooterLinksList
        name="Features"
        links={[
          {
            linkName: "Link Shortening",
            target: "#",
          },
          {
            linkName: "Branded Links",
            target: "#",
          },
          {
            linkName: "Analytics",
            target: "#",
          },
        ]}
      />

      <FooterLinksList
        name="Resources"
        links={[
          {
            linkName: "Blog",
            target: "#",
          },
          {
            linkName: "Developers",
            target: "#",
          },
          {
            linkName: "Support",
            target: "#",
          },
        ]}
      />

      <FooterLinksList
        name="Company"
        links={[
          {
            linkName: "About",
            target: "#",
          },
          {
            linkName: "Our Team",
            target: "#",
          },
          {
            linkName: "Careers",
            target: "#",
          },
          {
            linkName: "Contact",
            target: "#",
          },
        ]}
      />
      <Flex gap="15px" m={["40px 0", null, "0"]}>
        <Box as="a" href="#" fill="#ffff" _hover={{ fill: "primary.Cyan" }} h="min-content">
          <FacebookIcon />
        </Box>

        <Box as="a" href="#" fill="#ffff" _hover={{ fill: "primary.Cyan" }} h="min-content">
          <TwitterIcon />
        </Box>

        <Box as="a" href="#" fill="#ffff" _hover={{ fill: "primary.Cyan" }} h="min-content">
          <PinterestIcon />
        </Box>

        <Box as="a" href="#" fill="#ffff" _hover={{ fill: "primary.Cyan" }} h="min-content">
          <InstagramIcon />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Footer;
