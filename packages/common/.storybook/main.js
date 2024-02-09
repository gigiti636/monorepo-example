import { dirname, join } from "path";

module.exports = {
  stories: ["../ui/components/**/*.stories.jsx"],
  addons: [
    "@storybook/addon-controls",
    "@storybook/addon-themes",
    "@storybook/addon-viewport/register",
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-webpack5"),
  },
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
