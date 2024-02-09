import Drawer from "./index";
import { useState } from "react";
import { Box, Button } from "@mui/material";

export default {
  title: "Wrappers/Drawer",
  component: Drawer,
  argTypes: {
    anchor: {
      control: {
        type: "select",
        options: ["left", "right"],
      },
    },
  },
};

const Template = ({ theme, anchor, ...args }) => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <Box height={"70vh"}>
      <Box>
        <Button onClick={() => setShowDrawer(true)}>Show Drawer</Button>
      </Box>

      <Drawer
        anchor={anchor}
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
        closeDrawer={() => setShowDrawer(false)}
      >
        Drawer Component can be docked from right or left
      </Drawer>
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  anchor: "left",
};
