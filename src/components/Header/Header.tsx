import { useRef, useState } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { Divide as Hamburger } from "hamburger-react";

import { logo } from "../../assets/images";
import Menu from "./Menu";

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const hamburgerRef = useRef<HTMLDivElement>(null);

  const closeMenu = (data: boolean) => {
    setIsMenuVisible(data);
  };

  return (
    <Flex as="header" p="4% 5%" pos="relative">
      <Flex align="center" gap="30px">
        <img src={logo} alt="LOGO" />

        <Flex gap="15px" fontWeight="700" display={["none", null, "flex"]}>
          <Box as="a" href="#" _hover={{ color: "neutral.VeryDarkViolet" }}>
            Features
          </Box>

          <Box as="a" href="#" _hover={{ color: "neutral.VeryDarkViolet" }}>
            Pricing
          </Box>

          <Box as="a" href="#" _hover={{ color: "neutral.VeryDarkViolet" }}>
            Resources
          </Box>
        </Flex>
      </Flex>
      <Flex ml="auto" gap="20px" align="center" display={["none", null, "flex"]}>
        <Box as="a" fontWeight="700" href="#" _hover={{ color: "neutral.VeryDarkViolet" }}>
          Login
        </Box>

        <Button
          bgColor="primary.Cyan"
          _hover={{ opacity: "0.6" }}
          color="white"
          borderRadius="20px"
        >
          Sign up
        </Button>
      </Flex>

      <Box display={["block", null, "none"]} ml="auto" ref={hamburgerRef}>
        <Hamburger toggled={isMenuVisible} toggle={setIsMenuVisible} />
      </Box>
      {isMenuVisible && (
        <Menu closeMenu={closeMenu} isMenuVisible={isMenuVisible} hamburgerRef={hamburgerRef} />
      )}
    </Flex>
  );
};

export default Header;
