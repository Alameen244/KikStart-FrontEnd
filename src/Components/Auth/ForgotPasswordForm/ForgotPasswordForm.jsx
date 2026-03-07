import React from "react";
import Box from "@mui/material/Box";
import KIKSTART from "../../../assets/KIKSTART.png";
import FormHeadings from "../../FormHeadings/FormHeadings";
import OneLineField from "../../OneLineField/OneLineField";
import RedButton from "../../RedButton/RedButton";

const ForgotPasswordForm = () => {
  return (
    <Box className="LoginForm">
      <Box className="imageBox">
        <Box component="img" src={KIKSTART} />
      </Box>
      <Box className="Headings">
        <FormHeadings
          heading="Forgot Password?"
          subHeading="Please enter your email to reset your password"
          align="center"
        />
      </Box>
      <Box sx={{marginBottom:"30px"}}>
        <OneLineField label="Email" type="email" />
      </Box>
      <RedButton text="CONTINUE" color="secondary" py="18px" px="53px" />
    </Box>
  );
};

export default ForgotPasswordForm;
