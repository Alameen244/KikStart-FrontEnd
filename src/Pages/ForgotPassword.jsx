import { Box, styled, Container } from "@mui/material";
import SignUpPic from "../Components/Auth/signUpPic/SignUpPic";
import ForgotPasswordForm from "../Components/Auth/ForgotPasswordForm/ForgotPasswordForm";


const ForgotPasswordWrapper = styled(Box)({
  boxSizing: "border-box",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  gap: "165px",
  "& .LoginForm": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  "& .imageBox": {
    maxWidth: "204px",
    maxHeight: "89px",
    marginBottom: "45px",
  },
  "& .Headings": {
    display: "flex",
    flexDirection: "column",
    marginBottom: "30px",
  },
});

const ContainerBox = styled(Container)({
  paddingLeft: "30px",
  paddingRight: "30px",
  margin: "0px auto",
  display: "flex",
  alignItems: "center",
  gap: "145px",
});

const ForgotPassword = () => {
  return (
    <ForgotPasswordWrapper>
      <ContainerBox maxWidth="xl" disableGutters>
        <Box sx={{ flexShrink: 0 }}>
          <SignUpPic />
        </Box>
        <Box sx={{ width: "620px", maxWidth: "100%", flexShrink: 0 }}>
          <ForgotPasswordForm />
        </Box>
      </ContainerBox>
    </ForgotPasswordWrapper>
  );
};

export default ForgotPassword;
