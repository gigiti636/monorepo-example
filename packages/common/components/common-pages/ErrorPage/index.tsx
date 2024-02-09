import "./error_page.css";
import { Box, Button } from "@mui/material";

const ErrorPage = () => {
  return (
    <>
      <Box textAlign={"center"} fontSize={"large"}>
        Oops..
        <br />
        something went wrong
      </Box>
      <Box className="container">
        <div className="bg">
          <div className="light"></div>
        </div>
        <div className="ufo">
          <div className="ufo-bottom"></div>
          <div className="ufo-top"></div>
          <div className="ufo-glass">
            <div className="alien">
              <div className="alien-eye"></div>
            </div>
          </div>
        </div>
        <div className="bed">
          <div className="mattress"></div>
        </div>
        <div className="man">
          <div className="foot"></div>
          <div className="head">
            <div className="face"></div>
            <div className="hair"></div>
          </div>
          <div className="man-body"></div>
          <div className="arm"></div>
        </div>
      </Box>
      <Box textAlign={"center"}>
        <Button
          sx={{ mt: 3 }}
          onClick={() => window.location.assign(window.location.origin)}
          variant={"contained"}
        >
          Refresh Page
        </Button>
      </Box>
    </>
  );
};

export default ErrorPage;
