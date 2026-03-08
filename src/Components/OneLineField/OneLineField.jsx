import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const StyledTextField = styled(TextField)({
  width: "100%",

  "& .MuiInputLabel-root": {
    /* Email */

    fontFamily: "Noto Sans",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 14,
    /* identical to box height */
    textTransform: "capitalize",

    color: "#B3B3B3",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    fontFamily: "Noto Sans",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 14,
    /* identical to box height */
    textTransform: "capitalize",
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

const OneLineField = ({
  height = 86,
  width = 500,
  type = "text",
  label = "label",
  onChange,
  name,
  value,
  required,
  ...otherProps
}) => {
  const autoCompleteValue =
    type === "password" ? "current-password" : undefined;

  return (
    <Box sx={{ width }}>
      <StyledTextField
        label={label}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoCompleteValue}
        sx={{
          "& .MuiOutlinedInput-root": {
            height,
          },
        }}
        {...otherProps}
      />
    </Box>
  );
};

export default OneLineField;
