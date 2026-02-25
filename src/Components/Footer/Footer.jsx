import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import arrowIcon from "../../assets/arrowIcon.png";
import { styled } from "@mui/material/styles";
import kikstart from "../../assets/KIKSTART.png";
import sms from "../../assets/sms.png";
import wave from "../../assets/revwave.png";

const FooterWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFFAFA",
  padding: theme.breakpoints.up("md") ? "px 0 80px" : undefined,
  margin: "0 auto",
}));

const GridWrapper = styled(Grid)({
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: "81px 0",
});
const Logo = styled(Box)({
  display: "block",
});

const Description = styled(Typography)({
  padding: "16px 0 31px",
  maxWidth: "304px",
  fontFamily: "Noto Sans",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: 15,
  color: "#494949",
});

const EmailRow = styled(Typography)({
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: 16,
  /* leading-trim and text-edge are draft CSS properties.

Read: 'more: https://drafts.csswg.org/css-inline-3/#leading-trim',
*/
  leadingTrim: "both",
  textEdge: "cap",

  color: "#494949",
  display: "flex",
  alignItems: "center",
  gap: 8,
});

const LinkText = styled(Typography)({
  fontFamily: "Noto Sans",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: 16,
  /* identical to box height */
  textTransform: "capitalize",

  color: "#494949",
  marginTop: "20px",
});

const HeadingText = styled(Typography)({
  fontFamily: "PT Sans",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: 20,

  /* identical to box height */
  textTransform: "capitalize",

  color: "#2B2B2B",
});
const NewsletterText = styled(Typography)({
  fontFamily: "Noto Sans",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: 16,
  /* identical to box height */
  textTransform: "capitalize",

  color: "#494949",
  margin: "21px  0 12px",
});

export const EmailInputWrapper = styled(Box)({
  position: "relative",
  width: "100%",
  maxWidth: "256px",
});

export const EmailInputField = styled(TextField)({
  width: "100%",

  "& .MuiOutlinedInput-root": {
    height: "60px",
    borderRadius: "15px",
    backgroundColor: "#FFFFFF",

    "& fieldset": {
      borderColor: "transparent", // default
    },

    "&:hover fieldset": {
      borderColor: "transparent", // hover
    },

    "&.Mui-focused fieldset": {
      borderColor: "transparent", // focus (VERY IMPORTANT)
    },
  },

  "& .MuiOutlinedInput-input": {
    paddingLeft: "20px",
    fontSize: "16px",
    fontFamily: "Noto Sans",
    fontWeight: 400,
    fontStyle: "Display Regular",
    leadingTrim: "NONE",
    textTransform: "capitalize",
  },

  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
});

export const EmailSubmitButton = styled(IconButton)({
  position: "absolute",
  top: "50%",
  right: "5px",
  transform: "translateY(-50%)",
  width: "50px",
  height: "50px",
  borderRadius: "15px",
  backgroundColor: "#ED1C24",
  color: "#fff",

  "&:hover": {
    backgroundColor: "#d71920",
  },
});
export const SubmitIcon = styled("img")({
  width: "25px",
  height: "25px",
  objectFit: "contain",
});
const WaveImage = styled(Box)({
  width: "100%",
  top: "0px",
  left: "0px",
});
const LogoGrid = styled(Grid)({});
const QuickLinksGrid = styled(Grid)({});
const LegalGrid = styled(Grid)({
  display: "flex",
  flexDirection: "column",
});
const NewsletterGrid = styled(Grid)({});

const Footer = () => {
  return (
      <FooterWrapper component="footer">
        <WaveImage component="img" src={wave} alt="wave" />
        <Container maxWidth="lg">
          <GridWrapper container spacing={6} columns={13}>
            <LogoGrid size={{ xs: 12, md: 4, lg: 4 }}>
              <Logo component="img" src={kikstart} alt="kikstart logo" />

              <Description>
                Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at
                interdum eu viverra.
              </Description>

              <EmailRow>
                <Box component="img" src={sms} alt="sms" />
                info@KikStartKids.com
              </EmailRow>
            </LogoGrid>

            <QuickLinksGrid size={{ xs: 6, md: 2, lg: 2 }}>
              <HeadingText color="dark">Quick Links</HeadingText>

              <LinkText>About Us</LinkText>
              <LinkText>Programs</LinkText>
              <LinkText>Contact Us</LinkText>
              <LinkText>Faqs</LinkText>
            </QuickLinksGrid>

            <LegalGrid size={{ xs: 6, md: 2, lg: 3 }}>
              <HeadingText color="dark">Legal</HeadingText>

              <LinkText>About Us</LinkText>
              <LinkText>Terms and Conditions</LinkText>
              <LinkText>Privacy Policy</LinkText>
            </LegalGrid>

            <NewsletterGrid size={{ xs: 12, md: 3, lg: 4 }}>
              <HeadingText>Newsletter</HeadingText>

              <NewsletterText color="semiDark">
                Enter the email to subscribe our newsletter
              </NewsletterText>
              <EmailInputWrapper>
                <EmailInputField placeholder="Enter Email" variant="outlined" />
                <EmailSubmitButton>
                  <SubmitIcon src={arrowIcon} alt="submit" />
                </EmailSubmitButton>
              </EmailInputWrapper>
            </NewsletterGrid>
          </GridWrapper>
        </Container>
      </FooterWrapper>
  );
};

export default Footer;
