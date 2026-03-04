import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

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

const OneLineField = ({
  height = 86,
  width = 500,
  type = "text",
  Label = "Label",
}) => {
  const autoCompleteValue =
    type === "password" ? "current-password" : undefined;

  return (
    <Box sx={{ width }}>
      <StyledTextField
        label={Label}
        type={type}
        autoComplete={autoCompleteValue}
        sx={{
          "& .MuiOutlinedInput-root": {
            height,
          },
        }}
      />
    </Box>
  );
};

export default OneLineField;
