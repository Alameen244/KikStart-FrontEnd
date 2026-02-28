import React from 'react'
import GymCard from '../GymCard/GymCard'
import Headings from '../Heading/Headings'
import Para from '../Para/Para'
import img1 from "../../assets/cardman.png"
import img2 from "../../assets/cardBag.png"
import img3 from "../../assets/cardhand.png"
import img4 from "../../assets/cardClap.png"
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";


const GymcardComponentSection = styled(Container)({

})
const GridWrapper = styled(Grid)({
    alignItems:"center",
    marginTop:"40px"
})


function GymcardComponent() {
    const cardData = [
        {
            backGroundColor : "#FFF8F8",
            cardImg :img1 ,
            cardHeading : "Experienced Coaches",
            cardPara: "Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu viverra"
        },
        {
            backGroundColor : "#FFFBEF",
            cardImg :img2 ,
            cardHeading : "Work experience",
            cardPara: "Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu viverra"
        },
        {
            backGroundColor : "#EFF7FD",
            cardImg :img3 ,
            cardHeading : "Care and safety",
            cardPara: "Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu viverra"
        },
        {
            backGroundColor : "#FFF8F1",
            cardImg :img4 ,
            cardHeading : "Love for children",
            cardPara: "Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu viverra"
        },
        



    ]
  return (
    <GymcardComponentSection maxWidth = "lg" >
        <Headings subHeading = "Why Choose Us" heading = "Give the Gift of Gym" align = "center"/>
        <Para para = "Lorem ipsum dolor sit amet consectetur. Vitae elit quam volutpat id. Quisque orci lacinia sit non. Diam et adipiscing proin orci. Eget lorem sit etiam molestie rhoncus non. Ut tincidunt tristique suspendisse arcu ac." align = "center" />
        <GridWrapper container spacing={4} >

            {
                cardData.map((items) => (
                    <Grid item size = {{lg : 3}} >

                        <GymCard bgcolor = {items.backGroundColor} cardImage = {items.cardImg} cardHeading = {items.cardHeading} cardPara = {items.cardPara} />

                    </Grid>
                ))
            }

        </GridWrapper>
    </GymcardComponentSection>
  )
}

export default GymcardComponent