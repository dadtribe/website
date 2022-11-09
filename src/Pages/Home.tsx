import * as React from "react";
import {
  ChakraProvider,
  Box,
  Center,
  List,
  ListItem,
  Stack,
  Code,
  Grid,
  theme,
  Image,
  Text,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import Link from "next/link";

import { ReactCusdis } from "react-cusdis";

export const Home = () => (
  <Center>
    <Stack p={[2, 10]} w={["100", "70%"]}>
      <Text fontSize={["20px", "48px"]} fontWeight="800" align="center">
        Being a dad will break you - it's how you get back up that counts
      </Text>
      <Box p=".25%" />
      <Text fontSize={["20px", "30px"]} fontWeight="600" align="center">
        Hopefully this preparation helps you do it fewer times and rebound
        quicker
      </Text>

      <Box p="5%" />
      <Text>Open forum posts</Text>
      <Box>
        <Link href="/#/dad_tips">Tips for being a good dad</Link>
      </Box>
      <Box>
        <Link href="/#/partner_tips">Tips for being a good partner</Link>
      </Box>

      <Box p="5%" />
      <Text>Current posts</Text>
      <Box>
        <Link href="/#/witching_hour">
          <Image w="35%" src="witching_hour.png"></Image>
        </Link>
      </Box>

      <Center p="10%">
        <Stack>
          <Heading>What would you like to see the next post be about?</Heading>

          <ReactCusdis
            attrs={{
              host: "https://cusdis.com",
              appId: "ed5bd525-674c-4548-be96-4cf0a5bbc5bc",
              pageId: "1",
              pageTitle: "homepage",
              pageUrl: "https://dadtribe.org/",
            }}
          />
        </Stack>
      </Center>
      <Text>
        <List>
          <ListItem>
            <Text fontSize="x-large">Next ideas in pipeline </Text>p
          </ListItem>
          <ListItem>Strategies for finances </ListItem>
          <ListItem>Best gear </ListItem>
          <ListItem>problem solving tactics</ListItem>
          <ListItem>spend more energy to feel younger</ListItem>
        </List>
      </Text>
    </Stack>
  </Center>
);
