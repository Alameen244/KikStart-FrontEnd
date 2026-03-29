import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const Wrapper = styled(Box)({});

const StyledTypography = styled(Typography)(({ align }) => ({
  textAlign: align === "center" ? "center" : "left",
  fontFamily: "Noto Sans",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "15px",
  color: "#494949",
  letterSpacing:"0%",
  whiteSpace: "normal",
  wordBreak: "break-word",
  "& p": {
    margin: 0,
  },
  "& p + p": {
    marginTop: "12px",
  },
  "& br": {
    content: "\"\"",
  },
  "& ul, & ol": {
    margin: "12px 0",
    paddingLeft: "20px",
  },
  "& li + li": {
    marginTop: "4px",
  },
  "& a": {
    color: "inherit",
    textDecoration: "underline",
  },
  "& img, & video, & iframe": {
    display: "none",
  },
}));

const Para = (props) => {
  const content = typeof props.para === "string" ? props.para : "";
  const hasHtml = /<[^>]+>/.test(content);

  return (
    <Wrapper>
      <StyledTypography
        align={props.align}
        component="div"
        {...(hasHtml
          ? {
              dangerouslySetInnerHTML: {
                __html: content,
              },
            }
          : {
              children: content,
            })}
      />
    </Wrapper>
  );
};

export default Para;
