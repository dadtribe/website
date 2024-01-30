import * as React from "react";
import {
  ChakraProvider,
  Box,
  Center,
  Link,
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
  GridItem,
} from "@chakra-ui/react";
import { ReactCusdis } from "react-cusdis";

export const Home = () => (
  <Center>
    <Stack p={[2, 10]} w={["100", "70%"]}>
      <Text fontSize={["20px", "36px"]} fontWeight="600" align="center">
        “My father gave me the greatest gift anyone could give another person:
        He believed in me.” — Jim Valvano
      </Text>
      <Text fontSize={["20px", "36px"]} fontWeight="600" align="center">
        {" "}
        WE BELIEVE IN YOU!
      </Text>
      <Box p=".25%" />
      <Text fontSize={["20px", "30px"]} fontWeight="400" align="center">
        Falling is inevitable, hopefully we help you do it fewer times and have
        a framework in place to rebound quickly.
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
      <Grid gap={5}>
        <GridItem>
          <Box>
            <Link href="/#/first_forty">
              <Image w="35%" src="first_forty_book.png"></Image>
            </Link>
          </Box>
        </GridItem>
        <GridItem>
          <Box>
            <Link href="/#/witching_hour">
              <Image w="35%" src="witching_hour.png"></Image>
            </Link>
          </Box>
        </GridItem>
      </Grid>
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
            <Text fontSize="x-large">Next ideas in pipeline </Text>
          </ListItem>
          <ListItem>Strategies for finances </ListItem>
          <ListItem>Best gear </ListItem>
          <ListItem>problem solving tactics</ListItem>
          <ListItem>spend more energy to feel younger</ListItem>
        </List>
      </Text>
      <Box p="5%">
        <Heading as="h3" size="lg" textAlign="center">
          Helpful Links
        </Heading>
        <List spacing={3}>
          <ListItem>
            <Link href="https://www.fatherly.com/life/small-change-that-made-a-huge-difference-in-my-well-being">
              Small changes make a big difference
            </Link>
          </ListItem>
        </List>
      </Box>
    </Stack>
  </Center>
);
