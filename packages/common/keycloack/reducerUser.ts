import { createSlice } from "@reduxjs/toolkit";
import type { KeycloakProfile } from "keycloak-js";

export const userStorage = "userStore";

export type UserType = {
  access_token: string;
  firstname: string;
  lastname: string;
  email: string;
  id: string;
};

const UserState: UserType = {
  access_token: "",
  firstname: "",
  lastname: "",
  email: "",
  id: "",
};

const currentState = localStorage.getItem(userStorage);
const initialState: UserType = currentState
  ? JSON.parse(currentState)
  : UserState;

const userSlice = createSlice({
  name: userStorage,
  initialState,
  reducers: {
    logout: () => {
      return UserState;
    },
    setKeycloakUser: (state, action) => {
      const { firstName, lastName, email, id, token } =
        action.payload as KeycloakProfile & {
          token: string;
        };
      state.firstname = firstName ?? "Unknown";
      state.lastname = lastName ?? "Unknown";
      state.email = email ?? "Unknown";
      state.id = id ?? "Unknown";
      state.access_token = token ?? "Unknown";
    },
    setNewToken: (state, action) => {
      state.access_token = action.payload as string;
    },
  },
});

export const { logout, setKeycloakUser, setNewToken } = userSlice.actions;
const { reducer } = userSlice;

export default reducer;
