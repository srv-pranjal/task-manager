import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import WarningIcon from "@material-ui/icons/Warning";

function WarningBar({ snackIsOpen, setSnackIsOpen }) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackIsOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={snackIsOpen}
      autoHideDuration={2000}
      onClose={handleClose}
      message="Empty Task can't be Added"
      action={
        <>
          <IconButton
            style={{ left: "-60px" }}
            size="small"
            color="inherit"
            onClick={handleClose}
          >
            <WarningIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </>
      }
    />
  );
}

export default WarningBar;
