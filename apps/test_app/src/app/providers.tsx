import type { FC, ReactNode } from "react";
import type { KeycloakConfig } from "keycloak-js";
import { ErrorBoundary } from "react-error-boundary";
import { useDispatch, useSelector } from "react-redux";

import { Provider } from "react-redux";
import { store } from "./store";
import type { RootState, AppDispatch } from "./store";

import { ErrorPage } from "common_lib/components/common";
import ThemeLocaleProvider from "common_lib/providers/ThemeLocaleProvider";
import MessageProvider from "common_lib/providers/MessageProvider";
import { KeycloakProvider } from "common_lib/keycloack/AuthProvider";
import i18n from "@/i18/i18next";

import { I18nextProvider } from "react-i18next";
import { useMediaQuery } from "@mui/material";
import { useEffect, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { elGR, enUS } from "@mui/material/locale";

import { themeDark, themeLight } from "common_lib/themes/back_office_theme";

import { LANGUAGES } from "common_lib/providers/multilang/types";
import {
  setMode,
  setLanguage,
} from "common_lib/providers/multilang/reducerClient";
import Keycloak from "keycloak-js";

type AppProviderProps = {
  children: ReactNode;
};

const keycloakConfig: KeycloakConfig = {
  url: import.meta.env.VITE_APP_KEYCLOAK_SERVER ?? "empty",
  realm: import.meta.env.VITE_APP_KEYCLOAK_REALM ?? "empty",
  clientId: import.meta.env.VITE_APP_KEYCLOAK_CLIENT_ID ?? "empty",
};

const keycloak = new Keycloak(keycloakConfig);

const BaseProvider: FC<AppProviderProps> = ({ children }) => {
  const { access_token } = useSelector((state: RootState) => state.user);
  const { error_message, success_message, loading } = useSelector(
    (state: RootState) => state.client
  );

  const dispatch = useDispatch<AppDispatch>();

  const { mode, language } = useSelector((state: RootState) => state.client);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const themeWithLocale = useMemo(
    () =>
      createTheme(
        mode === "dark" ? themeDark : themeLight,
        language === LANGUAGES.GREEK ? elGR : enUS
      ),
    [mode, language]
  );

  useEffect(() => {
    if (!mode) {
      dispatch(setMode(prefersDarkMode ? "dark" : "light"));
    }

    dispatch(
      setLanguage(
        i18n.language && i18n.language.includes(LANGUAGES.GREEK)
          ? LANGUAGES.GREEK
          : LANGUAGES.ENGLISH
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <ThemeLocaleProvider theme={themeWithLocale} language={language}>
            <KeycloakProvider config={keycloak} access_token={access_token}>
              <MessageProvider
                error_message={error_message}
                success_message={success_message}
                loading={loading}
              >
                {children}
              </MessageProvider>
            </KeycloakProvider>
          </ThemeLocaleProvider>
        </Provider>
      </I18nextProvider>
    </ErrorBoundary>
  );
};

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <BaseProvider>{children}</BaseProvider>
    </Provider>
  );
};

export default AppProvider;
