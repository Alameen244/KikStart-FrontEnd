import React from "react";
import Box from "@mui/material/Box";
import KIKSTART from "../../../assets/KIKSTART.png";
import FormHeadings from "../../FormHeadings/FormHeadings";
import OneLineField from "../../OneLineField/OneLineField";
import PaswordField from "../../PasswordField/PaswordField";
import RedButton from "../../RedButton/RedButton";

const ResetPasswordForm = () => {
  return (
    <Box className="LoginForm">
      <Box className="imageBox">
        <Box component="img" src={KIKSTART} />
      </Box>
      <Box className="Headings">
        <FormHeadings
          heading="Reset Password"
          subHeading="Lorem ipsum dolor sit amet consectetur"
          align="center"
        />
      </Box>
      <Box sx={{marginBottom:"16px"}}>
        <PaswordField label=" New Password" />
      </Box>
      <Box sx={{marginBottom:"30px"}}>
        <OneLineField label="Confirm Password" type="password" />
      </Box>
      <RedButton text="UPDATE" color="secondary" py="18px" px="53px" />
    </Box>
  );
};

export default ResetPasswordForm;
