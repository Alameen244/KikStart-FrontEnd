import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Para = (props) => {
  return (
    <Box>
      <Typography
        variant="body1"
        textAlign={props.align === "center" ? "center" : "left"}
        sx={{}}
      >
        {props.para}
      </Typography>
    </Box>
  );
};

export default Para;
