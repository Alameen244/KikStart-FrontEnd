import Container from '@mui/material/Container'
import React, { useState } from 'react'
import Headings from '../Layer1/Headings'
import img1 from "./images/Rectangle 13.png"
import img2 from "./images/Rectangle 13 (1).png"
import img3 from "./images/Rectangle 13 (2).png"
import OverCard from './overCard'
import Box from '@mui/material/Box'
import MainButton from '../Layer1/MainButton'

function Layer4() {
    
    
    const data = [
        {
            image : img1,
            
            para : "Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu..."
        },
        {
            image : img2,
            
            para : "Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu..."
        },
        {
            image : img3,
            
            para : "Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu..."
        }
    ]
  return (
    <Container>
        <Headings  subHeading = "SERVICES" heading = "Children’s Fitness Programs" align = "center" />
        <Box sx={{display: 'grid', gap: 3, gridTemplateColumns: 'repeat(3, 1fr)' ,marginTop:"30px"}}>
            {
                data.map((items,index) => (
                    <OverCard key = {index} image = {items.image} heading = {`Program Name ${index+1}`} cardPara = {items.para} />
                ))
            }
        </Box>
        <Box 
      sx={{
        display:"flex",
        alignItems:"center",
        justifyContent: "center",
        marginTop: "30px"
      }}>
        <MainButton text = "VIEW ALL" />
      </Box>
    </Container>
  )
}

export default Layer4