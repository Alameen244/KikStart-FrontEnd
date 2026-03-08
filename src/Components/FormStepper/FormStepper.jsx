import ChildrenFrom from "../ChildrenForm.jsx/ChildrenForm";
import SchoolForm from "../SchoolForm/SchoolForm";
import WaiverForm from "../WaiverForm/WaiverForm";
import ProgramForm from "../ProgramForm/ProgramForm";

function FormStepper({ step, next, back }) {
  return (
    <div>
      {step === 1 && <ChildrenFrom next={next} />}
      {step === 2 && <SchoolForm next={next} back={back} />}
      {step === 3 && <WaiverForm next={next} back={back} />}
      {step === 4 && <ProgramForm back={back} />}
    </div>
  );
}

export default FormStepper;