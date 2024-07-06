import { useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";

import LinksInput from "./LinksInput";
import type { UrlsListType } from "../../types";
import LinkBlock from "./LinkBlock";

const Shortener = () => {
  const [urlsList, setUrlsList] = useState<UrlsListType[] | []>(
    JSON.parse(localStorage.getItem("urlsList") ?? "[]")
  );

  useEffect(() => {
    localStorage.setItem("urlsList", JSON.stringify(urlsList));
  }, [urlsList]);

  const setListItem = (list: UrlsListType) => {
    setUrlsList([...urlsList, list]);
  };

  const list = urlsList.map((listItem, index) => {
    return <LinkBlock urlsListItem={listItem} key={index} />;
  });

  return (
    <Flex w="100%" align="center" direction="column">
      <LinksInput setListItem={setListItem} urlsList={urlsList} />
      <Box mt="-70px" w="85%">
        {list}
      </Box>
    </Flex>
  );
};

export default Shortener;
