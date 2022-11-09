import * as React from "react";
import { ChakraProvider, Flex, Text, Box, theme } from "@chakra-ui/react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box minH="100vh">
      <Header></Header>

      <Footer />
    </Box>
  </ChakraProvider>
);
