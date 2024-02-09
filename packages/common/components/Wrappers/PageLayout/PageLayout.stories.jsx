import Index from "./index.js";

export default {
  title: "Wrappers/PageLayout",
  component: Index,
};

const Template = ({ theme, ...args }) => {
  return (
    <Index transparent={true}>
      This is basic Page Layout which wraps every page
    </Index>
  );
};

export const Default = Template.bind({});
