import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SignUpPic from "../signUpPic/SignUpPic";
import KIKSTART from "../../../assets/KIKSTART.png";
import FormHeadings from "../../FormHeadings/FormHeadings";
import OneLineField from "../../OneLineField/OneLineField";
import PaswordField from "../../PasswordField/PaswordField";
import { Typography } from "@mui/material";
import RedButton from "../../RedButton/RedButton";

const ForgotWrapper = styled(Box)({
  boxSizing: "border-box",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  gap: "165px",
 "& .LoginForm":{
   display: "flex",
   flexDirection: "column",
   alignItems: "center",
  },
 "& .imageBox": {
   maxWidth: "204px",
   maxHeight: "89px",
   marginBottom :"45px"
  },

  "& .Headings": {
    display: "flex",
    flexDirection: "column",
    marginBottom:'30px'
  },

});
const ForgotPassword = () => {
  return (
    <ForgotWrapper maxWidth="Xl"
    >
      <SignUpPic

      />
      <Box className="LoginForm">
        <Box className="imageBox">

        <Box component="img" src={KIKSTART} />
           </Box>
        <Box className = "Headings">
          <FormHeadings
            heading="Forgot Password?"
            subHeading="Please enter your email to reset your password"
            align="center"
          />
        </Box>
        <Box sx={{marginBottom:"30px"}}>
          <OneLineField label="Email" type="email" />
        </Box>
       <RedButton text="CONTINUE"  color="secondary" py="18px" px="53px" />
      </Box>
    </ForgotWrapper>
  )
}

export default ForgotPassword

