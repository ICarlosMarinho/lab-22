import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/global";
import { theme } from "./styles/theme";
import ProductsProvider from "./states/ProductsProvider";
import Home from "./pages/home";

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
