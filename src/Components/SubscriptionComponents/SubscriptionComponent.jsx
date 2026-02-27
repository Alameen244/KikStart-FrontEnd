import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SubscriptionCard from "../SubscriptionCard/SubscriptionCard";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const HeaderWrapper = styled(Box)({
  paddingTop: "80px",
  paddingBottom: "119px",
});

const HeadingText = styled(Typography)({
  /* Program Enrolment Package */

  fontFamily: "PT Sans",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: 26,
  lineHeight: "34px",
  /* identical to box height */
  textTransform: "capitalize",

  color: "#2B2B2B",

    textAlign: "center",
  paddingBottom: "6px",
});

const SubHeadingText = styled(Typography)({
  textAlign: "center",
  /* Lorem ipsum dolor sit amet consectetur */

  fontFamily: "Noto Sans",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: 15,
  lineHeight: "26px",
  /* identical to box height, or 173% */

  color: "#494949",
});

const CardGrid = styled(Grid)({
  padding:"28px 0"
});

const SubscriptionComponent = () => {
  const subData = [
    {
      level: "BASIC",
      desc: "Lorem ipsum dolor sit amet consectetur. Pharetra et ac vitae.",
      price: "$19",
      duration: "Per Month",
      t1: "Lorem ipsum dolor sit",
      t2: "Consectetur adipiscing elit",
      t3: "In vehicula quam vitae justo",
      t4: "Nam interdum lectus",
      t5: "Lorem ipsum dolor sit",
      t6: "Consectetur adipiscing elit",
    },
    {
      level: "PROFESSIONAL",
      desc: "Lorem ipsum dolor sit amet consectetur. Pharetra et ac vitae.",
      price: "$49",
      duration: "Per Month",
      t1: "Lorem ipsum dolor sit",
      t2: "Consectetur adipiscing elit",
      t3: "In vehicula quam vitae justo",
      t4: "Nam interdum lectus",
      t5: "Lorem ipsum dolor sit",
      t6: "Consectetur adipiscing elit",
    },
    {
      level: "ADVANCED",
      desc: "Lorem ipsum dolor sit amet consectetur. Pharetra et ac vitae.",
      price: "$99",
      duration: "Per Month",
      t1: "Lorem ipsum dolor sit",
      t2: "Consectetur adipiscing elit",
      t3: "In vehicula quam vitae justo",
      t4: "Nam interdum lectus",
      t5: "Lorem ipsum dolor sit",
      t6: "Consectetur adipiscing elit",
    },
  ];
  return (
    <Container maxWidth="lg">
      <HeaderWrapper>
        <HeadingText variant="h1" color="dark">
          Program Enrolment Package
        </HeadingText>
        <SubHeadingText color="semiDark">
          Lorem ipsum dolor sit amet consectetur
        </SubHeadingText>
      </HeaderWrapper>
      <CardGrid container>
        {subData.map((items) => (
          <Grid key={items.level} size={{ lg: 4 }}>
            <SubscriptionCard
              level={items.level}
              desc={items.desc}
              price={items.price}
              duration={items.duration}
              t1={items.t1}
              t2={items.t2}
              t3={items.t3}
              t4={items.t4}
              t5={items.t5}
              t6={items.t6}
            />
          </Grid>
        ))}
      </CardGrid>
    </Container>
  );
};

export default SubscriptionComponent;
