import { FC, HTMLAttributes } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import type { CircularProgressProps } from "@mui/material/CircularProgress";
import type { SxProps } from "@mui/material/styles";

interface CircularProgressLoaderProps extends CircularProgressProps {
  size?: number;
  color?: "primary" | "secondary" | "inherit";
  pageCentered?: boolean;
  sx?: SxProps;
}

const Loader: FC<
  CircularProgressLoaderProps & HTMLAttributes<HTMLDivElement>
> = ({ size = 60, color = "primary", pageCentered = false, sx, ...props }) => {
  const loaderStyle = {
    position: pageCentered ? "absolute" : "static",
    top: pageCentered ? `calc(50% - ${size / 2}px)` : "auto",
    left: pageCentered ? `calc(50% - ${size / 2}px)` : "auto",
    transform: pageCentered ? "translate(-50%, -50%)" : "none",
    zIndex: 20,
    display: "block",
  };

  return (
    <CircularProgress
      size={size}
      color={color}
      sx={Object.assign({}, loaderStyle, sx)}
      {...props}
    />
  );
};

export default Loader;
