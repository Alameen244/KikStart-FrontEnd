import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const Wrapper = styled(Box)({});

const StyledTypography = styled(Typography)(({ align }) => ({
  whiteSpace: "pre-line",
  textAlign: align === "center" ? "center" : "left",
  fontFamily: "Noto Sans",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "15px",
  color: "#494949",
  letterSpacing:"0%"
}));

const Para = (props) => {
  return (
    <Wrapper>
      <StyledTypography align={props.align}>{props.para}</StyledTypography>
    </Wrapper>
  );
};

export default Para;
