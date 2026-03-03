import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";


const GymCardWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "bgcolor",
})(({ bgcolor }) => ({
  background: "#FFFFFF",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  borderRadius: "20px",
  padding: "10px",
  transition: "all 0.3s ease",
  cursor: "pointer",

  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: `0px 10px 25px ${bgcolor}`,
  },
}));
const CardHeading = styled(Box) ({
  textAlign:"center",
  "& h3":{

fontFamily: 'PT Sans',
fontStyle: 'normal',
fontWeight: 700,
fontSize: 20,
textTransform: 'capitalize',
color: '#2B2B2B',

  }
})
const CardPara = styled(Box) ({
  margin:"10px 0  30px 0 ",

  "& p": {

fontFamily: 'Noto Sans',
fontStyle: 'normal',
fontWeight: 400,
fontSize: 15,
textAlign: 'center',
color: '#494949',
  }
})


const CardImgBackground = styled(Box,{
  shouldForwardProp : (prop) => prop !== "bgcolor",
})(({ bgcolor }) => ({

  backgroundColor: bgcolor,
  height:"66px",
  width:"66px",
  borderRadius:"100%",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",



}))

const CardImg = styled('img') ({

})
const ImageSection = styled(Box) ({
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  margin:"32px 0  22px 0 " ,
})

const GymCard = (props) => {
  return (
    <GymCardWrapper  bgcolor={props.bgcolor}>
        <ImageSection>
          <CardImgBackground bgcolor={props.bgcolor}>
            <CardImg  component = "img"  src = {props.cardImage} alt = "Blank" />
          </CardImgBackground>
        </ImageSection>
        <CardHeading>
            <h3> {props.cardHeading} </h3>
        </CardHeading>
        <CardPara>
            <p>{props.cardPara}</p>
        </CardPara>
    </GymCardWrapper>
  )
}
export default GymCard


