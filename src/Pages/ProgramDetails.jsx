import React from "react";
import { useLocation, useParams } from "react-router-dom";
import ProgramDetailsComponent from "../Components/ProgramDetailsComponent/ProgramDetailsComponent";
import { getProgramById } from "../data/programsData";

function ProgramDetails() {
  const { id } = useParams();
  const location = useLocation();

  const programFromState = location.state;
  const programFromData = getProgramById(id);
  const program = programFromState || programFromData;

  return (
    <div>
      <ProgramDetailsComponent program={program} />
    </div>
  );
}

export default ProgramDetails;
 