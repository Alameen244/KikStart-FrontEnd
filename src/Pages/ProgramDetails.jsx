import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router-dom";
import { getPrograms } from "../Apis/homeApi";
import ProgramDetailsComponent from "../Components/ProgramDetailsComponent/ProgramDetailsComponent";
import { getProgramById } from "../data/programsData";

function ProgramDetails() {
  const { id } = useParams();
  const location = useLocation();
  const { data: programResponse, isLoading } = useQuery({
    queryKey: ["programsPage"],
    queryFn: getPrograms,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const programFromState = location.state?.program;
  const programItems = location.state?.items;
  const apiPrograms = Array.isArray(programResponse?.data?.programs)
    ? programResponse.data.programs
    : [];
  const programFromApi = apiPrograms.find(
    (program) => program?._id === id || program?.id === id
  );
  const programFromData = getProgramById(id);
  const program = programFromState || programFromApi || programFromData;
  const items = programItems || apiPrograms;

  return (
    <div>
      <ProgramDetailsComponent program={program} items={items} />
    </div>
  );
}

export default ProgramDetails;
 
