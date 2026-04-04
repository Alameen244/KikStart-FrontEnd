import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useQuery } from "@tanstack/react-query";
import { getHomeActiveCards } from "../../Apis/homeApi";
import img1 from "../../assets/cardman.png";
import img2 from "../../assets/cardBag.png";
import img3 from "../../assets/cardhand.png";
import img4 from "../../assets/cardClap.png";
import GymCard from "../GymCard/GymCard";
import Headings from "../Heading/Headings";
import Para from "../Para/Para";

const GymcardComponentSection = styled(Container)({
  position: "relative",
});

const GridWrapper = styled(Grid)({
  justifyContent: "center",
  alignItems: "stretch",
  marginTop: "40px",
});

const EmptyMessage = styled(Typography)({
  position: "absolute",
  bottom: "-45px",
  left: "14px",
  fontFamily: "cursive",
  fontSize: 14,
});

const fallbackSection = {
  heading: "Give the Gift of Gym",
  subheading: "Why Choose Us",
  sectionDescription:
    "Lorem ipsum dolor sit amet consectetur. Vitae elit quam volutpat id. Quisque orci lacinia sit non. Diam et adipiscing proin orci. Eget lorem sit etiam molestie rhoncus non. Ut tincidunt tristique suspendisse arcu ac.",
  cards: [
    {
      iconBgColor: "#FFF8F8",
      icon: img1,
      title: "Card Title 1",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu viverra",
    },
    {
      iconBgColor: "#FFFBEF",
      icon: img2,
      title: "Card Title 2",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu viverra",
    },
    {
      iconBgColor: "#EFF7FD",
      icon: img3,
      title: "Card Title 3",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu viverra",
    },
    {
      iconBgColor: "#FFF8F1",
      icon: img4,
      title: "Card Title 4",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu viverra",
    },
  ],
};

const fallbackIcons = [img1, img2, img3, img4];

function GymcardComponent() {
  const { data: gymCardResponse } = useQuery({
    queryKey: ["homeActiveCards"],
    queryFn: getHomeActiveCards,
  });

  const gymCardData = gymCardResponse?.data;
  const cards = Array.isArray(gymCardData?.cards) ? gymCardData.cards : [];
  const isGymCardEmpty = gymCardResponse?.empty || cards.length === 0;
  const gymCardContent = isGymCardEmpty ? fallbackSection : gymCardData;
  const homeActiveCards = Array.isArray(gymCardContent?.cards)
    ? gymCardContent.cards
    : fallbackSection.cards;

  return (
    <GymcardComponentSection maxWidth="lg">
      {isGymCardEmpty && (
        <EmptyMessage color="secondary">
          !! gym card section content is not available right now.
        </EmptyMessage>
      )}

      <Headings
        subHeading={gymCardContent?.subheading}
        heading={gymCardContent?.heading}
        align="center"
      />

      <Para para={gymCardContent?.sectionDescription} align="center" />

      <GridWrapper container spacing={4}>
        {homeActiveCards.map((item, index) => (
          <Grid item size={{ xs: 12, sm: 6, lg: 3 }} key={item?._id || index}>
            <GymCard
              bgcolor={item?.iconBgColor}
              cardImage={item?.icon}
              fallbackImage={fallbackIcons[index % fallbackIcons.length]}
              cardHeading={item?.title}
              cardPara={item?.description}
            />
          </Grid>
        ))}
      </GridWrapper>
    </GymcardComponentSection>
  );
}

export default GymcardComponent;
