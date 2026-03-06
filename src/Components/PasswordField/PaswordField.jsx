import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const StyledTextField = styled(TextField)({
  width: "100%",
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#ED1C24",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "15px",
    "& fieldset": {
      borderColor: "#B3B3B3",
    },
    "&:hover fieldset": {
      borderColor: "#B3B3B3",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#B3B3B3",
    },
  },
});

const PaswordField = ({ label }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ width: 500 }}>
      <StyledTextField
        label={label}
        type={showPassword ? "text" : "password"}
        autoComplete="current-password"
        sx={{
          "& .MuiOutlinedInput-root": {
            height: 86,
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  showPassword ? "hide the password" : "display the password"
                }
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default PaswordField;
