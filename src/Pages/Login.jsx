import { Box, styled, Container } from "@mui/material";
import SignUpPic from "../Components/Auth/signUpPic/SignUpPic";
import LoginForm from "../Components/Auth/LoginForm/LoginForm";
import { Link } from "react-router-dom";

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
    display: "block",
    fontFamily: "Noto Sans",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 15,
    color: "#ED1C24",
    width: "500px",
    textAlign: "left",
    margin: "17px 0 24px",
    textDecoration: "none",
  },
});

const ContainerBox = styled(Container)({
  paddingLeft: "30px",
  paddingRight: "30px",
  paddingTop:"30px",
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
                Don't have an account?{" "}
                <Box
                  component={Link}
                  to="/signup"
                >
                  Sign Up
                </Box>
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
