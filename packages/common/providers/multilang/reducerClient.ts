import { createSlice } from "@reduxjs/toolkit";
import { ClientType, LANGUAGES } from "./types";
import { serializeState } from "../../utils/helper/string";
import i18n from "i18next";

const clientStorage = "clientStore";

const ClientState: ClientType = {
  error_message: "",
  success_message: "",
  mode: "",
  loading: false,
  language:
    i18n.language && i18n.language.includes(LANGUAGES.GREEK)
      ? LANGUAGES.GREEK
      : LANGUAGES.ENGLISH,
};

const currentState = localStorage.getItem(clientStorage);
const initialState: ClientType = currentState
  ? JSON.parse(currentState)
  : ClientState;

const clientSlice = createSlice({
  name: clientStorage,
  initialState,
  reducers: {
    setErrorMessage: (state, action) => {
      state.error_message = action.payload;
      serializeState(state, clientStorage);
    },
    clearErrorMessage: (state) => {
      state.error_message = "";
      serializeState(state, clientStorage);
    },
    setSuccessMessage: (state, action) => {
      state.success_message = action.payload;
      serializeState(state, clientStorage);
    },
    clearSuccessMessage: (state) => {
      state.success_message = "";
      serializeState(state, clientStorage);
    },
    setMode: (state, action) => {
      state.mode = action.payload;
      serializeState(state, clientStorage);
    },
    setLoader: (state, action) => {
      state.loading = action.payload;
      serializeState(state, clientStorage);
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
      serializeState(state, clientStorage);
    },
  },
});

const { reducer, actions } = clientSlice;

export const {
  setErrorMessage,
  clearErrorMessage,
  setSuccessMessage,
  clearSuccessMessage,
  setLoader,
  setMode,
  setLanguage,
} = actions;
export default reducer;
