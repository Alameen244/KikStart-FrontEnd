import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const Wrapper = styled(Box)(({ align }) => ({
  textAlign: align === "center" ? "center" : "left",
}));

const SubHeadingText = styled(Typography)({
  fontFamily: "Noto Sans",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: 14,
  /* identical to box height */
  letterSpacing: "0.1em",
});

const HeadingText = styled(Typography)({
  fontFamily: "PT Sans",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: 56,
  textTransform: "capitalize",
});

const Headings = (props) => {
  return (
    <Wrapper align={props.align}>
      <SubHeadingText color="myRed">{props.subHeading}</SubHeadingText>

      <HeadingText color="dark">{props.heading}</HeadingText>
    </Wrapper>
  );
};

export default Headings;
