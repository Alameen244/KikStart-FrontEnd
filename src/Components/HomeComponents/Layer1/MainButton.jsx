import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const MainButton = (props) => {
  return (
    <Box>
      <Button
        variant="contained"
        color="secondary"
        sx={{
          borderRadius: "50px",
          fontFamily: "Noto Sans",
          fontSize: "16px",
          fontWeight: "light",
          px: "35px",
          py:"20PX"
        }}
      >
        {props.text}
      </Button>
    </Box>
  );
};

export default MainButton;
