import { useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";
import { Link, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import RedButton from "../Components/RedButton/RedButton";
import { useAuth } from "../Context/AuthContext";
import { confirmCheckoutSession } from "../Apis/subscriptionApi";

const PageShell = styled("section")({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  background:
    "radial-gradient(circle at top, rgba(34,197,94,0.18), transparent 32%), linear-gradient(180deg, #F7FFF9 0%, #FFFFFF 65%)",
});

const HeroCard = styled(Box)({
  maxWidth: "760px",
  margin: "0 auto",
  background: "#FFFFFF",
  borderRadius: "36px",
  padding: "56px 48px",
  boxShadow: "0 28px 80px rgba(22, 101, 52, 0.12)",
  border: "1px solid rgba(34, 197, 94, 0.18)",
  textAlign: "center",
});

const Badge = styled(Box)({
  width: "94px",
  height: "94px",
  borderRadius: "50%",
  margin: "0 auto 22px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#166534",
  background:
    "radial-gradient(circle at 30% 30%, #FFFFFF 0%, #DCFCE7 38%, #BBF7D0 100%)",
  boxShadow: "0 18px 36px rgba(34, 197, 94, 0.2)",
  fontSize: "42px",
  fontWeight: 700,
});

const Title = styled(Typography)({
  fontFamily: "PT Sans",
  fontSize: "40px",
  fontWeight: 700,
  color: "#16311D",
  marginBottom: "12px",
});

const Description = styled(Typography)({
  fontFamily: "Noto Sans",
  fontSize: "16px",
  lineHeight: "28px",
  color: "#4B5563",
  maxWidth: "540px",
  margin: "0 auto",
});

const ChipRow = styled(Box)({
  marginTop: "26px",
  display: "flex",
  justifyContent: "center",
  gap: "12px",
  flexWrap: "wrap",
});

const ActionRow = styled(Box)({
  marginTop: "34px",
  display: "flex",
  justifyContent: "center",
  gap: "14px",
  flexWrap: "wrap",
});

const PaymentSuccess = () => {
  const { refreshAuth } = useAuth();
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    const syncSubscription = async () => {
      if (!sessionId) {
        await refreshAuth();
        return;
      }

      try {
        await confirmCheckoutSession({ sessionId });
      } catch (error) {
        const message = error?.response?.data?.message;

        if (message && !message.toLowerCase().includes("already")) {
          toast.error(message);
        }
      } finally {
        await refreshAuth();
      }
    };

    syncSubscription();
  }, [refreshAuth, sessionId]);

  return (
    <PageShell>
      <Container maxWidth="lg">
        <HeroCard>
          <Badge>✓</Badge>
          <Title>Payment Completed</Title>
          <Description>
            Your Stripe checkout finished successfully. Your subscription is now
            being reflected in your account, and your child enrolment flow is complete.
          </Description>

          <ChipRow>
            <Chip
              label="Stripe payment successful"
              sx={{ backgroundColor: "#DCFCE7", color: "#166534", fontWeight: 700 }}
            />
            {sessionId && (
              <Chip
                label={`Session: ${sessionId.slice(0, 18)}...`}
                sx={{ backgroundColor: "#F3F4F6", color: "#374151", fontWeight: 600 }}
              />
            )}
          </ChipRow>

          <ActionRow>
            <RedButton
              text="Go To Home"
              color="secondary"
              px="36px"
              py="16px"
              onClick={() => {
                window.location.href = "/";
              }}
            />
            <Box component={Link} to="/subs" sx={{ textDecoration: "none" }}>
              <RedButton text="View Plans" color="primary" px="36px" py="16px" />
            </Box>
          </ActionRow>
        </HeroCard>
      </Container>
    </PageShell>
  );
};

export default PaymentSuccess;
