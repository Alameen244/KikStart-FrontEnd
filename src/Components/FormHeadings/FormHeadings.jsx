import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const TextWrapper = styled(Box)(({ align }) => ({
    textAlign: align === "center" ? "center" : "left",
  "& .heading": {
    /* Forgot password? */

    fontFamily: "PT Sans",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 26,

    /* identical to box height */
    textTransform: "capitalize",

    color: "#2B2B2B",
  },
  "& .subheading": {
    /* Please enter your email to reset your password */

    fontFamily: "Noto Sans",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 15,

    /* identical to box height, or 173% */


      color: "#494949",
    paddingBottom:"6px"
  },
}));
const FormHeadings = ({ heading, subHeading , align}) => {
  return (
    <TextWrapper align={align}>
      <Typography className="heading" variant="h1" >
        {heading}
      </Typography>
      <Typography className="subheading" variant="h2" >
        {subHeading}
      </Typography>
    </TextWrapper>
  );
};

export default FormHeadings;
