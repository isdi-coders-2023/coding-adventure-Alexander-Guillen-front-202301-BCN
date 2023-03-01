import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      terciary: string;
      inputs: string;
      black: string;
    };
    fontFamilies: {
      primary: string;
      secondary: string;
    };
  }
}
