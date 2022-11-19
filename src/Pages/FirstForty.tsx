import { Box, Link, Center, Stack, Text } from "@chakra-ui/react";
import { ReactCusdis } from "react-cusdis";

export const FirstForty = () => (
  <Center>
    <Stack width={["95%", "70%"]}>
      <Box>
        <Text>
          The first forty days after birth are also known as the 4th trimester.
          Dad's number one responsibility is to get mom back health again.
          Nourishing food and lots of love are the keys here, sleeping when baby
          sleeps is key for both parents.
        </Text>
        <Box pt={15}>
          <Link href="https://www.amazon.com/First-Forty-Days-Essential-Nourishing/dp/1617691836/ref=asc_df_1617691836/?tag=hyprod-20&linkCode=df0&hvadid=312154663427&hvpos=&hvnetw=g&hvrand=11522246540751072858&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1013651&hvtargid=pla-449470152699&psc=1">
            Highly recommended reading{" "}
          </Link>
        </Box>
        s
      </Box>

      <Center p="50px">
        What has been your experience? Please share any perspective you have on
        this topic
      </Center>
      <ReactCusdis
        attrs={{
          host: "https://cusdis.com",
          appId: "ed5bd525-674c-4548-be96-4cf0a5bbc5bc",
          pageId: "4",
          pageTitle: "FIRST_FORTY",
          pageUrl: "https://dadtribe.org/first_forty",
        }}
      />
    </Stack>
  </Center>
);
