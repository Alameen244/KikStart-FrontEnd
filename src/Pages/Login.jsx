import { Box, styled, Container } from "@mui/material";
import SignUpPic from "../Components/Auth/signUpPic/SignUpPic";
import LoginForm from "../Components/Auth/LoginForm/LoginForm";

const LoginWrapper = styled(Box)({
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

const ContainerBox = styled(Container)({
  paddingLeft: "30px",
  paddingRight: "30px",
  margin: "0px auto",
  display: "flex",
  alignItems: "center",
  gap: "145px",
});

const Login = () => {
  return (
    <LoginWrapper>
      <ContainerBox maxWidth="xl" disableGutters>
        <Box sx={{ flexShrink: 0 }}>
          <SignUpPic
            bottomNote={
              <>
                Have an account? <Box component="span">Sign In</Box>
              </>
            }
          />
        </Box>
        <Box sx={{ width: "620px", maxWidth: "100%", flexShrink: 0 }}>
          <LoginForm />
        </Box>
      </ContainerBox>
    </LoginWrapper>
  );
};

export default Login;
