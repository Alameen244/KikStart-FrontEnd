import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Headings = (props) => {
  return (
    <Box textAlign={props.align === "center" ? "center" : "left"}>
      <Typography variant="h3" color="myRed" sx={{}}>
        {props.subHeading}{" "}
      </Typography>
      <Typography variant="h2" color="dark" sx={{}}>
        {props.heading}
      </Typography>
    </Box>
  );
};

export default Headings;
