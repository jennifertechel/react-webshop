import {
  Box,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { products } from "../../data";
import CardHome from "../components/Card";

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
          <Heading>Made with love and stuff</Heading>
        </Box>
      </Box>
      <Box py={6}>
        <Center>
          <Heading>Alla Produkter</Heading>
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
            <GridItem>
              <CardHome key={product.id} product={product} />
            </GridItem>
          ))}
        </Grid>
      </Center>
    </div>
  );
}

export default Home;
