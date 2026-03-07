import React from "react";
import Box from "@mui/material/Box";
import KIKSTART from "../../../assets/KIKSTART.png";
import FormHeadings from "../../FormHeadings/FormHeadings";
import OneLineField from "../../OneLineField/OneLineField";
import PaswordField from "../../PasswordField/PaswordField";
import { Typography } from "@mui/material";
import RedButton from "../../RedButton/RedButton";

const LoginForm = () => {
  return (
    <Box className="LoginForm">
      <Box className="imageBox">
        <Box component="img" src={KIKSTART} />
      </Box>
      <Box className="Headings">
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
      <RedButton text="LOGIN" color="secondary" py="18px" px="53px" />
    </Box>
  );
};

export default LoginForm;
