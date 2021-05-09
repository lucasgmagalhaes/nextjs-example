import React from "react";
import { Flex } from "@chakra-ui/react";
import { Item } from "../components/Item";

export default function Home() {
  return (
    <Flex
      d="flex"
      mt="40px"
      w="100vw"
      h="100vh"
      flexDir="column"
      alignItems="center"
    >
      <Flex w="40vw" h="100vh" flexDir="column" alignItems="center">
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </Flex>
    </Flex>
  );
}
