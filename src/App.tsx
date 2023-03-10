import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const theme = extendTheme({});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <header></header>
        <main>
          <Outlet />
        </main>
        <footer></footer>
      </div>
    </ChakraProvider>
  );
}

export default App;
