import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Stepper from "./Stepper";
import ChildrenForm from "./ChildrenForm";

const LayerWrapper = styled("div")({});

const LayerContainer = styled(Container)({});

const ContentWrapper = styled(Box)({
  marginTop: "32px",
  justifyContent: "center",
  display: "flex",
  border: "1px solid #E5E5E5",
  borderRadius: "30px",
  padding: "20px",
});

const ContentGrid = styled(Grid)({});

export default function Layer1() {
  return (
    <LayerWrapper>
      <LayerContainer>
        <ContentWrapper>
          <ContentGrid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Stepper activeStep={0} />
            </Grid>

            <Grid item xs={12} md={8}>
              <ChildrenForm />
            </Grid>
          </ContentGrid>
        </ContentWrapper>
      </LayerContainer>
    </LayerWrapper>
  );
}
