import * as React from "react";
import { ChakraProvider, Flex, Box, theme } from "@chakra-ui/react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { Logo } from "../Logo";
import { Home } from "./Home";
import { Header } from "./Header";
import { WitchingHour } from "./WitchingHour";
import { Footer } from "./Footer";

export const App = () => (
  <Router>
    <ChakraProvider theme={theme}>
      <Box minH="100vh">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/witching_hour" element={<WitchingHour />} />
        </Routes>

        <Footer />
      </Box>
    </ChakraProvider>
  </Router>
);
