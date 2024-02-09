import "./404style.css";
import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className="container">
        <div className="gif">
          <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif_ing" />
        </div>
        <div className="content">
          <h1 className="main-heading">This page is gone.</h1>
          <p>
            ...maybe the page you are looking for is not found or never existed.
          </p>
          <Button component={Link} to="/" color="primary">
            back to Home
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default NotFound;
