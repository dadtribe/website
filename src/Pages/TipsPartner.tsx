import { Box, Center, Stack, Text } from "@chakra-ui/react";
import { ReactCusdis } from "react-cusdis";

export const TipsPartner = () => (
  <Center>
    <Stack width={["95%", "70%"]}>
      <Center p="50px">
        What are your best tips for being a good partner? Comment below
      </Center>
      <ReactCusdis
        attrs={{
          host: "https://cusdis.com",
          appId: "ed5bd525-674c-4548-be96-4cf0a5bbc5bc",
          pageId: "4",
          pageTitle: "PARTNER_TIPS",
          pageUrl: "https://dadtribe.org/partner_tips",
        }}
      />
    </Stack>
  </Center>
);
