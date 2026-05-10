import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import RedButton from "../Components/RedButton/RedButton";

const PageWrapper = styled("section")({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  background:
    "linear-gradient(180deg, #FFF8F5 0%, #FFFFFF 45%, #FFFFFF 100%)",
  padding: "60px 0",
});

const CardWrapper = styled(Box)({
  maxWidth: "720px",
  margin: "0 auto",
  textAlign: "center",
  padding: "56px 40px",
  border: "1px solid #F3D8CC",
  borderRadius: "32px",
  background:
    "radial-gradient(circle at top, rgba(237, 28, 36, 0.08), transparent 42%), #FFFFFF",
  boxShadow: "0 20px 60px rgba(43, 43, 43, 0.08)",
  position: "relative",
  overflow: "hidden",
});

const AccentCircle = styled(Box)({
  width: "92px",
  height: "92px",
  borderRadius: "50%",
  margin: "0 auto 24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(180deg, #FFF1F1 0%, #FFE0E0 100%)",
  color: "#ED1C24",
  fontFamily: "PT Sans",
  fontSize: "44px",
  fontWeight: 700,
  boxShadow: "0 14px 32px rgba(237, 28, 36, 0.16)",
});

const Title = styled(Typography)({
  fontFamily: "PT Sans",
  fontSize: "34px",
  fontWeight: 700,
  color: "#2B2B2B",
  marginBottom: "14px",
});

const Description = styled(Typography)({
  fontFamily: "Noto Sans",
  fontSize: "16px",
  lineHeight: "29px",
  color: "#5A5A5A",
  maxWidth: "560px",
  margin: "0 auto 30px",
});

const NoteBox = styled(Box)({
  maxWidth: "500px",
  margin: "0 auto 34px",
  padding: "16px 18px",
  borderRadius: "18px",
  backgroundColor: "#FFF7F7",
  border: "1px solid #F7D9D9",
});

const NoteText = styled(Typography)({
  fontFamily: "Noto Sans",
  fontSize: "14px",
  lineHeight: "24px",
  color: "#6B4B4B",
});

const ButtonRow = styled(Box)({
  display: "flex",
  justifyContent: "center",
  gap: "14px",
  flexWrap: "wrap",
});

const PaymentCancel = () => {
  return (
    <PageWrapper>
      <Container maxWidth="lg">
        <CardWrapper>
          <AccentCircle>!</AccentCircle>

          <Title>Payment Cancelled</Title>
          <Description>
            Your Stripe checkout was cancelled before the payment was completed.
            No worries, your progress is still safe and you can come back to
            continue the subscription anytime.
          </Description>

          <NoteBox>
            <NoteText>
              Your children details are still saved. You only need to choose a
              package and complete the payment step when you are ready.
            </NoteText>
          </NoteBox>

          <ButtonRow>
            <Box component={Link} to="/subs" sx={{ textDecoration: "none" }}>
              <RedButton text="Try Again" color="secondary" px="36px" py="16px" />
            </Box>
            <Box component={Link} to="/" sx={{ textDecoration: "none" }}>
              <RedButton text="Back To Home" color="primary" px="36px" py="16px" />
            </Box>
          </ButtonRow>
        </CardWrapper>
      </Container>
    </PageWrapper>
  );
};

export default PaymentCancel;
