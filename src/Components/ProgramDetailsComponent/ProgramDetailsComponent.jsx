import React, { useState } from 'react'

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import styled from '@emotion/styled';
import Para from '../Para/Para';
import Program2 from '../../assets/Program2 copy.png'
import Program3 from '../../assets/Program3 copy.png'
import Program4 from '../../assets/Program4 copy.png'
import Program1 from '../../assets/Program1 copy.png'
import Grid from '@mui/material/Grid'
import bigLogoImage from '../../assets/BigLogoHome.png'
import TextField from '@mui/material/TextField';
import MainButton from '../RedButton/RedButton';
import Headings from '../Heading/Headings';
import RightStarBroom from "../../assets/Group (3).png"

const ProgramDetailsComponentWrapper = styled(Box)({

})
const KikLogoWrapper = styled(Box) ({

})
const ContentWrapper = styled(Container)({
  marginTop: "80px",
  marginBottom: "80px",
});
const Title = styled('h1')({




fontFamily: 'PT Sans',
fontStyle: 'normal',
fontWeight: 700,


textTransform: 'capitalize',

color: '#2B2B2B',


});
const ImageWrapper = styled(Box)({
position: "relative",
  width: "100%",
  borderRadius: "65px",
  overflow: "hidden",
  cursor: "pointer",
  transition: "transform 0.4s ease",
marginBottom:"40px",
marginTop:"20px"

});

const StyledImage = styled("img")({
  width: "100%",
  height: "634px",
  objectFit: "cover",
  objectPosition: "top", // This prevents the head from being cut off
  display: "block",
});

const Paragraph = styled(Typography)({
  fontSize: "16px",
  lineHeight: "28px",
  color: "#555",
  marginBottom: "20px",
  whiteSpace: "pre-line",
});
const SubHeading = styled(Typography)({


fontFamily: 'PT Sans',
fontStyle: 'normal',
fontWeight: 700,
fontSize: 20,
// marginTop:"40px",

textTransform: 'capitalize',

color: '#2B2B2B',


});
const UpPara = styled(Box) ({
    marginTop:"10px",
    marginBottom:"20px"
})

const MidPara = styled(Box) ({



fontFamily: 'Noto Sans',

fontWeight: 400,
fontSize: 15,



color: '#494949',



})

const LowPara = styled(Box) ({
fontFamily: 'Noto Sans',

fontWeight: 400,
fontSize: 15,



color: '#494949',
})

const DetailsWrapper = styled(Box) ({
fontFamily: 'Noto Sans',

fontWeight: 400,
fontSize: 15,


color: '#494949',
})
const GridWrapper = styled(Grid)({
    alignItems:"center",
    marginTop:"22px",
    display:"flex",
    justifyContent:"space-between"
})

const ImageBox = styled(Box) ({

  height:"267px",
  width:"267px",



})
const ProgramImages  = styled(Typography) ({
    fontFamily: 'PT Sans',
fontStyle: 'normal',
fontWeight: 700,
fontSize: 20,
marginTop:"40px",

textTransform: 'capitalize',

color: '#2B2B2B',
})
const EnquiryWrapper = styled(Box) ({

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
const InputWrapper = styled(Box) ({


background: '#FFFFFF',
boxShadow: '0px 17px 44px rgba(0, 0, 0, 0.08)',
borderRadius: "65px",
padding:"46px 40px",
marginTop:"30px"

})
const ProgramFormWrapper = styled(Box) ({
  marginTop:"100px"
})

const GalleryImage = styled(Box)({
    height:"100%",
    width:"100%",
  objectFit: "cover",
  objectPosition: 'top',
        borderRadius:"30px",
})
const LeftInputWrapper = styled(Box) ({
  position:"relative",
})

const StarImageWrapper = styled(Box) ({
    position:"absolute",
    bottom:"70px",
    right:"-80px",
    zIndex:"-1",
})

function ProgramDetailsComponent() {
    const location = useLocation()
    // const navigate = useNavigate()
    const program = location.state || {};
    // const { heading, image, shortDescription, details } = program;
    if(!program) <h2>Program Not Found</h2>

    //EnqueryForm

    const [formData , setFormData] = useState({
        schoolName : "",
        personName : "",
        email : "",
        phoneNumber : ""
    })
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name] : e.target.value,
      });
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData)
    }
    const gallaryImage = [
        {
            image : Program1
        },
        {
            image : Program2
        },
        {
            image : Program3
        },
        {
            image : Program4
        }
    ]

  return (
    <ProgramDetailsComponentWrapper>
        <ContentWrapper maxWidth = "lg" >
            <Title>
                {program.heading}
            </Title>
            <ImageWrapper>
            <StyledImage
                src={program.image}
                alt={program.heading}
            />

        </ImageWrapper>
        <Paragraph>
          {program.shortDescription}
        </Paragraph>
        <SubHeading>
          Program Details
        </SubHeading>

        <DetailsWrapper>
          <UpPara>
            {/* <Para para =  /> */}
            {program.details.upDetail}
          </UpPara>
          <MidPara>
            {/* <Para para = {program.details.midDetail} /> */}
            {program.details.midDetail}
          </MidPara>
          <LowPara>
            {/* <Para para = {program.details.lowDetail} /> */}
            {program.details.lowDetail}
          </LowPara>
        </DetailsWrapper>

        <ProgramImages>
            Program Images
        </ProgramImages>

        <GridWrapper  >
                        {
                        gallaryImage.map((items , index) => (
                            <Grid key={index} item size = {{lg : 4}}  >
                                <ImageBox>
                                    <GalleryImage component="img" src={items.image} alt="" />
                                </ImageBox>
                            </Grid>
                        ))
                    }
        </GridWrapper>
            <ProgramFormWrapper>
              <GridWrapper container spacing={8} >

            <Grid item size ={{lg:6}} >
              <Headings subHeading = "" heading = "Enquiry" />
              <Para para = "Quam in non velit malesuada arcu eget id. Id ut turpis tempor semper et in nunc aliquet. Orci cras faucibus aliquam eget orci egestas."/>
                <LeftInputWrapper>
                  <InputWrapper>
                    <EnquiryWrapper component="form" onSubmit={handleSubmit}>
                    <StyledTextField
                  label="School Name"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleChange}
                  fullWidth
                />
                <StyledTextField
                  label="Contact Person Name Of The School"
                  name="personName"

                  value={formData.personName}
                  onChange={handleChange}
                  fullWidth
                />
                      <StyledTextField
                      label="Email Address Of The School"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      fullWidth
                    />
                    <StyledTextField
                      label="Phone Number Of The School"
                      name="phoneNumber"
                      type = "tel"

                      value={formData.phoneNumber}
                      onChange={handleChange}
                      fullWidth
                    />


                </EnquiryWrapper>
                <MainButton color = "secondary" text = "SEND" px="42px" py='18px'/>
                </InputWrapper>
                <StarImageWrapper component = 'img' src = {RightStarBroom} />
                </LeftInputWrapper>
            </Grid>
            <Grid item size ={{lg:6}}>

                <KikLogoWrapper>
                    <img src={bigLogoImage} alt="" />
                </KikLogoWrapper>

            </Grid>
        </GridWrapper>
            </ProgramFormWrapper>
        </ContentWrapper>
    </ProgramDetailsComponentWrapper>
  )
}

export default ProgramDetailsComponent
