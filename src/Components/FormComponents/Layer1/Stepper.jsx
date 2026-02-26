import React from "react";
import { styled } from "@mui/material/styles";
import { FaBaby, FaGraduationCap, FaPenNib, FaIdBadge } from "react-icons/fa";

const steps = [
  { label: "Children Details", icon: <FaBaby /> },
  { label: "School Details", icon: <FaGraduationCap /> },
  { label: "Waiver Acceptance", icon: <FaPenNib /> },
  { label: "Program Details", icon: <FaIdBadge /> },
];

const StepperWrapper = styled("div")({
  paddingTop: "20px",
  width: "203px",
  fontFamily: "Arial, sans-serif",
  paddingRight: "40px",
});

const StepRow = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
});

const StepLabel = styled("div")({
  fontFamily: "PT Sans",
  fontSize: "16px",
  fontWeight: "700",
  color: "#2B2B2B",
  paddingTop: "10px",
});

const IconColumn = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const StepIcon = styled("div", {
  shouldForwardProp: (prop) => prop !== "isActive" && prop !== "isCompleted",
})(({ isActive, isCompleted }) => ({
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  backgroundColor: isCompleted ? "#FF5C5C" : isActive ? "#FFF0F0" : "#eeeeee",
  color: isCompleted ? "#ffffff" : isActive ? "#FF5C5C" : "#777",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
  zIndex: 1,
}));

const StepLine = styled("div", {
  shouldForwardProp: (prop) => prop !== "isCompleted",
})(({ isCompleted }) => ({
  width: "2px",
  height: "32px",
  backgroundColor: isCompleted ? "#FF5C5C" : "#e5e5e5",
  marginTop: "4px",
}));

const Stepper = ({ activeStep = 0 }) => {
  return (
    <StepperWrapper>
      {steps.map((step, index) => {
        const isActive = index === activeStep;
        const isCompleted = index < activeStep;

        return (
          <StepRow key={index}>
            <StepLabel>{step.label}</StepLabel>

            <IconColumn>
              <StepIcon isActive={isActive} isCompleted={isCompleted}>
                {step.icon}
              </StepIcon>

              {index !== steps.length - 1 && (
                <StepLine isCompleted={isCompleted} />
              )}
            </IconColumn>
          </StepRow>
        );
      })}
    </StepperWrapper>
  );
};

export default Stepper;
