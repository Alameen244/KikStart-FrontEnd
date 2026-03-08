import React from "react";
import { Box, IconButton, Typography, styled } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import XIcon from "@mui/icons-material/X";

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
  "&:hover": {
    transform: "translateY(-2px)",
    color: "#ED1C24",
    backgroundColor: "#FFF6F6",
    boxShadow: "0 10px 22px rgba(237, 28, 36, 0.2)",
  },
  "&:hover::before": {
    background:
      "conic-gradient(from 0deg, rgba(237, 28, 36, 0.28) 0deg, rgba(237, 28, 36, 1) 95deg, rgba(237, 28, 36, 0.28) 225deg, rgba(237, 28, 36, 0.28) 360deg)",
  },
  "&:hover::after": {
    opacity: 1,
    transform: "translate(-50%, 0) scale(1)",
  },
});

const AuthSocialOptions = ({ sx = {} }) => {
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
        >
          <GoogleIcon fontSize="medium" />
        </SocialButton>
        <SocialButton
          aria-label="Continue with Facebook"
          data-tooltip="Continue with Facebook"
        >
          <FacebookRoundedIcon fontSize="medium" />
        </SocialButton>
        <SocialButton aria-label="Continue with X" data-tooltip="Continue with X">
          <XIcon fontSize="medium" />
        </SocialButton>
      </SocialRow>
    </Wrap>
  );
};

export default AuthSocialOptions;
