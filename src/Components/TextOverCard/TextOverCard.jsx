import styled from '@emotion/styled'
import React from 'react'

import Box from '@mui/material/Box'

const TextOverCardWrapper = styled(Box)({
  position: "relative",
  width: "100%",
  overflow: "hidden",
  borderRadius: "20px",
  cursor: "pointer",

  transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  willChange: "transform",

  "&:hover": {
    transform: "scale(1.06)",
  },

  "&:hover img": {
    transform: "scale(1.06) translateY(-6px)",
  }
});
const CardImage = styled("img")({
  height:"100%",
  width: "100%",
  // display: "block",
  transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
  objectFit: "cover",
  objectPosition: "center 0%",
});
const CardText = styled(Box) ({
    position:"absolute",
    bottom:"0",
    left:"0"

})
const CardHeading = styled(Box) ({
    marginLeft:"28px",
  "& h3":{



fontFamily: 'PT Sans',
fontStyle: 'normal',
fontWeight: 700,
fontSize: 20,
zIndex: 1,

textTransform: 'capitalize',

color: '#FFFFFF',


  }
})
const CardPara = styled(Box) ({
    margin:"0 0 25px 28px",
    "& p" : {


fontFamily: 'Noto Sans',
fontStyle: 'normal',
fontWeight: 400,
fontSize: 15,


color: '#FFFFFF',


    }
})
const CardImageWrapper = styled(Box)({
  height:"436px",
  width: "364px",
})
function TextOverCard(props) {
  return (
    <TextOverCardWrapper>
        <CardImageWrapper>
          <CardImage   src = {props.image} alt = "Blank" />
        </CardImageWrapper>
        <CardText>

            <CardHeading>
                <h3>{props.heading}</h3>
            </CardHeading>
            <CardPara>
                <p>{props.para}</p>
            </CardPara>

        </CardText>
    </TextOverCardWrapper>
  )
}

export default TextOverCard
