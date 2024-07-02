import { Box, Button, Divider, Flex } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

interface Props {
  closeMenu: (data: boolean) => void;
  isMenuVisible: boolean;
  hamburgerRef: React.RefObject<HTMLDivElement>;
}

const anchorTagStyles = {
  fontWeight: "700",
  color: "white",
};

const Menu = ({ closeMenu, isMenuVisible, hamburgerRef }: Props) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: any) => {
      if (!menuRef.current?.contains(e.target) && !hamburgerRef.current?.contains(e.target)) {
        closeMenu(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuVisible]);
  return (
    <Flex
      ref={menuRef}
      direction="column"
      gap="35px"
      justify="center"
      pos="absolute"
      right="5%"
      top="100%"
      z-index="20"
      bgColor="primary.DarkViolet"
      borderRadius="10px"
      p="30px 15px"
      width="90%"
      height="25em"
    >
      <Flex direction="column" align="center" gap="30px">
        <Box as="a" href="#" style={anchorTagStyles}>
          Features
        </Box>

        <Box as="a" href="#" style={anchorTagStyles}>
          Pricing
        </Box>

        <Box as="a" href="#" style={anchorTagStyles}>
          Resources
        </Box>
      </Flex>

      <Divider borderColor="neutral.GrayishViolet" />

      <Flex direction="column" align="center" gap="30px">
        <Box
          as="a"
          fontWeight="700"
          href="#"
          style={anchorTagStyles}
          _hover={{ color: "neutral.VeryDarkViolet" }}
        >
          Login
        </Box>

        <Button
          bgColor="primary.Cyan"
          _hover={{ opacity: "0.6" }}
          color="white"
          borderRadius="25px"
          width="90%"
          padding="25px 0"
        >
          Sign up
        </Button>
      </Flex>
    </Flex>
  );
};

export default Menu;
