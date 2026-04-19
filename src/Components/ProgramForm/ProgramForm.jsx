import React from 'react'
import { styled } from "@mui/material/styles";
import Details from '../../Pages/Details';

const PageWrapper = styled("div")({
  width: "583px",
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

const DetailsWrapper = styled("div")({
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
});

const ProgramWrapper = styled("div")({
    display: "flex",
   p: {
     fontFamily: "Noto Sans",
    fontSize: "14px",
    fontWeight: "400",
    color: "#B3B3B3",
    },
    h5: {
        fontFamily: "Noto Sans",
        fontSize: "16px",
        fontWeight: "400",
        color: "#2B2B2B",
    }
});

const DurationWrapper = styled("div")({
    display: "flex",
    p: {
     fontFamily: "Noto Sans",
    fontSize: "14px",
    fontWeight: "400",
    color: "#B3B3B3",
    },
     h5: {
        fontFamily: "Noto Sans",
        fontSize: "16px",
        fontWeight: "400",
        color: "#2B2B2B",
    }
});

const TextWrapper = styled("div")({
    p: {
    fontFamily: "Noto Sans",
    fontSize: "15px",
    fontWeight: "400",
    color: "#494949",
    lineHeight: "26px",
    paddingBottom: "20px",
  },
  h5: {
    fontFamily: "Noto Sans",
    fontSize: "16px",
    fontWeight: "700",
    color: "#2B2B2B",
    paddingBottom: "10px",
  },
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

const ProgramForm = ({ back }) => {
  return (
    <PageWrapper>
          <HeaderWrapper>
              <h2>Program Details</h2>
              <p>Lorem ipsum dolor sit amet consectetur</p>
          </HeaderWrapper>

          <DetailsWrapper>
              <ProgramWrapper>
                  <p>Program Name:</p>
                  <h5>Program Name 01</h5>
              </ProgramWrapper>
              <DurationWrapper>
                  <p>Program Duration:</p>
                  <h5>2 hours</h5>
              </DurationWrapper>
          </DetailsWrapper>

          <TextWrapper>
              <h5>Program Details</h5>
              <p>Quam in non velit malesuada arcu eget id. Id ut turpis tempor semper et in nunc aliquet. Orci cras faucibus aliquam eget orci egestas. Ut congue ut amet commodo eget. Nam eu duis imperdiet morbi orci ac tellus aenean. A pharetra at sodales praesent commodo nibh. At ac lacus morbi consectetur nisi. Vel pharetra viverra hendrerit odio eu amet elementum quam dui. Tincidunt sit ac ac interdum.<br /><br />
                  Velit auctor eros egestas nunc suspendisse amet fermentum lectus. Sed tellus nulla elit proin. Sit nibh urna elit amet netus nam convallis. Diam id auctor fermentum aliquam aliquet elit in suspendisse pellentesque. Quam fusce nec enim turpis nisl. Ac nec dictumst aliquet vivamus vel orci.
              </p>
          </TextWrapper>

          <BackButton onClick={back}>Back</BackButton>
          <NextButton>Next</NextButton>
      </PageWrapper>
    )
}

export default ProgramForm;
