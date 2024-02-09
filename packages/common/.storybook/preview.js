import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import "../ui/themes/index.css";

import { createTheme } from "@mui/material/styles";
import {
  themeDark as backoffice_dark,
  themeLight as backoffice_light,
} from "../ui/themes/back_office_theme.ts";
import { enUS } from "@mui/material/locale";
import {
  themeDark as expense_dark,
  themeLight as expense_light,
} from "../ui/themes/expense_app_theme.ts";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { PageLayout } from "../ui/components/Wrappers/index.ts";

const themes = {
  lightBackoffice: createTheme(backoffice_light, enUS),
  darkBackoffice: createTheme(backoffice_dark, enUS),
  lightExpense: createTheme(expense_light, enUS),
  darkExpense: createTheme(expense_dark, enUS),
};

const themeOptions = Object.keys(themes);

const withLocalization = (storyFn) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {storyFn()}
    </LocalizationProvider>
  );
};

const withPageLayout = (storyFn, context) => {
  const { kind } = context;

  if (
    kind &&
    (kind.toLowerCase().includes("common-pages") ||
      kind.toLowerCase().includes("navigation"))
  ) {
    return storyFn(context);
  }

  return <PageLayout>{storyFn(context)}</PageLayout>;
};

export const decorators = [
  withLocalization,
  withPageLayout,
  withThemeFromJSXProvider({
    themes: themes,
    defaultTheme: themeOptions[0],
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];
