import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Para from "../HomeComponents/Layer1/Para";
import img1 from '../HomeComponents/Layer3/images/Group (1).png';
import img2 from '../HomeComponents/Layer3/images/Frame.png';
import img3 from '../HomeComponents/Layer3/images/Frame (1).png';
import img4 from '../HomeComponents/Layer3/images/Group (2).png';
import img5 from '../../assets/img5.png';
import img6 from '../../assets/img6.png';
import img7 from '../../assets/img7.png';
import img8 from '../../assets/img8.png';
import Card from "../HomeComponents/Layer3/Card";

const WhyUsComponent = () => {
    const cardData = [
     {
          image: img1,
          card_heading : "Experienced Coaches",
          card_para:"Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu viverra."
        },
        {
          image: img2,
          card_heading : "Work Experience",
          card_para:"Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu viverra."
        },
        {
          image: img3,
          card_heading : "Care And Safety",
          card_para:"Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu viverra."
        },
        {
          image:img4,
          card_heading : "Love For Children",
          card_para:"Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu viverra."
        },
        {
          image:img5,
          card_heading : "Excellent programs",
          card_para:"Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu viverra."
        },
        {
          image:img6,
          card_heading : "Satisfied parents",
          card_para:"Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu viverra."
        },
        {
          image:img7,
          card_heading : "Awesome environment",
          card_para:"Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu viverra."
        },
        {
          image:img8,
          card_heading : "Quality support",
          card_para:"Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu viverra."
        },
]


  return (
      <Container maxWidth="lg">
          <Box sx={{p:"80px 0 20px"}}>
          <Para para="Lorem ipsum dolor sit amet consectetur. Vitae elit quam volutpat id. Quisque orci lacinia sit non. Diam et adipiscing proin orci. Eget lorem sit etiam molestie rhoncus non. Ut tincidunt tristique suspendisse arcu ac." align="center" />
          </Box>


          <Grid container spacing={3} sx={{py:"40px"}}>
              {cardData.map((items) => (
                  <Grid size={{ lg:3 }}>
                      <Card image={items.image} cardHeading={items.card_heading} cardPara={items.card_para} align="center"/>
                 </Grid>
             ))}

          </Grid>

    </Container>
  )
}

export default WhyUsComponent
