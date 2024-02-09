import { Typography } from "@mui/material";
import type { TypographyProps } from "@mui/material";
import type { SxProps } from "@mui/material/styles";

interface FormSectionLabel extends TypographyProps {
  label: string;
  sx?: SxProps;
}

const FormSectionLabel = ({ label, sx }: FormSectionLabel) => {
  return (
    <Typography
      textAlign={"center"}
      sx={{ ml: 1, mb: 1, ...sx }}
      color={"text.secondary"}
    >
      {label}:
    </Typography>
  );
};

export default FormSectionLabel;
