import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      black: string;
      shadow: string;
      purple: string;
      purpleHighlight: string;
      danger: string;
      gmail: string;
      darkGray: string;
      mediumGray: string;
      lightGray: string;
      background: string;
      secondaryBackground: string;
      text: string;
      border: string;
      details: string;
      darkPink: string;
      lightPink: string;
      highlight: string;
      answered: string;
      formBorder: string;
    },
  }
}
