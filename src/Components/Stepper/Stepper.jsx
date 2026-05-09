import React from "react";
import { keyframes, styled } from "@mui/material/styles";
import stepper1 from "../../assets/stepper1.png";
import stepper2 from "../../assets/stepper2.png";
import stepper3 from "../../assets/stepper3.png";
import stepper4 from "../../assets/stepper4.png";

const steps = [
  { label: "Children Details", icon: stepper1 },
  { label: "School Details", icon: stepper2},
  { label: "Waiver Acceptance", icon: stepper3 },
  { label: "Program Details", icon: stepper4 },
];

const StepperWrapper = styled("div")({
  paddingTop: "50px",
  width: "203px",
  fontFamily: "Arial, sans-serif",
});

const activePop = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(237, 28, 36, 0.2);
  }

  50% {
    transform: scale(1.08);
    box-shadow: 0 0 0 8px rgba(237, 28, 36, 0.08);
  }

  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(237, 28, 36, 0);
  }
`;

const StepRow = styled("div", {
  shouldForwardProp: (prop) => prop !== "isActive",
})(({ isActive }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  opacity: isActive ? 1 : 0.82,
  transform: isActive ? "translateX(0)" : "translateX(-2px)",
  transition: "opacity 220ms ease, transform 220ms ease",
}));

const StepLabel = styled("div", {
  shouldForwardProp: (prop) => prop !== "isActive" && prop !== "isCompleted",
})(({ isActive, isCompleted }) => ({
  fontFamily: "PT Sans",
  fontSize: "16px",
  fontWeight: "700",
  color: isActive || isCompleted ? "#2B2B2B" : "#7A7A7A",
  paddingTop: "10px",
  transition: "color 220ms ease, transform 220ms ease",
  transform: isActive ? "translateX(4px)" : "translateX(0)",
}));

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
  backgroundColor: isCompleted ? "#ED1C24" : isActive ? "#FFF8F8" : "#E9E9E9",
  color: isCompleted ? "#FFFFFF" : isActive ? "#ED1C24" : "#1A1A1A",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
  zIndex: 1,
  boxShadow: isActive ? "0 10px 24px rgba(237, 28, 36, 0.14)" : "none",
  transition:
    "background-color 220ms ease, color 220ms ease, box-shadow 220ms ease, transform 220ms ease",
  animation: isActive ? `${activePop} 420ms ease` : "none",
}));

const StepLine = styled("div", {
  shouldForwardProp: (prop) =>
    prop !== "isCompleted" && prop !== "isActive",
})(({ isCompleted, isActive }) => ({
  width: "2px",
  height: "32px",
  backgroundColor: isCompleted ? "#FF5C5C" : "#e5e5e5",
  marginTop: "4px",
  transformOrigin: "top",
  transform: isCompleted || isActive ? "scaleY(1)" : "scaleY(0.85)",
  transition: "background-color 220ms ease, transform 220ms ease",
}));

const IconImage = styled("img", {
  shouldForwardProp: (prop) => prop !== "isActive" && prop !== "isCompleted",
})(({ isActive, isCompleted }) => ({
  width: "16px",
  height: "16px",
  objectFit: "contain",
  transition: "filter 220ms ease, transform 220ms ease",
  transform: isActive ? "scale(1.08)" : "scale(1)",
  filter: isCompleted
    ? "brightness(0) saturate(100%) invert(100%)"
    : isActive
      ? "brightness(0) saturate(100%) invert(15%) sepia(95%) saturate(6951%) hue-rotate(350deg) brightness(95%) contrast(97%)"
      : "brightness(0) saturate(100%) invert(9%) sepia(0%) saturate(0%) hue-rotate(190deg) brightness(96%) contrast(95%)",
}));

const Stepper = ({ activeStep = 0 }) => {
  return (
    <StepperWrapper>
      {steps.map((step, index) => {
        const isActive = index === activeStep;
        const isCompleted = index < activeStep;

        return (
          <StepRow key={index} isActive={isActive}>
            <StepLabel isActive={isActive} isCompleted={isCompleted}>
              {step.label}
            </StepLabel>

            <IconColumn>
              <StepIcon isActive={isActive} isCompleted={isCompleted}>
                <IconImage
                  src={step.icon}
                  alt={step.label}
                  isActive={isActive}
                  isCompleted={isCompleted}
                />
              </StepIcon>

              {index !== steps.length - 1 && (
                <StepLine isCompleted={isCompleted} isActive={isActive} />
              )}
            </IconColumn>
          </StepRow>
        );
      })}
    </StepperWrapper>
  );
};

export default Stepper;
