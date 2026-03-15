import { Box, styled, Container } from "@mui/material";
import SignUpPic from "../Components/Auth/signUpPic/SignUpPic";
import SignUpForm from "../Components/Auth/SignUpForm/SignUpForm";
import { Link } from "react-router-dom";

const SignUpWrapper = styled(Box)({});

const ContainerBox = styled(Container)({
  paddingLeft: "30px",
  paddingRight: "30px",
 paddingTop:"30px",
  display: "flex",
  alignItems: "flex-start",
  gap: "145px",
});

const SignUp = () => {
  return (
    <SignUpWrapper>
      <ContainerBox maxWidth="xl" disableGutters>
        <Box sx={{ flexShrink: 0 }}>
          <SignUpPic
            bottomNote={
              <>
                Have an account? <Box component={Link} to="/login">Sign In</Box>
              </>
            }
          />
        </Box>
        <Box sx={{ width: "620px", maxWidth: "100%", flexShrink: 0 }}>
          <SignUpForm />
        </Box>
      </ContainerBox>
    </SignUpWrapper>
  );
};

export default SignUp;
