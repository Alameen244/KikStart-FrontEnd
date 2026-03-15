import React from "react";
import { Box, IconButton, Typography, styled } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import XIcon from "@mui/icons-material/X";
import { useAuth0 } from "@auth0/auth0-react";
const Wrap = styled(Box)({
  width: "100%",
  marginTop: "22px",
});

const DividerWrap = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "12px",
});

const DividerLine = styled(Box)({
  flex: 1,
  height: "1px",
  background:
    "linear-gradient(90deg, rgba(237,28,36,0.08) 0%, rgba(237,28,36,0.45) 50%, rgba(237,28,36,0.08) 100%)",
});

const DividerLabel = styled(Typography)({
  fontFamily: "Noto Sans",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: 1,
  color: "#8A8A8A",
  background: "#FFF5F5",
  border: "1px solid #F8D2D4",
  borderRadius: "999px",
  padding: "7px 14px",
  textTransform: "lowercase",
});

const SocialRow = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "12px",
  marginTop: "18px",
});

const SocialButton = styled(IconButton)({
  width: "48px",
  height: "48px",
  borderRadius: "12px",
  border: "none",
  backgroundColor: "#FFFFFF",
  color: "#2F2F2F",
  position: "relative",
  isolation: "isolate",
  overflow: "visible",
  transition: "all 0.25s ease",
  boxShadow: "0 6px 16px rgba(16, 24, 40, 0.08)",
  "& > *": {
    position: "relative",
    zIndex: 2,
  },
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "inherit",
    padding: "1.6px",
    background:
      "conic-gradient(from 0deg, rgba(237, 28, 36, 0.18) 0deg, rgba(237, 28, 36, 0.92) 90deg, rgba(237, 28, 36, 0.18) 220deg, rgba(237, 28, 36, 0.18) 360deg)",
    WebkitMask:
      "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
    zIndex: 1,
    pointerEvents: "none",
    animation: "spinBorder 2.6s linear infinite",
  },
  "&::after": {
    content: "attr(data-tooltip)",
    position: "absolute",
    left: "50%",
    bottom: "calc(100% + 14px)",
    transform: "translate(-50%, 12px) scale(0.94)",
    transformOrigin: "bottom center",
    opacity: 0,
    pointerEvents: "none",
    whiteSpace: "nowrap",
    fontFamily: "Noto Sans",
    fontWeight: 700,
    fontSize: "13px",
    lineHeight: 1,
    color: "#FFFFFF",
    background: "linear-gradient(135deg, #FF4D57 0%, #D91E2D 55%, #B41428 100%)",
    border: "1px solid rgba(255, 255, 255, 0.28)",
    padding: "12px 18px",
    minWidth: "172px",
    textAlign: "center",
    borderRadius: "14px",
    letterSpacing: "0.1px",
    boxShadow: "0 14px 28px rgba(217, 30, 45, 0.34)",
    zIndex: 5,
    transition: "all 240ms cubic-bezier(.25,.8,.25,1.2)",
  },
  "@keyframes spinBorder": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
  "&:hover::after": {
    opacity: 1,
    transform: "translate(-50%, 0) scale(1)",
  },
  '&[data-brand="google"]': {
    color: "#2F2F2F",
  },
  '&[data-brand="google"]::after': {
    background:
      "linear-gradient(135deg, #833AB4 0%, #C13584 35%, #E1306C 55%, #F77737 78%, #FCAF45 100%)",
    boxShadow: "0 10px 20px rgba(193, 53, 132, 0.24)",
  },
  '&[data-brand="google"]:hover': {
    transform: "translateY(-2px)",
    color: "#FFFFFF",
    background:
      "linear-gradient(135deg, #833AB4 0%, #C13584 35%, #E1306C 55%, #F77737 78%, #FCAF45 100%)",
    boxShadow: "0 8px 16px rgba(193, 53, 132, 0.22)",
  },
  '&[data-brand="google"]:hover::before': {
    background:
      "conic-gradient(from 0deg, rgba(131, 58, 180, 0.28) 0deg, rgba(193, 53, 132, 1) 100deg, rgba(225, 48, 108, 1) 180deg, rgba(247, 119, 55, 1) 265deg, rgba(252, 175, 69, 0.95) 320deg, rgba(131, 58, 180, 0.28) 360deg)",
  },
  '&[data-brand="facebook"]::after': {
    background: "linear-gradient(135deg, #1877F2 0%, #0C63D9 100%)",
    boxShadow: "0 14px 28px rgba(24, 119, 242, 0.34)",
  },
  '&[data-brand="facebook"]:hover': {
    transform: "translateY(-2px)",
    color: "#FFFFFF",
    backgroundColor: "#1877F2",
    boxShadow: "0 10px 24px rgba(24, 119, 242, 0.32)",
  },
  '&[data-brand="facebook"]:hover::before': {
    background:
      "conic-gradient(from 0deg, rgba(24, 119, 242, 0.28) 0deg, rgba(24, 119, 242, 1) 95deg, rgba(24, 119, 242, 0.28) 225deg, rgba(24, 119, 242, 0.28) 360deg)",
  },
  '&[data-brand="x"]::after': {
    background: "linear-gradient(135deg, #1F2937 0%, #0F172A 100%)",
    boxShadow: "0 14px 28px rgba(15, 23, 42, 0.34)",
  },
  '&[data-brand="x"]:hover': {
    transform: "translateY(-2px)",
    color: "#FFFFFF",
    backgroundColor: "#111111",
    boxShadow: "0 10px 24px rgba(17, 17, 17, 0.3)",
  },
  '&[data-brand="x"]:hover::before': {
    background:
      "conic-gradient(from 0deg, rgba(17, 17, 17, 0.24) 0deg, rgba(17, 17, 17, 1) 95deg, rgba(17, 17, 17, 0.24) 225deg, rgba(17, 17, 17, 0.24) 360deg)",
  },
});

const AuthSocialOptions = ({ sx = {} }) => {
  const { loginWithRedirect , user , logout } = useAuth0();
  return (
    <Wrap sx={sx}>
      <DividerWrap>
        <DividerLine />
        <DividerLabel>or, continue with:</DividerLabel>
        <DividerLine />
      </DividerWrap>

      <SocialRow>
        <SocialButton
          aria-label="Continue with Google"
          data-tooltip="Continue with Google"
          data-brand="google"
          onClick={() => loginWithRedirect()}
        >
          <GoogleIcon fontSize="medium" />
        </SocialButton>
        <SocialButton
          aria-label="Continue with Facebook"
          data-tooltip="Continue with Facebook"
          data-brand="facebook"
          >
          <FacebookRoundedIcon fontSize="medium" />
        </SocialButton>
        <SocialButton
          aria-label="Continue with X"
          data-tooltip="Continue with X"
          data-brand="x"
        >
          <XIcon fontSize="medium" />
        </SocialButton>
      </SocialRow>
    </Wrap>
  );
};

export default AuthSocialOptions;
