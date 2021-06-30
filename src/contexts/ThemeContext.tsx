import { createContext, ReactNode, useCallback } from "react";
import usePersistedState from '../hooks/usePersistedState';
import light from "../styles/themes/light";
import { DefaultTheme } from 'styled-components';
import dark from "../styles/themes/dark";

type ThemeContextType = {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

type ThemeContextProviderProps = {
  children: ReactNode
}

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider(props: ThemeContextProviderProps) {

  const [theme, setTheme] = usePersistedState<DefaultTheme>('@Letmask:theme',light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === "light" ? dark : light)
  }, [theme.title, setTheme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  );
}
