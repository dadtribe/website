import { Box, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Header = () => (
  <Box textAlign="center" fontSize="xl">
    <Box>
      <Box bg="grey" w="100%">
        <Link to={"/"}>
          <Heading>Welcome to the Dad Tribe</Heading>
        </Link>
        <Text pt="20px" pb="20px">
          {" "}
          An open source collective of information for fatherhood - the most
          difficult and rewarding challenge you've faced.
        </Text>
      </Box>
      <Box h="100px" bg="white"></Box>
    </Box>
  </Box>
);
