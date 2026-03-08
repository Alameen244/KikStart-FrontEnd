import React from 'react'
import { styled } from "@mui/material/styles";
import Checkbox from '@mui/material/Checkbox';

const PageWrapper = styled("div")({
  width: "650px",
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

const TextWrapper = styled("div")({
    p: {
    fontFamily: "Noto Sans",
    fontSize: "15px",
    fontWeight: "400",
    color: "#494949",
    lineHeight: "26px",
    paddingBottom: "20px",
  },
});

const CheckboxWrapper = styled("div")({
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
    span: {
        fontFamily: "Noto Sans",
        fontSize: "15px",
        fontWeight: "400",
        color: "#494949",
    }
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


export default function WaiverForm({ next, back }) {
  return (
    <PageWrapper>
      <HeaderWrapper>
        <h2>Waiver Acceptance</h2>
        <p>Lorem ipsum dolor sit amet consectetur</p>
      </HeaderWrapper>

        <TextWrapper>
            <p>Quam in non velit malesuada arcu eget id. Id ut turpis tempor semper et in nunc aliquet. Orci cras faucibus aliquam eget orci egestas. Ut congue ut amet commodo eget. Nam eu duis imperdiet morbi orci ac tellus aenean. A pharetra at sodales praesent commodo nibh. At ac lacus morbi consectetur nisi. Vel pharetra viverra hendrerit odio eu amet elementum quam dui. Tincidunt sit ac ac interdum.<br /><br />
                Velit auctor eros egestas nunc suspendisse amet fermentum lectus. Sed tellus nulla elit proin. Sit nibh urna elit amet netus nam convallis. Diam id auctor fermentum aliquam aliquet elit in suspendisse pellentesque. Quam fusce nec enim turpis nisl. Ac nec dictumst aliquet vivamus vel orci. Iaculis aenean accumsan tortor in et id ullamcorper aenean enim. At gravida nibh ornare commodo luctus gravida pretium fermentum volutpat. Eget integer sed nunc sit.
                Lorem faucibus egestas tortor id nibh hendrerit massa tortor mi. Scelerisque nunc quis risus nunc in. Vitae at purus sit nec suspendisse donec enim senectus scelerisque. In sed risus nisl posuere molestie. Vel massa augue in fermentum.
            </p>
        </TextWrapper>

        <CheckboxWrapper>
            <Checkbox />
            <span>Accept the conditions of the waiver</span>
        </CheckboxWrapper>

      <BackButton onClick={back}>Back</BackButton>
      <NextButton onClick={next}>Next</NextButton>
    </PageWrapper>
  )
}
