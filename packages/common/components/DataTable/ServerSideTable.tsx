import type { GridSortModel } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";
import type { OrderDetails, UpDataGridProps } from "./types";
import { rowsPerPageOptions } from "./types";
import { useState } from "react";

export function ServerSideTable<T>({
  cols,
  rows,
  rowCount,
  id,
  withRowSelectOptions = true,
  sx,
  onServerSideParamsChange,
  ...rest
}: UpDataGridProps<T>) {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState<rowsPerPageOptions>(
    rowsPerPageOptions.option_1
  );
  const [orderDetails, setOrderDetails] = useState<OrderDetails>({
    column: "",
    type: "",
  });

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    onServerSideParamsChange(newPage, pageSize, orderDetails);
  };

  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize);
    onServerSideParamsChange(page, newPageSize, orderDetails);
  };

  const handleSortModelChange = (sortModel: GridSortModel) => {
    let sort_model: OrderDetails;

    if (sortModel.length === 0) {
      sort_model = {
        column: "",
        type: "",
      };
    } else {
      const { field, sort } = sortModel[0];
      sort_model = {
        column: field,
        type: sort ?? "",
      };
      setOrderDetails(sort_model);
    }
    onServerSideParamsChange(page, pageSize, sort_model);
  };

  let options;
  if (withRowSelectOptions) {
    options = [
      rowsPerPageOptions.option_1,
      rowsPerPageOptions.option_2,
      rowsPerPageOptions.option_3,
    ];
  } else {
    options = [rowsPerPageOptions.option_1];
  }

  return (
    <DataGrid
      density={"comfortable"}
      autoHeight={true}
      headerHeight={36}
      showCellRightBorder={true}
      showColumnRightBorder={true}
      sx={{
        /* borderRadius: "0px 0px 25px 25px",*/
        background: (theme) => `${theme.palette.background.paper}`,

        "& .MuiDataGrid-columnHeaders": {
          borderBottom: (theme) => `1px solid ${theme.palette.text.secondary}`,
          borderTop: (theme) => `1px solid ${theme.palette.text.secondary}`,
          /*     borderRadius: "0px",*/
        },

        "& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-cell:focus": {
          outline: "none !important",
        },
        "& .MuiDataGrid-columnHeader:focus-within, & .MuiDataGrid-columnHeader:focus":
          {
            outline: "none !important",
          },
        ...sx,
      }}
      rows={rows}
      rowCount={rowCount}
      columns={cols}
      getRowId={(row) => row[id]}
      disableColumnSelector={true}
      disableColumnFilter={true}
      sortingMode="server"
      paginationMode="server"
      disableSelectionOnClick={true}
      pageSize={pageSize}
      onPageSizeChange={handlePageSizeChange}
      onSortModelChange={handleSortModelChange}
      page={page}
      onPageChange={handlePageChange}
      rowsPerPageOptions={options}
      {...rest}
    />
  );
}
