import { Box, Center, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { products } from "../../data";
import OverviewCard from "../components/OverviewCard";

function Home() {
  return (
    <div>
      <Box pos='relative'>
        <Image src='/public/hero-md.svg' />
        <Box
          position='absolute'
          top='50%'
          left='25%'
          transform='translate(-50%, -25%)'
        >
          <Text>Handmade ceramic vases</Text>
          <Heading>
            Some fun slogan
            <br />
            not involving groovy
          </Heading>
        </Box>
      </Box>
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
