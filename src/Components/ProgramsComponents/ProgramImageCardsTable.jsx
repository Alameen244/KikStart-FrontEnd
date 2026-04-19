import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";

const previewPalette = [
  "#CE1111",
  "#008CFF",
  "#0AB86F",
  "#D37A07",
  "#76A30C",
  "#B40A2F",
  "#236313",
  "#0044FF",
  "#DA0CDA",
];

const fallbackItems = previewPalette.slice(0, 5).map((color, index) => ({
  id: index + 1,
  title: `Slide ${index + 1}`,
  image: "",
  accentColor: color,
}));

function normalizeItems(items = []) {
  if (!Array.isArray(items) || items.length === 0) {
    return fallbackItems;
  }

  return items.slice(0, 9).map((item, index) => ({
    id: item?._id || item?.id || index,
    title: item?.title || item?.heading || `Slide ${index + 1}`,
    image:
      item?.image?.url ||
      item?.imageUrl ||
      item?.url ||
      item?.image ||
      (typeof item === "string" ? item : ""),
    accentColor:
      item?.accentColor ||
      item?.color ||
      previewPalette[index % previewPalette.length],
  }));
}

export default function ProgramImageCardsTable({ items = [] }) {
  const previewItems = normalizeItems(items);

  return (
    <PreviewShell>
      <StyledSwiper
        effect="creative"
        grabCursor
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-120%", 0, -500],
          },
          next: {
            shadow: true,
            translate: ["120%", 0, -500],
          },
        }}
        modules={[EffectCreative]}
      >
        {previewItems.map((item, _) => (
          <SwiperSlide key={item.id}>
            <SlideCard
              style={{
                background: item.image
                  ? `linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.26) 100%), url(${item.image}) center/cover`
                  : item.accentColor,

              }}
            >
            </SlideCard>
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </PreviewShell>
  );
}

const PreviewShell = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 10,
  margin: "0 auto 24px",
  overflow: "hidden",
});

const StyledSwiper = styled(Swiper)({
  width: 364,
  height: 436,
  overflow: "hidden",
  "& .swiper-slide": {
    borderRadius: 24,
  },
});

const SlideCard = styled(Box)({
  position: "relative",
  width: "100%",
  height: "100%",
  borderRadius: 24,
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 18px 40px rgba(15, 23, 42, 0.18)",
});
