import { Box, Button, Flex } from "@chakra-ui/react";
import { UrlsListType } from "../../types";
import { useEffect, useRef, useState } from "react";

const LinkBlock = ({ urlsListItem }: { urlsListItem: UrlsListType }) => {
  const copyButtonRef = useRef<HTMLButtonElement>(null);

  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const handleNonCopyClick = (e: any) => {
      if (!copyButtonRef.current?.contains(e.target)) {
        setIsCopied(false);
      }
    };

    document.addEventListener("mousedown", handleNonCopyClick);

    return () => {
      document.removeEventListener("mousedown", handleNonCopyClick);
    };
  }, [isCopied]);

  const handleCopyClick = (term: string) => {
    setIsCopied(true);
    navigator.clipboard.writeText(term);
  };

  if (urlsListItem.shortenedUrl) {
    return (
      <Flex
        direction={["column", null, "row"]}
        justifyContent="space-between"
        align={["unset", null, "center"]}
        gap={["10px", null, "0"]}
        bgColor="#ffff"
        borderRadius="5px"
        w="100%"
        margin="10px 0"
        padding="10px"
      >
        <Box noOfLines={1}>{urlsListItem.longUrl}</Box>

        <Flex direction={["column", null, "row"]} align={["unset", null, "center"]} gap="20px">
          <Box
            as="a"
            href={urlsListItem.shortenedUrl}
            target="_blank"
            color="primary.Cyan"
            fontWeight="700"
          >
            {urlsListItem.shortenedUrl}
          </Box>

          <Button
            ref={copyButtonRef}
            onClick={() => {
              handleCopyClick(urlsListItem.shortenedUrl);
            }}
            bgColor={isCopied ? "primary.DarkViolet" : "primary.Cyan"}
            _hover={{ opacity: "0.6" }}
            _focus={{ outline: "none" }}
            color="white"
            borderRadius="5px"
            w={["unset", null, "100px"]}
            fontSize="1em"
          >
            {isCopied ? "Copied!" : "Copy"}
          </Button>
        </Flex>
      </Flex>
    );
  }
};

export default LinkBlock;
