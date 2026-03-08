import React from "react";
import { Box, Typography, styled } from "@mui/material";

const DividerWrap = styled(Box)({
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginTop: "22px",
});

const DividerLine = styled(Box)({
  flex: 1,
  height: "1px",
  background: "linear-gradient(90deg, rgba(237,28,36,0.08) 0%, rgba(237,28,36,0.45) 50%, rgba(237,28,36,0.08) 100%)",
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

const AuthOrDivider = ({ text = "or", sx = {} }) => {
  return (
    <DividerWrap sx={sx}>
      <DividerLine />
      <DividerLabel>{text}</DividerLabel>
      <DividerLine />
    </DividerWrap>
  );
};

export default AuthOrDivider;
