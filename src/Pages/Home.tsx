import * as React from "react";
import {
  ChakraProvider,
  Box,
  Center,
  Link,
  List,
  ListItem,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";

export const Home = () => (
  <Center>
    <Box>
      <Link href="/#/witching_hour">Witching Hour</Link>

      <List>
        <ListItem>Preparation</ListItem>
        <ListItem>Months 0-3</ListItem>
        <ListItem>Months 3-6</ListItem>
      </List>
    </Box>
  </Center>
);
