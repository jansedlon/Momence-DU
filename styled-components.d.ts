import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      gray: {
        500: string;
        700: string;
      };
    };
    shadows: {
      md: string;
    };
  }
}
