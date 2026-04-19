import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getPrograms } from "../../Apis/homeApi";
import img1 from "../../assets/Rectangle 13.png";
import img2 from "../../assets/Rectangle 13 (1).png";
import img3 from "../../assets/Rectangle 13 (2).png";
import Banner from "../Banner/Banner";
import ProgramImageCardsTable from "./ProgramImageCardsTable";

const fallbackProgramsSection = {
  heading: "Programs",
  subheading: "Programs",
  programs: [
    {
      _id: "fallback-program-1",
      title: "Program Name 1",
      description:
        "<p>Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu viverra.</p>",
      ProgramDetails:
        "<p>Lorem ipsum dolor sit amet consectetur. Detailed program information is not available right now.</p>",
      images: [{ url: img1 }],
    },
    {
      _id: "fallback-program-2",
      title: "Program Name 2",
      description:
        "<p>Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu viverra.</p>",
      ProgramDetails:
        "<p>Lorem ipsum dolor sit amet consectetur. Detailed program information is not available right now.</p>",
      images: [{ url: img2 }],
    },
    {
      _id: "fallback-program-3",
      title: "Program Name 3",
      description:
        "<p>Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu viverra.</p>",
      ProgramDetails:
        "<p>Lorem ipsum dolor sit amet consectetur. Detailed program information is not available right now.</p>",
      images: [{ url: img3 }],
    },
  ],
};

const ProgramComponentWrapper = styled(Box)({
  overflowX: "hidden",
  overflowY: "visible",
});

const GridWrapper = styled(Grid)({
  alignItems: "center",
  marginTop: "45px",
});

const ProgramListWrapper = styled(Container)({
  position: "relative",
  padding: "80px 0",
  maxWidth: "1140px !important",
  overflowX: "hidden",
});

const ProgramCard = styled(Box)({
  position: "relative",
  height: "436px",
  overflow: "hidden",
});

const ProgramTitle = styled(Typography)({
  fontFamily: "PT Sans",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: 20,
  textTransform: "capitalize",
  color: "#FFFFFF",
  zIndex: 25,
  position: "absolute",
  left: "28px",
  bottom: "85px",
});

const ProgramDescription = styled(Typography)({
  fontFamily: "Noto Sans",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: 15,
  zIndex: 24,
  color: "#FFFFFF",
  position: "absolute",
  left: "24px",
  bottom: "25px",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
});

const EmptyMessage = styled(Typography)({
  position: "absolute",
  top: "56px",
  left: "14px",
  fontFamily: "cursive",
  fontSize: 14,
});

const stripHtml = (value = "") =>
  value
    .replace(/&nbsp;/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const normalizeProgram = (item, fallbackImage) => ({
  ...item,
  routeId: item?._id || item?.id,
  heading: item?.title || item?.heading,
  image: item?.images?.[0]?.url || item?.image || fallbackImage,
});


export const getProgramsArray = (programData) => {
  return Array.isArray(programData?.programs)
    ? programData.programs
    : [];
};

function ProgramComponent() {
  const navigate = useNavigate();
  const { data: programResponse } = useQuery({
    queryKey: ["programsPage"],
    queryFn: getPrograms,
  });

  const programData = programResponse?.data;
  const programs = getProgramsArray(programData);
  const isProgramEmpty = programResponse?.empty || programs.length === 0;
  const programContent = isProgramEmpty ? fallbackProgramsSection : programData;
  const allPrograms = Array.isArray(programContent?.programs)
    ? programContent.programs
    : fallbackProgramsSection.programs;
  const fallbackImages = [img1, img2, img3];

  const [visibleCount, setVisibleCount] = useState(3);
  const activePrograms = allPrograms.slice(0, visibleCount);
  const hasMore = visibleCount < allPrograms.length;

  const loadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <ProgramComponentWrapper>
      <Banner
        heading={programContent?.heading || "Programs"}
        subHeading={programContent?.subheading || "Programs"}
      />

      <ProgramListWrapper maxWidth="lg">
        {isProgramEmpty && (
          <EmptyMessage color="secondary">
            !! Program section content is not available right now.
          </EmptyMessage>
        )}

        <InfiniteScroll
          dataLength={activePrograms.length}
          next={loadMore}
          hasMore={hasMore}
          loader={<Typography sx={{ textAlign: 'center', py: 4, color: '#fff' }}>Loading more programs...</Typography>}
          endMessage={<Typography sx={{ textAlign: 'center', py: 4, color: '#fff' }}>You've seen all programs!</Typography>}
        >
          <GridWrapper container columnSpacing={"32px"} rowSpacing={8}>
            {activePrograms.map((item, index) => {
              const normalizedProgram = normalizeProgram(
                item,
                fallbackImages[index % fallbackImages.length],
              );

              return (
                  <Grid
                      item
                      size={{ xs: 12, sm: 6, lg: 4 }}
                      key={normalizedProgram?._id || `program-${index}`}
                      sx={{ cursor: "pointer" }}
                  >
                  <ProgramCard
                    role="button"
                    tabIndex={0}
                    onClick={() =>
                      navigate(`/program/${index + 1}`, {
                        state: {
                          program: normalizedProgram,
                          items: allPrograms,
                        },
                      })
                    }
                  >
                    <ProgramImageCardsTable items={normalizedProgram?.images} />
                    <ProgramTitle>{normalizedProgram.heading}</ProgramTitle>
                    <ProgramDescription>
                      {stripHtml(normalizedProgram?.description)}
                    </ProgramDescription>
                  </ProgramCard>
                </Grid>
              );
            })}
          </GridWrapper>
        </InfiniteScroll>
      </ProgramListWrapper>
    </ProgramComponentWrapper>
  );
}

export default ProgramComponent;

