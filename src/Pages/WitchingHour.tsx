import { Box, Center, Stack, Text } from "@chakra-ui/react";
import { ReactCusdis } from "react-cusdis";

export const WitchingHour = () => (
  <Center>
    <Stack width={["95%", "70%"]}>
      <Box>
        The witching hour happened around the 3 month mark for us. Some babies
        are said to calm down, but when she reached this age, our baby did the
        opposite. She was so chill that we often got jealous remarks around how
        chill our baby was. Right around 90 days on this planet, she started
        going apeshit in the evenings, particularly from 6-8pm. Just knew it was
        coming no matter how peaceful the time leading up to it. Scream crying
        tears streaming, painful stuff to watch as a parent. Many valiant
        efforts were made, and to be quite honest I'm not sure what is was, and
        by 5 months she got over this. But this particular two hour stretch was
        always the worst.
      </Box>

      <Center p="50px">
        What has been your experience? Please share any perspective you have on
        this topic
      </Center>
      <ReactCusdis
        attrs={{
          host: "https://cusdis.com",
          appId: "ed5bd525-674c-4548-be96-4cf0a5bbc5bc",
          pageId: "2",
          pageTitle: "WITCHING_HOUR",
          pageUrl: "https://dadtribe.org/witching_hour",
        }}
      />
    </Stack>
  </Center>
);
