import Head from "next/head";
import {
  Heading,
  Link,
  Text,
  Code,
  Flex,
  Box,
  Stack,
  Grid
} from "@chakra-ui/core";
// components
import data from "./data";

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJS Indonesia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex as="main" alignItems="center" justifyContent="center" mt="10">
        <Stack>
          <Box textAlign="center">
            <Heading as="h1" size="2xl" mb="2">
              Selamat datang{" "}
              <Link
                color="teal.500"
                href="https://nextjs.id"
                _hover={{ textDecoration: "none" }}
              >
                Next.js Indonesia
              </Link>
            </Heading>

            <Text fontSize="xl" mt="2">
              Halaman ini sedang dalam pengembangan{" ,"}
              <Code>pages/index.js</Code>
              temukan
            </Text>
          </Box>
          <Grid
            templateColumns={{
              lg: "repeat(3, 1fr)",
              md: "repeat(2, 1fr)",
              sm: "repeat(1, 1fr)"
            }}
            gap={5}
            maxWidth="86em"
            ml="auto"
            mr="auto"
          >
            {data.map(d => (
              <Box
                key={d.id}
                as="a"
                target="_blank"
                rel="noopener noreferrer"
                href={d.path}
                borderWidth="1px"
                rounded="lg"
                padding="6"
                margin="4"
              >
                <Heading as="h3" size="xl" mb="2" color="teal.500">
                  {d.heading} &rarr;
                </Heading>
                <Text fontSize="lg">{d.body}</Text>
              </Box>
            ))}
          </Grid>

          <Box as="footer">
            <Text textAlign="center">Next JS ID</Text>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
