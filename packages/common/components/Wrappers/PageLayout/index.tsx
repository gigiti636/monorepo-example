import type { BoxProps } from "@mui/material/Box";
import Box from "@mui/material/Box";

type PageLayoutProps = {
  transparent?: boolean;
} & BoxProps;

function Index({ children, transparent = false, ...rest }: PageLayoutProps) {
  return (
    <Box
      m={1}
      position={"relative"}
      component="main"
      boxShadow={transparent ? 0 : 2}
      bgcolor={transparent ? "transparent" : "background.paper"}
      minHeight={"200px"}
      borderRadius={(theme) => theme.shape.borderRadius}
      padding={transparent ? 0 : { xs: 1, md: 2 }}
      boxSizing={"content-box"}
      {...rest}
    >
      {children}
    </Box>
  );
}

export default Index;
