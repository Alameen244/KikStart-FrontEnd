import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Para from "../Para/Para";
import img1 from '../../assets/cardBag.png';
import img2 from '../../assets/cardClap.png';
import img3 from '../../assets/cardhand.png';
import img4 from '../../assets/cardman.png';
import img5 from '../../assets/img5.png';
import img6 from '../../assets/img6.png';
import img7 from '../../assets/img7.png';
import img8 from '../../assets/img8.png';
import GymCard from '../GymCard/GymCard'
import styled from "@emotion/styled";
import Banner from "../Banner/Banner";

const GymcardComponentSection = styled(Container)({
    marginTop:"37px"
})
const WhyUsWrapper = styled(Box) ({

})
const GridWrapper = styled(Grid)({
    alignItems:"center",
    marginTop:"40px",
    marginBottom:"48px"
})

const WhyUsComponent = () => {
    
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
          {
              backGroundColor : "#FFF8F1",
              cardImg :img5 ,
              cardHeading : "Excellent programs",
              cardPara: "Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu viverra"
          },
          {
              backGroundColor : "#EFF7FD",
              cardImg :img6 ,
              cardHeading : "Satisfied parents",
              cardPara: "Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu viverra"
          },
          {
              backGroundColor : "#FFF8F8",
              cardImg :img7 ,
              cardHeading : "Awesome environment",
              cardPara: "Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu viverra"
          },
          {
              backGroundColor : "#FFFBEF",
              cardImg :img8 ,
              cardHeading : "Quality support",
              cardPara: "Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu viverra"
          }
          
          
  
  
      ]


  return (
    <WhyUsWrapper>
        <Banner heading = "Why us" subHeading = "Home / Why us" />

        <GymcardComponentSection maxWidth = "lg" >

        
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

    </WhyUsWrapper>
      
  )
}

export default WhyUsComponent
