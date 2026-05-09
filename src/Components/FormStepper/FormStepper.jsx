import { keyframes, styled } from "@mui/material/styles";
import ChildrenFrom from "../ChildrenForm.jsx/ChildrenForm";
import SchoolForm from "../SchoolForm/SchoolForm";
import WaiverForm from "../WaiverForm/WaiverForm";
import ProgramForm from "../ProgramForm/ProgramForm";

const slideFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StepContent = styled("div")({
  animation: `${slideFadeIn} 320ms ease`,
  willChange: "transform, opacity",
});

function FormStepper({ step, next, back }) {
  return (
    <StepContent key={step}>
      {step === 1 && <ChildrenFrom next={next} />}
      {step === 2 && <SchoolForm next={next} back={back} />}
      {step === 3 && <WaiverForm next={next} back={back} />}
      {step === 4 && <ProgramForm back={back} />}
    </StepContent>
  );
}

export default FormStepper;
