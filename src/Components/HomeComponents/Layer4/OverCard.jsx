import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'

function OverCard(props) {
  return (
    <Box
      sx={{
        position: "relative",   
        width: "100%",
      }}
    >
      
      <Box
        component="img"
        src={props.image}
        sx={{
          width: "100%",
          display: "block",
        }}
      />

      
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          padding: "20px",
          borderRadius : "0 0 35px 35px"
          
        }}
      >
        <Typography variant="h5" color="white">
          {props.heading}
        </Typography>

        <Typography
          sx={{
            mt: 1,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            color: "white",
          }}
        >
          {props.cardPara}
        </Typography>
      </Box>
    </Box>
  );
}
export default OverCard