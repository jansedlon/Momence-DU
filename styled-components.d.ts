import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryDark: string;
      secondary: string;
      gray: {
        200: string;
        500: string;
        700: string;
      };
    };
    shadows: {
      md: string;
    };
  }
}
