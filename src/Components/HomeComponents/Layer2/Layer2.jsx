import Container from '@mui/material/Container'
import React from 'react'
import ImageAfterImage from './ImageAfterImage'
import bigImage from "./images/Rectangle 6.png"
import smallImage from "./images/Rectangle 7.png"
import Box from '@mui/material/Box'
function Layer2() {

  return (
    <Container>
        <Box sx={{display: 'grid', gap: 3, gridTemplateColumns: 'repeat(2, 1fr)' ,marginTop:"30px"}}>
            <ImageAfterImage bigImage = {bigImage} smallImage = {smallImage} />
        </Box>
    </Container>
  )
}

export default Layer2