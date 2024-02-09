export enum LANGUAGES {
  // eslint-disable-next-line no-unused-vars
  ENGLISH = 'en',
  // eslint-disable-next-line no-unused-vars
  GREEK = 'el',
}

export type ClientType = {
  error_message: string;
  success_message: string;
  loading: boolean;
  mode: 'light' | 'dark' | '';
  language: LANGUAGES;
};