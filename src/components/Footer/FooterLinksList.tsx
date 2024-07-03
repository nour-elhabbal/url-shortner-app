import { Box, Flex } from "@chakra-ui/react";

interface FooterLinksProps {
  name: string;
  links: {
    linkName: string;
    target: string;
  }[];
}

const FooterLinksList = ({ name, links }: FooterLinksProps) => {
  return (
    <Flex direction="column" gap="10px" align={["center", null, "unset"]} m={["20px", null, "0"]}>
      <Box as="p" color="#ffff" fontWeight="700" mb="20px">
        {name}
      </Box>
      {links.map((link) => (
        <Box as="a" href={link.target} _hover={{ color: "primary.Cyan" }}>
          {link.linkName}
        </Box>
      ))}
    </Flex>
  );
};

export default FooterLinksList;
