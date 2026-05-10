import { useMemo, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SubscriptionCard from "../SubscriptionCard/SubscriptionCard";
import { createCheckoutSession } from "../../Apis/subscriptionApi";
import { useAuth } from "../../Context/AuthContext";

const SectionWrapper = styled("section")({
  background:
    "linear-gradient(180deg, #FFF7F4 0%, #FFFFFF 18%, #FFFFFF 100%)",
});

const HeaderWrapper = styled(Box)({
  paddingTop: "80px",
  paddingBottom: "72px",
});

const HeadingText = styled(Typography)({
  fontFamily: "PT Sans",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: 26,
  lineHeight: "34px",
  textTransform: "capitalize",
  color: "#2B2B2B",
  textAlign: "center",
  paddingBottom: "10px",
});

const SubHeadingText = styled(Typography)({
  textAlign: "center",
  fontFamily: "Noto Sans",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: 15,
  lineHeight: "26px",
  color: "#494949",
  maxWidth: "620px",
  margin: "0 auto",
});

const InfoBar = styled(Box)({
  display: "flex",
  justifyContent: "center",
  gap: "12px",
  flexWrap: "wrap",
  marginTop: "24px",
});

const InfoChip = styled(Chip)({
  fontFamily: "Noto Sans",
  fontWeight: 600,
  paddingInline: "10px",
});

const CardGrid = styled(Grid)({
  padding: "0 0 90px",
});

const CardColumn = styled(Grid)({
  display: "flex",
  justifyContent: "center",

});

const plans = [
  {
    level: "BASIC",
    plan: "basic",
    desc: "Lorem ipsum dolor sit amet consectetur. Pharetra et ac vitae.",
    price: "$19",
    duration: "Per Month",
    features: [
      "Lorem ipsum dolor sit",
      "Consectetur adipiscing elit",
      "In vehicula quam vitae justo",
      "Nam interdum lectus",
      "Lorem ipsum dolor sit",
      "Consectetur adipiscing elit",
    ],
  },
  {
    level: "PROFESSIONAL",
    plan: "professional",
    desc: "Lorem ipsum dolor sit amet consectetur. Pharetra et ac vitae.",
    price: "$49",
    duration: "Per Month",
    features: [
      "Lorem ipsum dolor sit",
      "Consectetur adipiscing elit",
      "In vehicula quam vitae justo",
      "Nam interdum lectus",
      "Lorem ipsum dolor sit",
      "Consectetur adipiscing elit",
    ],
  },
  {
    level: "ADVANCED",
    plan: "advanced",
    desc: "Lorem ipsum dolor sit amet consectetur. Pharetra et ac vitae.",
    price: "$99",
    duration: "Per Month",
    features: [
      "Lorem ipsum dolor sit",
      "Consectetur adipiscing elit",
      "In vehicula quam vitae justo",
      "Nam interdum lectus",
      "Lorem ipsum dolor sit",
      "Consectetur adipiscing elit",
    ],
  },
];

const SubscriptionComponent = () => {
  const [loadingPlan, setLoadingPlan] = useState("");
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const activePlan = user?.subscription?.status === "active"
    ? user?.subscription?.plan
    : null;

  const childCreated = location.state?.childCreated;

  const headerText = useMemo(() => {
    if (childCreated) {
      return {
        title: "Child Saved Successfully",
        subtitle:
          "Now choose a monthly package to complete the enrolment flow and continue to Stripe checkout.",
      };
    }

    return {
      title: "Program Enrolment Package",
      subtitle:
        "Choose the subscription that fits your family best and continue securely with Stripe payment.",
    };
  }, [childCreated]);

  const handleSubscribe = async (plan) => {
    if (!user?.id) {
      toast.error("Please login first.");
      navigate("/login", { state: { from: "/subs" } });
      return;
    }

    setLoadingPlan(plan);

    try {
      const checkoutPromise = createCheckoutSession({
        plan,
        clientUrl: window.location.origin,
      });

      const response = await toast.promise(checkoutPromise, {
        pending: "Creating Stripe checkout session...",
        success: "Redirecting to secure payment...",
        error: {
          render({ data }) {
            return (
              data?.response?.data?.message || "Failed to start checkout session"
            );
          },
        },
      });

      if (response?.url) {
        window.location.href = response.url;
      } else {
        toast.error("Stripe checkout URL not found.");
      }
    } finally {
      setLoadingPlan("");
    }
  };

  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        <HeaderWrapper>
          <HeadingText variant="h1">{headerText.title}</HeadingText>
          <SubHeadingText>{headerText.subtitle}</SubHeadingText>

          <InfoBar>
            {childCreated && (
              <InfoChip
                label="Children details completed"
                sx={{
                  backgroundColor: "#FFF1F2",
                  color: "#BE123C",
                }}
              />
            )}
            {activePlan && (
              <InfoChip
                label={`Current plan: ${activePlan}`}
                sx={{
                  backgroundColor: "#F0FDF4",
                  color: "#166534",
                  textTransform: "capitalize",
                }}
              />
            )}
          </InfoBar>
        </HeaderWrapper>

        <CardGrid container spacing={{ xs: 3, md: 2.5, lg: 2.5 }}>
          {plans.map((items) => (
            <CardColumn key={items.level} size={{ xs: 12, md: 6, lg: 4 }}>
              <SubscriptionCard
                level={items.level}
                desc={items.desc}
                price={items.price}
                duration={items.duration}
                t1={items.features[0]}
                t2={items.features[1]}
                t3={items.features[2]}
                t4={items.features[3]}
                t5={items.features[4]}
                t6={items.features[5]}
                isCurrentPlan={activePlan === items.plan}
                isLoading={loadingPlan === items.plan}
                onSubscribe={() => handleSubscribe(items.plan)}
              />
            </CardColumn>
          ))}
        </CardGrid>
      </Container>
    </SectionWrapper>
  );
};

export default SubscriptionComponent;
