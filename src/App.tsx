import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/global";
import { theme } from "./styles/theme";
import Home from "./pages/Home";
import ProductsProvider from "./states/ProductsProvider";

const App = () => {
  return (
    <ProductsProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Home />
      </ThemeProvider>
    </ProductsProvider>
  );
};

export default App;
