import React from "react";
import Button from "@mui/material/Button";

const MainButton = (props) => {
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        sx={{
          borderRadius: "50px",
          fontFamily: "Noto Sans",
          fontSize: "16px",
          fontWeight: "light",
          px: "35px",
        }}
      >
        {props.text}
      </Button>
    </div>
  );
};

export default MainButton;
