import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    border: {
      radius: {
        other: string;
        default: string;
      };
    };
    font: {
      family: {
        roboto: string;
      };
      weight: {
        light: number;
        normal: number;
        bold: number;
      };
      sizes: {
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        huge: string;
      };
    };
    colors: {
      primary: string;
      secondary: string;
      lightPink: string;
      pink: string;
      white: string;
      black: string;
    };
  }
}

export const theme = {
  border: {
    radius: {
      other: "0.8rem",
      default: "5px"
    }
  },
  font: {
    family: {
      roboto:
        "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    weight: {
      light: 400,
      normal: 500,
      bold: 700
    },
    sizes: {
      xsmall: "0.6rem",
      small: "0.8rem",
      medium: "1rem",
      large: "1.2rem",
      huge: "1.4rem"
    }
  },
  colors: {
    primary: "#ff6680",
    secondary: "#b34766",
    lightPink: "#ffd9e4",
    pink: "#ffb3c8",
    white: "#ffffff",
    black: "#2e384d"
  }
};
