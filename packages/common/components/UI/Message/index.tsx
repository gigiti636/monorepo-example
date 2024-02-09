import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import {
  clearErrorMessage,
  clearSuccessMessage,
} from "../../../providers/multilang/reducerClient";

interface Props {
  message: string;
  type: "error" | "success";
}

const LayoutMessage: React.FC<Props> = ({ message, type }) => {
  const dispatch = useDispatch();

  const open = !!message && message.length > 0;

  const handleClose = useCallback(() => {
    type === "error"
      ? dispatch(clearErrorMessage())
      : dispatch(clearSuccessMessage());
  }, [dispatch, type]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (message.length) {
        type === "error"
          ? dispatch(clearErrorMessage())
          : dispatch(clearSuccessMessage());
      }
    }, 4000);

    return () => {
      if (message.length) clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  if (!message) {
    return null;
  }

  return (
    <Snackbar
      open={open}
      disableWindowBlurListener={true}
      anchorOrigin={{
        horizontal: "center",
        vertical: type === "error" ? "bottom" : "top",
      }}
    >
      <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default LayoutMessage;
