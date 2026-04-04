import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Container from "@mui/material/Container";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FAQ from "../Components/FAQComponent/FAQ";
import Banner from "../Components/Banner/Banner";
import { getFAQs } from "../Apis/faqsApi";

const fallbackFaqSection = {
  heading: "FAQs",
  subheading: "FAQs",
  faqs: [
    {
      _id: "fallback-faq-1",
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Ut felis quis consectetur lacus ridiculus sit arcu. Sagittis etiam odio massa sollicitudin a in amet quis orci.",
    },
    {
      _id: "fallback-faq-2",
      question: "Vel nisl adipiscing nunc viverra integer turpis?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Etiam dolor aenean a neque integer leo libero. Tellus dictum blandit mi tempus.",
    },
  ],
};

const FAQWrapper = styled(Container)({
  marginTop: "35px",
  position: "relative",
});

const FaqWrapper = styled(Box)({});

const MainFAQWrapper = styled(Box)({});

const EmptyMessage = styled(Typography)({
  position: "absolute",
  top: "-24px",
  left: "14px",
  fontFamily: "cursive",
  fontSize: 14,
});

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);
  const { data: faqResponse } = useQuery({
    queryKey: ["faqsPage"],
    queryFn: getFAQs,
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
    <MainFAQWrapper>
      <Banner
        heading={"FAQs"}
        subHeading={ "FAQs"}
      />

      <FAQWrapper maxWidth="lg">
        {isFAQEmpty && (
          <EmptyMessage color="secondary">
            !! FAQ section content is not available right now.
          </EmptyMessage>
        )}

        <FaqWrapper>
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
      </FAQWrapper>
    </MainFAQWrapper>
  );
}

export default FAQs;
