import Fallback from "./index.tsx";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Common-Pages/Fallback",
  component: Fallback,
};

const Template = () => (
  <MemoryRouter initialEntries={["/"]}>
    <Fallback />
  </MemoryRouter>
);

export const Default = Template.bind({});
