import { Box, Center, Stack, Text } from "@chakra-ui/react";
import { ReactCusdis } from "react-cusdis";

export const WitchingHour = () => (
  <Center>
    <Stack width={["95%", "70%"]}>
      <Box>
        the witching hour ss around the 3 month mark some babies are said to
        calm down. our baby did the opposite. She was so chill the first 90 days
        that we often got jealous remarks around how chill our baby was. the
        week of 3 month bday, she started going apeshit in the evenings. scream
        crying tears streaming, painful stuff to watch as a parent. Many valiant
        efforts were made
      </Box>

      <Center p="50px">
        What has been your experience? Please share any perspective you have on
        this topic
      </Center>
      <ReactCusdis
        attrs={{
          host: "https://cusdis.com",
          appId: "ed5bd525-674c-4548-be96-4cf0a5bbc5bc",
          pageId: "1",
          pageTitle: "WITCHING_HOUR",
          pageUrl: "https://dadtribe.org/witching_hour",
        }}
      />
    </Stack>
  </Center>
);
