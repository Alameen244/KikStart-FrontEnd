import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Headings from '../Layer1/Headings';
import Para from '../Layer1/Para';
import Card from './Card';
import img1 from './images/Group (1).png';
import img2 from './images/Frame.png';
import img3 from './images/Frame (1).png';
import img4 from './images/Group (2).png';
import MainButton from '../Layer1/MainButton';
const Layer3 = () => {

  const data = [
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
    }
  ]

  return (
    <Container
      maxWidth="lg"
      sx={{
        paddingTop: "28px",
        paddingBottom: "25px",
        position: "relative",
      }}
    >
      <Headings heading = "The Gift Of The Gym" subHeading = "WHY CHOSE US" align = "center"/>
      <Para para = "Lorem ipsum dolor sit amet consectetur. Vitae elit quam volutpat id. Quisque orci lacinia sit non. Diam et adipiscing proin orci. Eget lorem sit etiam molestie rhoncus non. Ut tincidunt tristique suspendisse arcu ac."  align = "center"/>


      <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: 'repeat(4, 1fr)' ,marginTop:"30px"}}>
        {
        data.map((items) => (
          <Card   image = {items.image}  imgAlign = "center" cardHeading = {items.card_heading} cardPara = {items.card_para} align = "center"  />
        ))
      }
      </Box>

    </Container>
  )
}

export default Layer3
