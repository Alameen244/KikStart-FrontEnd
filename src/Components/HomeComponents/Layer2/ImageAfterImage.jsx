import Box from '@mui/material/Box'
import React from 'react'
import star from './images/Group.png'
export default function ImageAfterImage(props) {
  return (
    
        <Box sx={{
        position:"relative",
        height:"564px"
    }}>
        <Box>
            <Box
            component="img"
            src = {props.bigImage}
            sx = {{
                
            }}
        />
        </Box>
        <Box sx={{position:"absolute",
                bottom:"-10px",
                right:"70px"}}>
            <Box
            component="img"
            src={props.smallImage}
            sx={{
                
            }}
        
        />
        
        </Box>
        <Box
        
        component="img"
        src={star}
        sx={{
            position:"absolute",
            right:"21px",
            top:"16%",
            zIndex:-1

        }}
        
        />
    </Box>
    
  )
}
