import {
  Box,
  Button,
  Typography,
  Stack,
  Grid,
  Card,
  CardHeader,
  CardContent,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";
import { useState } from "react";

const Template = () => {
  const [size, setSize] = useState("medium");

  const [color, setColor] = useState("text.primary");

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const menuItems = [
    { value: "item1", label: "Item 1" },
    { value: "item2", label: "Item 2" },
    { value: "item3", label: "Item 3" },
  ];

  return (
    <Grid container>
      <Grid xs={6}>
        <Box display={"flex"}>
          <Typography variant={"h4"} sx={{ mr: 1 }}>
            Buttons
          </Typography>
          <select id="sizeSelect" value={size} onChange={handleSizeChange}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </Box>

        <Box my={3}>
          <Box>Primary buttons</Box>

          <Stack direction={"row"} spacing={1}>
            <Button variant={"text"} size={size}>
              text btn
            </Button>
            <Button variant={"contained"} size={size}>
              contained
            </Button>
            <Button variant={"outlined"} size={size}>
              outlined
            </Button>
          </Stack>
        </Box>
        <Box my={3}>
          <Box>Secondary buttons</Box>
          <Stack direction={"row"} spacing={1}>
            <Button variant={"text"} color={"secondary"} size={size}>
              text btn
            </Button>
            <Button variant={"contained"} color={"secondary"} size={size}>
              contained
            </Button>
            <Button variant={"outlined"} color={"secondary"} size={size}>
              outlined
            </Button>
          </Stack>
        </Box>
        <Box my={3}>
          <Box>Success buttons</Box>
          <Stack direction={"row"} spacing={1}>
            <Button variant={"text"} color={"success"} size={size}>
              text btn
            </Button>
            <Button variant={"contained"} color={"success"} size={size}>
              contained
            </Button>
            <Button variant={"outlined"} color={"success"} size={size}>
              outlined
            </Button>
          </Stack>
        </Box>
        <Box my={3}>
          <Box>Info buttons</Box>
          <Stack direction={"row"} spacing={1}>
            <Button variant={"text"} color={"info"} size={size}>
              text btn
            </Button>
            <Button variant={"contained"} color={"info"} size={size}>
              contained
            </Button>
            <Button variant={"outlined"} color={"info"} size={size}>
              outlined
            </Button>
          </Stack>
        </Box>
        <Box my={3}>
          <Box>Warning buttons</Box>
          <Stack direction={"row"} spacing={1}>
            <Button variant={"text"} color={"warning"} size={size}>
              text btn
            </Button>
            <Button variant={"contained"} color={"warning"} size={size}>
              contained
            </Button>
            <Button variant={"outlined"} color={"warning"} size={size}>
              outlined
            </Button>
          </Stack>
        </Box>
        <Box my={3}>
          <Box>Error buttons</Box>
          <Stack direction={"row"} spacing={1}>
            <Button variant={"text"} color={"error"} size={size}>
              text btn
            </Button>
            <Button variant={"contained"} color={"error"} size={size}>
              contained
            </Button>
            <Button variant={"outlined"} color={"error"} size={size}>
              outlined
            </Button>
          </Stack>
        </Box>
      </Grid>
      <Grid xs={6}>
        <Box>
          <Card>
            <CardHeader title="Card Title" />
            <CardContent>Card Content</CardContent>
          </Card>
        </Box>
        <Box my={2}>
          <FormControl variant="outlined" sx={{ width: "200px" }}>
            <InputLabel id="select-label">Select an item</InputLabel>
            <Select labelId="select-label" label="Select an item">
              {menuItems.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box>
          <Box display={"flex"}>
            <Box color={color}>typography default (16px) {color}</Box>
            <select id="sizeSelect" value={color} onChange={handleColorChange}>
              <option value="text.primary">Text Primary</option>
              <option value="text.secondary">Text Secondary</option>
              <option value="text.disabled">Text Disabled</option>
              <option value="primary.light">Primary light</option>
              <option value="primary.main">Primary main</option>
              <option value="primary.dark">Primary dark</option>
              <option value="secondary.light">secondary light </option>
              <option value="secondary.main">secondary main</option>
              <option value="secondary.dark">secondary dark</option>
              <option value="success.light">success light </option>
              <option value="success.main">success main</option>
              <option value="success.dark">success dark</option>
              <option value="info.light">info light</option>
              <option value="info.main">info main</option>
              <option value="info.dark">info dark</option>
              <option value="warning.light">warning light </option>
              <option value="warning.main">warning main</option>
              <option value="warning.dark">warning dark</option>
              <option value="error.light">error light</option>
              <option value="error.main">error main</option>
              <option value="error.dark">error dark</option>
            </select>
          </Box>
          <Typography variant="h1" color={color}>
            H1 - 96px
          </Typography>
          <Typography variant="h2" color={color}>
            H2 (3.75rem / 60px)
          </Typography>
          <Typography color={color} variant="h3">
            Heading 3 (3rem / 48px)
          </Typography>
          <Typography color={color} variant="h4">
            Heading 4 (2.125rem / 34px)
          </Typography>
          <Typography color={color} variant="h5">
            Heading 5 (1.5rem / 24px)
          </Typography>
          <Typography color={color} variant="h6">
            Heading 6 (1.25rem / 20px)
          </Typography>
          <Typography color={color} variant="subtitle1">
            Subtitle 1 (1rem / 16px)
          </Typography>
          <Typography color={color} variant="subtitle2">
            Subtitle 2 (0.875rem / 14px)
          </Typography>
          <Typography color={color} variant="body1">
            Body 1 (1rem / 16px)
          </Typography>
          <Typography color={color} variant="body2">
            Body 2 (0.875rem / 14px)
          </Typography>
          <Typography color={color} variant="button">
            Button (0.875rem / 14px)
          </Typography>
          <Typography color={color} variant="caption">
            Caption (0.75rem / 12px)
          </Typography>
          <Typography color={color} variant="overline">
            Overline (0.75rem / 12px)
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default {
  title: "Theme",
  component: Template,
};

export const Default = Template.bind({});
Default.args = {};
