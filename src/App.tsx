import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CartProvider from "./context/cartContext";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#FBF8F1",
    },
  },
  fonts: {
    body: "adamina",
    heading: "adamina",
  },
});

function App() {
  return (
    <CartProvider>
      <ChakraProvider theme={theme}>
        <Box bg='brand.100'>
          <Header />
          <main style={{ paddingTop: "5.8rem" }}>
            <Outlet />
          </main>
          <Footer />
        </Box>
      </ChakraProvider>
    </CartProvider>
  );
}

export default App;
