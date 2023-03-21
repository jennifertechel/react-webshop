import {
  Box,
  Center,
  Grid,
  Heading,
  Image,
  Text,
  Flex,
} from "@chakra-ui/react";
import { products } from "../../data";
import OverviewCard from "../components/OverviewCard";

function Home() {
  return (
    <div>
      <Flex
        w='full'
        h='65vh'
        bgImage='linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0.3)), url(/public/hero-md.svg)'
        bgSize='cover'
        bgPos={{ base: "left", md: "center" }}
        flexDir='column'
        justifyContent='center'
        alignItems={{ base: "center", md: "flex-start" }}
      >
        <Box pl={{ base: 0, md: "18rem" }}>
          <Text>Handmade ceramic vases</Text>
          <Heading>
            Some fun slogan
            <br /> and stay groovy
          </Heading>
        </Box>
      </Flex>

      <Box py={6}>
        <Center>
          <Text fontSize='2xl'>NYHETER</Text>
        </Center>
      </Box>
      <Center>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          columnGap={24}
          rowGap={8}
          py={8}
        >
          {products.map((product) => (
            <OverviewCard
              data-cy='product'
              key={product.id}
              product={product}
            />
          ))}
        </Grid>
      </Center>
    </div>
  );
}

export default Home;
