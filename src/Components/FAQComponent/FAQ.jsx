import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from '@mui/material/Collapse';




const Item = styled(Box) ({
   


background: '#FFFFFF',
boxShadow: '0px 7px 23px rgba(69, 69, 69, 0.05)',
borderRadius: 30,
padding:"10px",
marginBottom:"15px"


})
const Row = styled(Box) ({
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    cursor:"pointer",
    padding:"10px"
})
const RotateIcon = styled(ExpandMoreIcon)(({ open }) => ({
  transform: open ? "rotate(180deg)" : "rotate(0deg)",
  transition: "0.3s",
  color: "#ff3b3b",
}));
const QuestionWrapper = styled(Box) ({
    
fontFamily: 'PT Sans',
fontStyle: 'normal',
fontWeight: 700,
fontSize: 20,


textTransform: 'capitalize',

color: '#2B2B2B',
padding:"10px 0"


})
const Answer = styled(Box) ({
    


fontFamily: 'Noto Sans',
fontStyle: 'normal',
fontWeight: 400,
fontSize: 15,
padding:" 0 10px 10px 10px ",


color: '#494949',


})


const FAQ = ({question , answer, onclick,open}) => {
    
    
   
  return (
    <Item onClick={onclick} >

        <Row>
        <QuestionWrapper>{question}</QuestionWrapper>
        <IconButton size="small">
          <RotateIcon open={open} />
        </IconButton>
        
        </Row>
        <Collapse in = {open} >
            <Answer>{answer}</Answer>
        </Collapse>

    </Item>
  )
}

export default FAQ