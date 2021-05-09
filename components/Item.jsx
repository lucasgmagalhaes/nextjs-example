import React from "react";
import { Stack, Text } from "@chakra-ui/react";

export function Item() {
  return (
    <Stack>
      <div class="item">
        <Text>Titulo</Text>
        <Text>Subtitulo</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
          massa at risus faucibus vestibulum. Praesent lacinia est sit amet
          tortor rhoncus molestie. Vivamus malesuada ultrices nibh nec mollis.
          Nulla rhoncus fringilla velit convallis tempus
        </Text>
      </div>
    </Stack>
  );
}
