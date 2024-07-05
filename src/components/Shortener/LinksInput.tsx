import { useState } from "react";
import { Button, Flex, Input, FormControl, FormErrorMessage } from "@chakra-ui/react";

import { UrlsListType } from "../../types";
import { getShortenedUrl } from "../../apis";
import { shortenBG } from "../../assets/images";

interface LinksInputProps {
  setListItem: (listItem: UrlsListType) => void;
  urlsList: UrlsListType[] | [];
}

const LinksInput = ({ setListItem, urlsList }: LinksInputProps) => {
  const [term, setTerm] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const urlRegex =
    /(?:(?:https?|ftp):\/\/|\b(?:[a-z\d]+\.com))(?:(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))?\))+(?:\((?:[^\s()<>]+|(?:\(?:[^\s()<>]+\)))?\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))?/;

  const handleChange = (e: any) => setTerm(e.target.value);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError(false);
    setErrorMsg("");

    if (term === "") {
      setError(true);
      setErrorMsg("Please add a link");
      return;
    }

    if (!urlRegex.test(term)) {
      setError(true);
      setErrorMsg("inValid UrL");
      return;
    }

    for (let i = 0; i < urlsList.length; i++) {
      if (!urlsList[i].shortenedUrl && urlsList[i].longUrl === term) {
        setError(true);
        setErrorMsg("Unexpected error, make sure u write https:// or http:// before your link");
        return;
      }

      if (urlsList[i].longUrl === term) {
        setError(true);
        setErrorMsg("url already added");
        return;
      }
    }

    const shortenedLink = (await getShortenedUrl(term)) as string;

    if (shortenedLink === undefined) {
      setError(true);
      setErrorMsg(
        "Unexpected error, please write a valid link or make sure u write https:// or http:// before your link"
      );
    }

    setListItem({
      longUrl: term,
      shortenedUrl: shortenedLink,
    });
  };

  return (
    <Flex
      width="85%"
      p="50px 40px"
      borderRadius="10px"
      bgImage={shortenBG}
      bgColor="primary.DarkViolet"
      bgRepeat="no-repeat"
      bgSize="cover"
      gap="20px"
      justify="center"
      direction={["column", null, "row"]}
    >
      <FormControl
        isInvalid={error}
        as="form"
        display="flex"
        onSubmit={handleSubmit}
        flexDir="column"
        w={["100%", null, "70%"]}
        minW="200px"
      >
        <Input
          placeholder="Shorten a URL here..."
          value={term}
          onChange={handleChange}
          bgColor="#ffff"
          h="60px"
          width="100%"
        />
        {error && <FormErrorMessage>{errorMsg}</FormErrorMessage>}
      </FormControl>

      <Button
        onClick={handleSubmit}
        bgColor="primary.Cyan"
        _hover={{ opacity: "0.6" }}
        color="white"
        borderRadius="10px"
        minW="200px"
        p="30px 0 "
        fontSize="1.2em"
      >
        Shorten it!
      </Button>
    </Flex>
  );
};

export default LinksInput;
