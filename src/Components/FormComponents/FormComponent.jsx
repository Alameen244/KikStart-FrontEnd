import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Stepper from "../Stepper/Stepper";
import ChildrenForm from "../ChildrenForm.jsx/ChildrenForm";

const LayerWrapper = styled("div")({});

const LayerContainer = styled(Container)({});

const ContentWrapper = styled(Box)({
  justifyContent: "center",
  display: "flex",
  border: "1px solid #E5E5E5",
  borderRadius: "30px",
  padding: "0px 20px",
});

const Headingwrapper = styled("div")({
  textAlign: "center",
  paddingTop: "80px",
  paddingBottom: "50px",
  h2: {
    fontFamily: "PT Sans",
    fontSize: "26px",
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

const ContentGrid = styled(Grid)({});

export default function FormComponent() {
  return (
    <LayerWrapper>
      <LayerContainer>
        <Headingwrapper>
          <h2>Fill the form</h2>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </Headingwrapper>
        <ContentWrapper>
          <ContentGrid container spacing={4}>
            <Grid size={{ lg: 4 }}>
              <Stepper activeStep={0} />
            </Grid>

            <Grid size={{ lg: 8 }}>
              <ChildrenForm />
            </Grid>
          </ContentGrid>
        </ContentWrapper>
      </LayerContainer>
    </LayerWrapper>
  );
}
