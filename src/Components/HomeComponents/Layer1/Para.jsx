import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Para = (props) => {
  return (
    <Box>
      <Typography
        variant="body1"
        textAlign={props.align === "center" ? "center" : "left"}
        sx={{
          marginTop: "20px",
          whiteSpace: "pre-line",
          lineHeight:"26px"
        }}
      >
        {props.para}
      </Typography>
    </Box>
  );
};

export default Para;
