import { ServerSideTable } from "./ServerSideTable";

export default {
  title: "Components/ServerSideTable",
  component: ServerSideTable,
  parameters: {
    controls: { expanded: true },
  },
};

const Template = ({ theme, ...args }) => {
  return <ServerSideTable {...args} id={"id"} />;
};

export const Default = Template.bind({});
Default.args = {
  cols: [
    {
      field: "firstName",
      headerName: "Firstname",
      type: "string",
      headerAlign: "center",
      align: "left",
      width: 270,
    },
    {
      field: "lastName",
      headerName: "Lastname",
      type: "string",
      headerAlign: "center",
      align: "left",
      width: 270,
    },
    {
      field: "fullname",
      headerName: "fullname",
      type: "string",
      headerAlign: "center",
      align: "left",
      width: 270,
    },
  ],
  rows: [
    { id: 1, firstName: "Name 1", lastName: "LastName1", fullname: "Fullname" },
    { id: 2, firstName: "Name 2", lastName: "LastName2", fullname: "Fullname" },
    { id: 3, firstName: "Name 3", lastName: "LastName3", fullname: "Fullname" },
    { id: 4, firstName: "Name 4", lastName: "LastName4", fullname: "Fullname" },
    { id: 5, firstName: "Name 5", lastName: "LastName5", fullname: "Fullname" },
  ],
  rowCount: 5,
  withRowSelectOptions: true,
  sx: {},
};
