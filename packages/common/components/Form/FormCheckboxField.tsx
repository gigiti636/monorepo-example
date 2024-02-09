import { Box, Checkbox, FormControlLabel } from '@mui/material';
import { useController, Control, FieldValues } from 'react-hook-form';
import type { BoxProps } from '@mui/material/Box';

interface CheckboxFieldProps<K extends keyof FieldValues> extends BoxProps {
  for_name: K;
  with_label: string;
  control: Control<FieldValues[K]>;
  has_error: boolean;
  error_message: string;
}

const CheckboxField = <K extends keyof FieldValues>({
  for_name,
  with_label,
  control,
  has_error,
  error_message,
  ...rest
}: CheckboxFieldProps<K>) => {
  const { field } = useController({
    name: for_name,
    control,
  });

  return (
    <Box marginBottom={0} textAlign={'left'} {...rest} sx={{ width: '300px', mx: 'auto' }}>
      <FormControlLabel
        control={<Checkbox {...field} color="primary" sx={{ px: 2, py: 2 }} checked={!!field?.value} />}
        label={with_label}
        sx={{
          ...(has_error && {
            color: 'error.main',
          }),
        }}
      />
      {has_error && <Box color="error.main">{error_message}</Box>}
    </Box>
  );
};

export default CheckboxField;
