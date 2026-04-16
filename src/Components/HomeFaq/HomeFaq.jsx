import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import FAQ from "../FAQComponent/FAQ";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import bigLogoImage from "../../assets/BigLogoHome.png";
import Headings from "../Heading/Headings";
import { getHomeFAQs } from "../../Apis/homeApi";

const fallbackFaqSection = {
  heading: "Have Question",
  subheading: "FAQS",
  faqs: [
    {
      _id: "fallback-home-faq-1",
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Diam molestie egestas eget dolor a. Tellus aliquam adipiscing ligula nulla ullamcorper quisque egestas ac.",
    },
    {
      _id: "fallback-home-faq-2",
      question: "Vel nisl adipiscing nunc viverra integer turpis?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Diam molestie egestas eget dolor a. Tellus aliquam adipiscing ligula nulla ullamcorper quisque egestas ac.",
    },
  ],
};

const HomeFaqWrapper = styled(Container)({
  marginBottom: "31px",
  marginTop: "124px",
  position: "relative",
});

const GridWrapper = styled(Grid)({
  justifyContent: "space-between",
});

const KikLogoWrapper = styled(Box)({});

const FaqWrapper = styled(Box)({});

const EmptyMessage = styled(Typography)({
  position: "absolute",
  top: "92px",
  left: "14px",
  fontFamily: "cursive",
  fontSize: 14,
});

function HomeFaq() {
  const [openIndex, setOpenIndex] = useState(null);
  const { data: faqResponse } = useQuery({
    queryKey: ["homeFaqs"],
    queryFn: getHomeFAQs,
  });

  const faqData = faqResponse?.data;
  const faqs = Array.isArray(faqData?.faqs) ? faqData.faqs : [];
  const isFAQEmpty = faqResponse?.empty || faqs.length === 0;
  const faqContent = isFAQEmpty ? fallbackFaqSection : faqData;
  const activeFAQs = Array.isArray(faqContent?.faqs)
    ? faqContent.faqs
    : fallbackFaqSection.faqs;

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <HomeFaqWrapper maxWidth="lg">
      {isFAQEmpty && (
        <EmptyMessage color="secondary">
          !! FAQ section content is not available right now.
        </EmptyMessage>
      )}

      <GridWrapper container spacing={8}>
        <Grid item size={{ lg: 6 }}>
          <FaqWrapper>
            <Headings
              subHeading={faqContent?.subheading || "FAQ S"}
              heading={faqContent?.heading || "Have Question"}
            />

            {activeFAQs.map((faq, index) => (
              <FAQ
                key={faq?._id || index}
                question={faq?.question}
                answer={faq?.answer}
                open={openIndex === index}
                onclick={() => handleToggle(index)}
              />
            ))}
          </FaqWrapper>
        </Grid>
        <Grid item size={{ lg: 6 }}>
          <KikLogoWrapper>
            <img src={bigLogoImage} alt="" />
          </KikLogoWrapper>
        </Grid>
      </GridWrapper>
    </HomeFaqWrapper>
  );
}

export default HomeFaq;
