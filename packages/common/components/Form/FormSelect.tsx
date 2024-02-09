import { Box, MenuItem, TextField } from "@mui/material";
import { useController, Control, FieldValues } from "react-hook-form";
import type { BoxProps } from "@mui/material/Box";

interface FormSelectProps<K extends keyof FieldValues> extends BoxProps {
  for_name: K;
  with_label: string;
  with_helper_text?: string;
  control: Control<FieldValues[K]>;
  has_error: boolean;
  error_message: string;
  options: { value: string; label: string }[];
  withValueTitle?: boolean;
}

const FormSelect = <K extends keyof FieldValues>({
  for_name,
  with_label,
  with_helper_text = "",
  control,
  has_error,
  error_message,
  options,
  withValueTitle = false,
  ...rest
}: FormSelectProps<K>) => {
  const { field } = useController({
    name: for_name,
    control,
  });

  return (
    <Box marginBottom={2} mx={"auto"} {...rest} sx={{ width: "300px" }}>
      <TextField
        select
        fullWidth
        size="small"
        label={with_label}
        variant="outlined"
        {...field}
        error={has_error}
        helperText={has_error ? error_message : with_helper_text}
        FormHelperTextProps={{
          style: { padding: 0, fontSize: "small" },
        }}
      >
        {options.map((status) => (
          <MenuItem
            key={status.value}
            value={status.value}
            title={withValueTitle ? status.value : ""}
          >
            {status.label}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

export default FormSelect;
