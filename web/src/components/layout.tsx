import React, { ReactNode } from "react";
import {
  Box,
  Center,
  Container,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import Header from "./header";

type Props = {
  children: ReactNode;
};

export function Layout(props: Props) {
  return (
    <div>
      <Header />

      <Container maxW="container.md" py="8">
        {props.children}
      </Container>

      <Center as="footer" bg={useColorModeValue("gray.300", "gray.700")} p={6}>
        <p>
          {"Based on "}
          <Link href="https://github.com/wslyvh/proof-of-competence" isExternal>
            Proof of Competence
          </Link>
          {" by "}
          <Link href="https://twitter.com/wslyvh" isExternal>
            @wslyvh
          </Link>
          .
        </p>
      </Center>
    </div>
  );
}
