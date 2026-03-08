import { useState } from "react";
import { Box, Container, styled } from "@mui/material";
import SignUpPic from "../Components/Auth/signUpPic/SignUpPic";
import LoginForm from "../Components/Auth/LoginForm/LoginForm";
import SignUpForm from "../Components/Auth/SignUpForm/SignUpForm";

const PageWrapper = styled(Box)({
  boxSizing: "border-box",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
});

const ContainerBox = styled(Container)({
  paddingLeft: "30px",
  paddingRight: "30px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  gap: "145px",
});

const ToggleText = styled("button")({
  border: 0,
  background: "transparent",
  cursor: "pointer",
  fontFamily: "Noto Sans",
  fontWeight: 700,
  fontSize: 15,
  color: "#ED1C24",
  padding: 0,
  lineHeight: 1.2,
});

const PicViewport = styled(Box)({
  width: "740px",
  height: "840px",
  overflow: "hidden",
  flexShrink: 0,
  position: "relative",
});

const PicTrack = styled(Box, {
  shouldForwardProp: (prop) => prop !== "registerActive",
})(({ registerActive }) => ({
  width: "200%",
  height: "100%",
  display: "flex",
  transform: registerActive ? "translateX(-50%)" : "translateX(0)",
  transition: "transform 1s cubic-bezier(0.22, 1, 0.36, 1)",
}));

const PicPane = styled(Box)({
  width: "50%",
  height: "100%",
  flexShrink: 0,
  position: "relative",
  overflow: "hidden",
  "&::after": {
    content: '""',
    position: "absolute",
    left: "-250%",
    width: "300%",
    height: "100%",
    background: "linear-gradient(180deg, rgba(237, 28, 36, 0.22) 0%, rgba(193, 22, 29, 0.18) 100%)",
    borderRadius: "150px",
    zIndex: 0,
  },
  "& > *": {
    position: "relative",
    zIndex: 1,
  },
});

const FormViewport = styled(Box)({
  width: "620px",
  maxWidth: "100%",
  flexShrink: 0,
  position: "relative",
  overflowX: "hidden",
  overflowY: "visible",
  minHeight: "980px",
});

const FormPaneBase = styled(Box)({
  position: "absolute",
  inset: 0,
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "transform 760ms cubic-bezier(0.22, 1, 0.36, 1), opacity 520ms ease",
  willChange: "transform, opacity",
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
    fontWeight: 400,
    fontSize: 15,
    color: "#ED1C24",
    width: "500px",
    textAlign: "left",
    margin: "17px 0 24px",
    textDecoration: "none",
  },
});

const LoginPane = styled(FormPaneBase, {
  shouldForwardProp: (prop) => prop !== "registerActive",
})(({ registerActive }) => ({
  transform: registerActive ? "translateX(100%)" : "translateX(0)",
  opacity: registerActive ? 0 : 1,
}));

const RegisterPane = styled(FormPaneBase, {
  shouldForwardProp: (prop) => prop !== "registerActive",
})(({ registerActive }) => ({
  transform: registerActive ? "translateX(0)" : "translateX(-100%)",
  opacity: registerActive ? 1 : 0,
}));

const SignUp_LoginPage = () => {
  const [registerActive, setRegisterActive] = useState(false);

  return (
    <PageWrapper>
      <ContainerBox maxWidth="xl" disableGutters>
        <PicViewport>
          <PicTrack registerActive={registerActive}>
            <PicPane>
              <SignUpPic
                bottomNote={
                  <>
                    Don&apos;t have an account?{" "}
                    <ToggleText type="button" onClick={() => setRegisterActive(true)}>
                      Sign Up
                    </ToggleText>
                  </>
                }
              />
            </PicPane>
            <PicPane>
              <SignUpPic
                bottomNote={
                  <>
                    Have an account?{" "}
                    <ToggleText type="button" onClick={() => setRegisterActive(false)}>
                      Sign In
                    </ToggleText>
                  </>
                }
              />
            </PicPane>
          </PicTrack>
        </PicViewport>

        <FormViewport>
          <LoginPane registerActive={registerActive}>
            <LoginForm />
          </LoginPane>
          <RegisterPane registerActive={registerActive}>
            <SignUpForm embedded />
          </RegisterPane>
        </FormViewport>
      </ContainerBox>
    </PageWrapper>
  );
};

export default SignUp_LoginPage;
