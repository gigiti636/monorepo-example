import type { ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import type { Theme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import "dayjs/locale/el";
import "dayjs/locale/en";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LANGUAGES } from "./multilang/types";

type AppProviderProps = {
  children: ReactNode;
  theme: Theme;
  language: LANGUAGES;
};

const ThemeLocaleProvider = ({
  children,
  theme,
  language = LANGUAGES.ENGLISH,
}: AppProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        adapterLocale={dayjs.locale(language)}
      >
        <CssBaseline />
        {children}
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default ThemeLocaleProvider;
