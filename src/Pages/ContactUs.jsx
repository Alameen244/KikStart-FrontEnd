import styled from '@emotion/styled'
import Box from '@mui/material/Box'
import  { useState } from 'react'
import Banner from '../Components/Banner/Banner'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import MainButton from '../Components/RedButton/RedButton';
import Headings from '../Components/Heading/Headings'
import Para from '../Components/Para/Para'
import img1 from "../assets/Vector (1).png"
import img2 from "../assets/sms.png"
import Typography from '@mui/material/Typography'
import leftStarBroom from "../assets/Group (4).png"



const ContactUsWrappeer = styled(Box) ({

})
const ContentWrapper = styled(Container) ({

})
const GridWrapper = styled(Grid) ({
    margin:"35px 0 58px 0"
})
const InputWrapper = styled(Box) ({
    background: '#FFFFFF',
boxShadow: '0px 17px 44px rgba(0, 0, 0, 0.08)',
borderRadius: "65px",
padding:"46px 40px",
marginTop:"30px",

})
const GetInTouchWrapper = styled(Box) ({

})

const StyledTextField = styled(TextField)({
  marginBottom: "20px",

  "& .MuiOutlinedInput-root": {
    borderRadius: "15px",
    backgroundColor: "#F9FAFB",

    "& fieldset": {
      borderColor: "#E0E0E0",
    },

    "&:hover fieldset": {
      borderColor: "#FF3B3B",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#FF3B3B",
      borderWidth: "2px",
    },
  },

  "& .MuiInputLabel-root": {
    fontFamily: "Noto Sans",
    fontSize: "14px",
    color: "#B3B3B3",
  },

  "& .MuiInputLabel-root.Mui-focused": {
    color: "#FF3B3B",
  },

  "& .MuiOutlinedInput-input": {
    padding: "20px",

  },

});
const SMSWrapper = styled(Box) ({
    display:"flex",
    alignItems:"center",
    position:"relative",

marginTop:"38px",

background: '#FFFFFF',
boxShadow: '0px 7px 23px rgba(69, 69, 69, 0.05)',
borderRadius: "30px",
padding:"20px"


})
const SMSImageWrapper = styled(Box) ({
    height:"53px",
    width:"53px",
    borderRadius:"100%",
    backgroundColor:"#FFF8F8",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"


})
const SMSImage = styled(Box) ({

})
const TextWrapper = styled(Typography) ({

fontFamily: 'Montserrat',
fontStyle: 'normal',
fontWeight: 500,
fontSize: "15px",

marginLeft:"16px",
color: '#494949',


})
const IstarWrapper = styled(Box) ({
    position: "absolute",
    top:"180px",
    left:"85px"
})
const RightInputWrapper = styled(Box) ({
    position:"relative"
})
const StarImageWrapper = styled(Box) ({
    position:"absolute",
    bottom:"70px",
    left:"-80px",
    zIndex:"-1",
})
export default function ContactUs() {

    const [formData, setFormData] = useState({
        fullName: "",
        email : "",
        querySub : "",
        queryDetails : ""
    })
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }

  return (
    <ContactUsWrappeer>
        <Banner heading="Contact Us" subHeading = "Contact Us" />
        <ContentWrapper maxWidth = 'lg' >

            <GridWrapper container spacing={8} >

                <Grid item size = {{lg : 6}} >
                    <Headings heading  = "Get In Touch"/>
                    <Para para = "Lorem ipsum dolor sit amet consectetur. Vitae elit quam volutpat id. Quisque orci lacinia sit non. Diam et adipiscing proin orci. Eget lorem sit etiam molestie rhoncus non." />
                    <SMSWrapper>
                        <SMSImageWrapper>
                            <SMSImage component = "img" src = {img2} />
                        </SMSImageWrapper>
                        <TextWrapper>
                            .info@KikStartKids.com
                        </TextWrapper>
                        <IstarWrapper component = 'img'src = {img1} />

                    </SMSWrapper>
                </Grid>
                <Grid item size = {{lg : 6}} >
                    <RightInputWrapper>
                        <InputWrapper>
                        <GetInTouchWrapper component = "form" onSubmit={handleSubmit}>

                            <StyledTextField

                            label = "Full Name"
                            name = "fullName"

                            value = {formData.fullName}
                            onChange = {handleChange}
                            fullWidth


                            />
                            <StyledTextField

                            label = "Email"
                            name = "email"
                            type = "email"
                            value = {formData.email}
                            onChange = {handleChange}
                            fullWidth


                            />
                            <StyledTextField

                            label = "Query ubject"
                            name = "querySub"

                            value = {formData.querySub}
                            onChange = {handleChange}
                            fullWidth


                            />
                            <StyledTextField

                            label = "Query Details"
                            name = "queryDetails"

                            value = {formData.queryDetails}
                            onChange = {handleChange}
                            fullWidth
                            multiline
                            minRows={2}


                            />

                        </GetInTouchWrapper>
                        <MainButton color = "secondary" text = "SEND" px="42px" py='18px'/>
                    </InputWrapper>
                    <StarImageWrapper component = 'img' src = {leftStarBroom} />
                    </RightInputWrapper>

                </Grid>

            </GridWrapper>

        </ContentWrapper>
    </ContactUsWrappeer>
  )
}
