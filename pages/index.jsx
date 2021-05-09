import React from "react";
import { Flex, Box, Stack, Input, Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();

  function redirect() {
    router.push("/home");
  }

  return (
    <Flex
      d="flex"
      w="100vw"
      h="100vh"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        bg="#3d3d56"
        textAlign="center"
        w="90%"
        maxWidth="320px"
        p="4"
        color="white"
        borderRadius="6px"
      >
        <Stack spacing="3">
          <Text fontSize="3xl">Login</Text>
          <Input color="grey" placeholder="Login" />
          <Input color="grey" placeholder="Password" />
          <Button variantcolor="blue" onClick={redirect}>
            Login
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
}
