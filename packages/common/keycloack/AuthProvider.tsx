import { FC, ReactNode, useEffect } from "react";
import { useKeycloak } from "@react-keycloak/web";
import { Fallback } from "../components/common-pages";
import { useDispatch } from "react-redux";
import { setKeycloakUser, setNewToken, logout } from "./reducerUser";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import { KeycloakInstance } from "keycloak-js";

type AppProviderProps = {
  children: ReactNode;
  access_token: string;
};

const AuthProvider: FC<AppProviderProps> = ({
  children,
  access_token,
}: AppProviderProps) => {
  const dispatch = useDispatch();

  const { keycloak, initialized } = useKeycloak();
  const { authenticated, token } = keycloak;

  useEffect(() => {
    const loadUserProfile = async () => {
      const resp = await keycloak.loadUserProfile();
      await dispatch(setKeycloakUser({ ...resp, token }));
    };

    if (!authenticated && initialized) {
      keycloak.login();
    } else {
      loadUserProfile();
    }
  }, [authenticated, initialized, keycloak, dispatch, token]);

  keycloak.onAuthRefreshSuccess = () => {
    const newAccessToken = keycloak.token;
    dispatch(setNewToken(newAccessToken));
  };

  keycloak.onAuthRefreshError = () => {
    keycloak.logout();
    dispatch(logout());
  };

  if (!initialized || !token || !authenticated || !access_token)
    return <Fallback />;

  return <>{children}</>;
};

interface KeycloakProviderProps extends AppProviderProps {
  config: KeycloakInstance;
}
export const KeycloakProvider = ({
  children,
  access_token,
  config,
}: KeycloakProviderProps) => {
  return (
    <ReactKeycloakProvider
      authClient={config}
      initOptions={{ onLoad: "login-required" }}
      LoadingComponent={<Fallback />}
    >
      <AuthProvider access_token={access_token}>{children}</AuthProvider>
    </ReactKeycloakProvider>
  );
};
