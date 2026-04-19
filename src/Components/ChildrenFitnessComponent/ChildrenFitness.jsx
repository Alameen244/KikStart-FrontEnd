import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getHomePrograms, getPrograms } from "../../Apis/homeApi";
import upCurve from "../../assets/upperCurve.png";
import lowCurve from "../../assets/lowerCurve.png";
import img1 from "../../assets/Rectangle 13.png";
import img2 from "../../assets/Rectangle 13 (1).png";
import img3 from "../../assets/Rectangle 13 (2).png";
import Headings from "../Heading/Headings";
import MainButton from "../RedButton/RedButton";
import TextOverCard from "../TextOverCard/TextOverCard";
import { getProgramsArray } from "../ProgramsComponents/ProgramComponent";

const fallbackProgramsSection = {
  heading: "Children’s Fitness Programs",
  subheading: "SERVICES",
  programs: [
    {
      _id: "fallback-home-program-1",
      title: "Program Number 1",
      description:
        "<p>Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu...</p>",
      ProgramDetails: "<p>Detailed description is not available right now.</p>",
      images: [{ url: img1 }],
    },
    {
      _id: "fallback-home-program-2",
      title: "Program Number 2",
      description:
        "<p>Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu...</p>",
      ProgramDetails: "<p>Detailed description is not available right now.</p>",
      images: [{ url: img2 }],
    },
    {
      _id: "fallback-home-program-3",
      title: "Program Number 3",
      description:
        "<p>Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu...</p>",
      ProgramDetails: "<p>Detailed description is not available right now.</p>",
      images: [{ url: img3 }],
    },
  ],
};

const Outer = styled(Box)({
  backgroundColor: "#FFFCF3",
  margin: "48px 0 ",
});

const ChildrenFitnessWrapper = styled(Container)({
  position: "relative",
});

const UpCurveImg = styled(Box)({
  width: "100%",
  height: "auto",
  transform: "translateY(-4px)",
});

const LowCurveImg = styled(Box)({
  width: "100%",
  height: "auto",
  transform: "translateY(4px)",
});

const GridWrapper = styled(Grid)({
  alignItems: "center",
  marginTop: "45px",
});

const ButtonWrapper = styled(Box)({
  textAlign: "center",
  marginTop: "40px",
});

const EmptyMessage = styled(Typography)({
  position: "absolute",
  top: "12px",
  left: "14px",
  fontFamily: "cursive",
  fontSize: 14,
});

const stripHtml = (value = "") =>
  value
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const normalizeProgram = (item, fallbackImage) => ({
  ...item,
  heading: item?.title || item?.heading,
  image: item?.images?.[0]?.url || item?.image || fallbackImage,
});

function ChildrenFitness() {
  const navigate = useNavigate();
  const { data: programResponse } = useQuery({
    queryKey: ["homePrograms"],
    queryFn: getHomePrograms,
  });
  const { data: mainProgramResponse } = useQuery({
    queryKey: ["programsPage"],
    queryFn: getPrograms,
  });
  const mainProgramData = mainProgramResponse?.data;
  const mainPrograms = getProgramsArray(mainProgramData);

  const programData = programResponse?.data;
  const programs = Array.isArray(programData?.programs)
    ? programData.programs
    : [];
  const isProgramEmpty = programResponse?.empty || programs.length === 0;
  const programContent = isProgramEmpty ? fallbackProgramsSection : programData;
  const activePrograms = Array.isArray(programContent?.programs)
    ? programContent.programs
    : fallbackProgramsSection.programs;
  const fallbackImages = [img1, img2, img3];

  return (
    <Outer>
      <UpCurveImg component="img" src={upCurve} />
      <ChildrenFitnessWrapper maxWidth="lg">
        {isProgramEmpty && (
          <EmptyMessage color="secondary">
            !! Program section content is not available right now.
          </EmptyMessage>
        )}

        <Headings
          subHeading={programContent?.subheading || "SERVICES"}
          heading={programContent?.heading || "Children’s Fitness Programs"}
          align="center"
        />

        <GridWrapper container spacing={4}>
          {activePrograms.map((item, index) => {
            const normalizedProgram = normalizeProgram(
              item,
              fallbackImages[index % fallbackImages.length],
            );

            return (
              <Grid
                key={normalizedProgram?._id || `children-program-${index}`}
                item
                size={{ xs: 12, sm: 6, lg: 4 }}
                onClick={() =>
                  navigate(
                    `/program/${index+1}`,
                    {
                      state: { program: normalizedProgram, items: mainPrograms},
                    },
                  )
                }
                sx={{ cursor: "pointer" }}
              >
                <TextOverCard
                  image={normalizedProgram.image}
                  heading={
                    normalizedProgram.heading || `Program Number ${index + 1}`
                  }
                  para={stripHtml(normalizedProgram?.description)}
                />
              </Grid>
            );
          })}
        </GridWrapper>

        <ButtonWrapper>
          <MainButton
            color="secondary"
            text="VIEW ALL"
            onClick={() => navigate("/programs")}
          />
        </ButtonWrapper>
      </ChildrenFitnessWrapper>
      <LowCurveImg component="img" src={lowCurve} />
    </Outer>
  );
}

export default ChildrenFitness;
