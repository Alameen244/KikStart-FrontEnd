import { keyframes, styled } from "@mui/material/styles";
import ChildrenForm from "../ChildrenForm.jsx/ChildrenForm";
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

function FormStepper({
  step,
  next,
  back,
  formData,
  onChange,
  onFileChange,
  onLocationRequest,
  onSubmit,
  nextDisabled,
  isSubmitting,
}) {
  return (
    <StepContent key={step}>
      {step === 1 && (
        <ChildrenForm
          next={next}
          formData={formData}
          onChange={onChange}
          onFileChange={onFileChange}
          onLocationRequest={onLocationRequest}
          nextDisabled={nextDisabled}
        />
      )}
      {step === 2 && (
        <SchoolForm
          next={next}
          back={back}
          formData={formData}
          onChange={onChange}
          onLocationRequest={onLocationRequest}
          nextDisabled={nextDisabled}
        />
      )}
      {step === 3 && (
        <WaiverForm
          next={next}
          back={back}
          formData={formData}
          onChange={onChange}
          nextDisabled={nextDisabled}
        />
      )}
      {step === 4 && (
        <ProgramForm
          back={back}
          onSubmit={onSubmit}
          isSubmitting={isSubmitting}
        />
      )}
    </StepContent>
  );
}

export default FormStepper;
