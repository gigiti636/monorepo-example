import ErrorPage from "./index.tsx";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Common-Pages/ErrorPage",
  component: ErrorPage,
};

const Template = () => (
  <MemoryRouter initialEntries={["/"]}>
    <ErrorPage />
  </MemoryRouter>
);

export const Default = Template.bind({});
