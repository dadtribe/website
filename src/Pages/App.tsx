import * as React from "react";
import { ChakraProvider, Flex, Text, Box, theme } from "@chakra-ui/react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { Logo } from "../Logo";
import { Home } from "./Home";
import { Header } from "./Header";
import { FirstForty } from "./FirstForty";
import { WitchingHour } from "./WitchingHour";
import { Footer } from "./Footer";
import { TipsDad } from "./TipsDad";
import { TipsPartner } from "./TipsPartner";

export const App = () => (
  <Router>
    <ChakraProvider theme={theme}>
      <Box minH="100vh">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dad_tips" element={<TipsDad />} />
          <Route path="/first_forty" element={<FirstForty />} />
          <Route path="/partner_tips" element={<TipsPartner />} />
          <Route path="/witching_hour" element={<WitchingHour />} />
        </Routes>

        <Footer />
      </Box>
    </ChakraProvider>
  </Router>
);
