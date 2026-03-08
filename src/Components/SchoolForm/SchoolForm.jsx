import React from 'react'
import { styled } from "@mui/material/styles";

const PageWrapper = styled("div")({
  width: "650px",
  padding: "0px 20px 0px 60px",
  borderLeft: "1px solid #E5E5E5",
});

const HeaderWrapper = styled("div")({
  paddingBottom: "30px",
  paddingTop: "40px",
  h2: {
    fontFamily: "PT Sans",
    fontSize: "20px", 
    fontWeight: "700",
    color: "#2B2B2B",
  },
  p: {
    fontFamily: "Noto Sans",
    fontSize: "15px",
    fontWeight: "400",
    color: "#494949",
  },  
});

const FormWrapper = styled("div")({
  width: "580px",
});

const FieldWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  border: "1px solid #DEE2E6",
  borderRadius: "12px",
  padding: "16px",
  marginBottom: "16px",
});

const LocationFieldWrapper = styled(FieldWrapper)({
  position: "relative",
  paddingBottom: "10px",
});

const FieldLabel = styled("label")({
  padding: "0 0 8px 0",
  color: "#B3B3B3",
  fontFamily: "Noto Sans",
  fontSize: "14px",
  fontWeight: "400",
});

const FieldInput = styled("input")({
  outline: "0",
  border: "0",
  fontFamily: "Noto Sans",
  fontSize: "16px",
  fontWeight: "400",
  color: "#2B2B2B",
});

const LocationInput = styled(FieldInput)({
  paddingRight: "40px",
});

const TargetIconWrapper = styled("div")({
  position: "absolute",
  right: "20px",
  top: "50%",
  transform: "translateY(-50%)",
  cursor: "pointer",
});


const NextButton = styled("button")({
  backgroundColor: "#EF4444",
  color: "#FFFFFF",
  fontFamily: "Noto Sans",
  fontSize: "16px",
  fontWeight: "500",
  padding: "15px 35px",
  borderRadius: "50px",
  marginBottom: "40px",
  border: "0",
  "&:hover": {
    backgroundColor: "#DC2626",
  },
});

const BackButton = styled("button")({
  backgroundColor: "#2B2B2B",
  color: "#FFFFFF",
  fontFamily: "Noto Sans",
  fontSize: "16px",
  fontWeight: "500",
  padding: "15px 35px",
  borderRadius: "50px",
  marginBottom: "40px",
  border: "0",
  marginRight: "15px",
  "&:hover": {
    backgroundColor: "#1b1a1a",
  },
});

const TargetIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#9CA3AF"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="2" />
    <line x1="12" y1="2" x2="12" y2="6" />
    <line x1="12" y1="18" x2="12" y2="22" />
    <line x1="2" y1="12" x2="6" y2="12" />
    <line x1="18" y1="12" x2="22" y2="12" />
  </svg>
);


export default function SchoolForm( { next, back }) {
  return (
    <PageWrapper>
      <HeaderWrapper>
        <h2>School Details</h2>
        <p>Lorem ipsum dolor sit amet consectetur</p>
      </HeaderWrapper>

      <FormWrapper>
        <FieldWrapper>
          <FieldLabel>School Name</FieldLabel>
          <FieldInput type="text" />
        </FieldWrapper>

        <LocationFieldWrapper>
          <FieldLabel>School Location</FieldLabel>
          <LocationInput type="text" />
          <TargetIconWrapper>
            <TargetIcon />
          </TargetIconWrapper>
        </LocationFieldWrapper>

      </FormWrapper>

      <BackButton onClick={back}>Back</BackButton>
      <NextButton onClick={next}>Next</NextButton>
    </PageWrapper>
  )
}
