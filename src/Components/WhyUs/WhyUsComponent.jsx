import { useQuery } from "@tanstack/react-query";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Para from "../Para/Para";
import img1 from '../../assets/cardBag.png';
import img2 from '../../assets/cardClap.png';
import img3 from '../../assets/cardhand.png';
import img4 from '../../assets/cardman.png';
import GymCard from '../GymCard/GymCard'
import styled from "@emotion/styled";
import Banner from "../Banner/Banner";
import { getActiveCards } from "../../Apis/whyUsApi";

const GymcardComponentSection = styled(Container)({
    marginTop:"37px",
    position: "relative",
})
const WhyUsWrapper = styled(Box) ({

})
const GridWrapper = styled(Grid)({
    alignItems:"stretch",
    marginTop:"40px",
    marginBottom: "48px",
    justifyContent:"center"
})

const EmptyMessage = styled(Typography)({
    position: "absolute",
    bottom: "-52px",
    left: "14px",
    fontFamily: "cursive",
    fontSize: 14,
})

const fallbackSection = {
    heading: "Why us",
    subheading: "Why us",
    sectionDescription:
      "Lorem ipsum dolor sit amet consectetur. Vitae elit quam volutpat id. Quisque orci lacinia sit non. Diam et adipiscing proin orci. Eget lorem sit etiam molestie rhoncus non. Ut tincidunt tristique suspendisse arcu ac.",
    cards: [
      {
        iconBgColor: "#FFF8F8",
        icon: img1,
        title: "Experienced Coaches",
        description:
          "Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu viverra",
      },
      {
        iconBgColor: "#FFFBEF",
        icon: img2,
        title: "Work experience",
        description:
          "Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu viverra",
      },
      {
        iconBgColor: "#EFF7FD",
        icon: img3,
        title: "Care and safety",
        description:
          "Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu viverra",
      },
      {
        iconBgColor: "#FFF8F1",
        icon: img4,
        title: "Love for children",
        description:
          "Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu viverra",
      },
    ],
}

const fallbackIcons = [img1, img2, img3, img4];

const WhyUsComponent = () => {
  const { data: gymCardResponse } = useQuery({
    queryKey: ["activeCards"],
    queryFn: getActiveCards,
  });

  const gymCardData = gymCardResponse?.data;
  const cards = Array.isArray(gymCardData?.cards) ? gymCardData.cards : [];
  const isGymCardEmpty = gymCardResponse?.empty || cards.length === 0;
  const gymCardContent = isGymCardEmpty ? fallbackSection : gymCardData;
  const activeCards = Array.isArray(gymCardContent?.cards)
    ? gymCardContent.cards
    : fallbackSection.cards;


  return (
    <WhyUsWrapper>
        <Banner
          heading={"Why Us"}
          subHeading={"Why Us"}
        />

        <GymcardComponentSection maxWidth = "lg" >
        {isGymCardEmpty && (
          <EmptyMessage color="secondary">
            !! gym card section content is not available right now.
          </EmptyMessage>
        )}


        <Para para = {gymCardContent?.sectionDescription || fallbackSection.sectionDescription} align = "center" />
        <GridWrapper container spacing={4} >

            {
                activeCards.map((items, index) => (
                    <Grid item size = {{ xs: 12, sm: 6, lg : 3 }} key={items?._id || index} >

                        <GymCard
                          bgcolor = {items?.iconBgColor}
                          cardImage = {items?.icon}
                          fallbackImage={fallbackIcons[index % fallbackIcons.length]}
                          cardHeading = {items?.title}
                          cardPara = {items?.description}
                        />

                    </Grid>
                ))
            }

        </GridWrapper>
    </GymcardComponentSection>

    </WhyUsWrapper>

  )
}

export default WhyUsComponent
