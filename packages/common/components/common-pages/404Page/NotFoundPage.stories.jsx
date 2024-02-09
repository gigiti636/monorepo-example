import NotFound from "./index.tsx";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Common-Pages/NotFound",
  component: NotFound,
};

const Template = () => (
  <MemoryRouter initialEntries={["/"]}>
    <NotFound />
  </MemoryRouter>
);

export const Default = Template.bind({});
