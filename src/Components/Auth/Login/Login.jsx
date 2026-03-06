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

const LoginWrapper = styled(Box)({
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
  "& .forgotText": {
    fontFamily: "Noto Sans",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 15,
    color: "#ED1C24",
    width: "500px",
    textAlign: "left",
    margin: "17px 0 24px",
  },
});
const Login = () => {
  return (
    <LoginWrapper maxWidth="Xl"
    >
      <SignUpPic
        bottomNote={
          <>
            Have an account? <Box component="span">Sign In</Box>
          </>
        }
      />
      <Box className="LoginForm">
        <Box className="imageBox">

        <Box component="img" src={KIKSTART} />
           </Box>
        <Box className = "Headings">
          <FormHeadings
            heading="Login"
            subHeading="Please fill this form to login your account"
            align="center"
          />
        </Box>
        <Box sx={{marginBottom:"16px"}}>
          <OneLineField label="Email" type="email" />
        </Box>
        <Box>
          <PaswordField label="Password" />
        </Box>
        <Typography className="forgotText">
          Forgot password?
        </Typography>
       <RedButton text="LOGIN"  color="secondary" py="18px" px="53px" />
      </Box>
    </LoginWrapper>
  );
};

export default Login;
