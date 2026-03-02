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
import { Link } from "react-router-dom";
const QuickLinks = [
  { label: "About Us", path: "/about" },
  { label: "Programs", path: "/programs" },
  { label: "Contact Us", path: "/contact-us" },
  { label: "Faqs", path: "/faqs" },
].filter(Boolean);
const FooterWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFFAFA",
  padding: theme.breakpoints.up("md") ? "px 0 80px" : undefined,
  margin: "0 auto",
}));

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
  textDecoration: "none",
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

  display: "block",
  textDecoration: "none",
  width: "fit-content",
  transformOrigin: "left center",
  color: "#494949",
  marginTop: "20px",
  transition: "color 0.3s ease, transform 0.3s ease",
  "&:hover": {
    color: "#ED1C24",
    cursor: "pointer",
    transform: "scale(1.05)",
  },
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
const GridWrapper = styled(Grid)({
  alignItems: "flex-start",
  justifyContent: "space-between",
  padding: "103px 0 81px",
});

const LeftGrid = styled(Grid)({
  transform: "translateY(-19px)",
});
const QuickLinksGrid = styled(Grid)({});
const LegalGrid = styled(Grid)({});
const NewsletterGrid = styled(Grid)({
  maxWidth: "256px",
});

const LogoWrapper = styled(Link)({
  display: "inline-block",
  textDecoration: "none",
  lineHeight: 0,
  "&:focus-visible": {
    outline: "2px solid #ED1C24",
    outlineOffset: 4,
  },
});
const Footer = () => {
  return (
    <FooterWrapper component="footer">
      <WaveImage component="img" src={wave} alt="wave" />
      <Container maxWidth="lg" disableGutters>
        <GridWrapper container spacing={0} columns={12}>
          <LeftGrid size={{ lg: 4 }}>
            <LogoWrapper to="/" aria-label="Go to home">
              <Logo component="img" src={kikstart} alt="KikStart home" />
            </LogoWrapper>

            <Description>
              Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at
              interdum eu viverra.
            </Description>

            <EmailRow component={Link} to="mailto:info@KikStartKids.com">
              <Box component="img" src={sms} alt="sms" />
              info@KikStartKids.com
            </EmailRow>
          </LeftGrid>

          <QuickLinksGrid size={{ lg: 2 }}>
            <HeadingText color="dark">Quick Links</HeadingText>
            {QuickLinks.map((link) => (
              <LinkText key={link.label} component={Link} to={link.path}>
                {link.label}
              </LinkText>
            ))}
          </QuickLinksGrid>

          <LegalGrid size={{ lg: 2 }}>
            <HeadingText color="dark">Legal</HeadingText>

            <LinkText>About Us</LinkText>
            <LinkText>Terms and Conditions</LinkText>
            <LinkText>Privacy Policy</LinkText>
          </LegalGrid>

          <NewsletterGrid size={{ lg: 3 }}>
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
