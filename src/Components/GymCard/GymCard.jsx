import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Para from "../Para/Para";

const hexToRgb = (color) => {
  const normalizedColor = color.replace("#", "");
  const hexColor =
    normalizedColor.length === 3
      ? normalizedColor
          .split("")
          .map((char) => char + char)
          .join("")
      : normalizedColor;

  if (hexColor.length !== 6) {
    return null;
  }

  return {
    red: parseInt(hexColor.slice(0, 2), 16),
    green: parseInt(hexColor.slice(2, 4), 16),
    blue: parseInt(hexColor.slice(4, 6), 16),
  };
};

const rgbToHsl = ({ red, green, blue }) => {
  const r = red / 255;
  const g = green / 255;
  const b = blue / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const lightness = (max + min) / 2;
  const delta = max - min;

  if (delta === 0) {
    return { hue: 0, saturation: 0, lightness };
  }

  const saturation =
    lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

  let hue = 0;
  if (max === r) {
    hue = (g - b) / delta + (g < b ? 6 : 0);
  } else if (max === g) {
    hue = (b - r) / delta + 2;
  } else {
    hue = (r - g) / delta + 4;
  }

  return { hue: hue / 6, saturation, lightness };
};

const hslToRgb = ({ hue, saturation, lightness }) => {
  if (saturation === 0) {
    const value = Math.round(lightness * 255);
    return { red: value, green: value, blue: value };
  }

  const hueToRgb = (p, q, t) => {
    let temp = t;
    if (temp < 0) temp += 1;
    if (temp > 1) temp -= 1;
    if (temp < 1 / 6) return p + (q - p) * 6 * temp;
    if (temp < 1 / 2) return q;
    if (temp < 2 / 3) return p + (q - p) * (2 / 3 - temp) * 6;
    return p;
  };

  const q =
    lightness < 0.5
      ? lightness * (1 + saturation)
      : lightness + saturation - lightness * saturation;
  const p = 2 * lightness - q;

  return {
    red: Math.round(hueToRgb(p, q, hue + 1 / 3) * 255),
    green: Math.round(hueToRgb(p, q, hue) * 255),
    blue: Math.round(hueToRgb(p, q, hue - 1 / 3) * 255),
  };
};

const getHoverShadowColor = (bgcolor) => {
  if (!bgcolor) {
    return "rgba(0, 0, 0, 0.18)";
  }

  try {
    const rgbColor = hexToRgb(bgcolor);

    if (!rgbColor) {
      return "rgba(0, 0, 0, 0.18)";
    }

    const hslColor = rgbToHsl(rgbColor);
    const accentColor = hslToRgb({
      hue: hslColor.hue,
      saturation: Math.max(hslColor.saturation, 0.65),
      lightness: Math.min(hslColor.lightness * 0.55, 0.58),
    });

    return `rgba(${accentColor.red}, ${accentColor.green}, ${accentColor.blue}, 0.42)`;
  } catch (_) {
    return "rgba(0, 0, 0, 0.18)";
  }
};

const GymCardWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "bgcolor",
})(({ bgcolor }) => ({
  background: "#FFFFFF",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  borderRadius: "20px",
  padding: "10px",
  transition: "all 0.3s ease",
  cursor: "pointer",
  height: "100%",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: `0px 12px 28px ${getHoverShadowColor(bgcolor)}`,
  },
}));

const CardHeading = styled(Box)({
  textAlign: "center",
  "& h3": {
    fontFamily: "PT Sans",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 20,
    textTransform: "capitalize",
    color: "#2B2B2B",
    margin: 0,
  },
});

const CardPara = styled(Box)({
  margin: "10px 0 30px 0",
  "& > div": {
    minHeight: "72px",
  },
  "& p": {
    fontFamily: "Noto Sans",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 15,
    textAlign: "center",
    color: "#494949",
  },
});

const CardImgBackground = styled(Box, {
  shouldForwardProp: (prop) => prop !== "bgcolor",
})(({ bgcolor }) => ({
  backgroundColor: bgcolor,
  height: "66px",
  width: "66px",
  borderRadius: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const CardImg = styled("img")({
  width: "30px",
  height: "30px",
  objectFit: "contain",
});

const ImageSection = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "32px 0 22px 0",
});

const GymCard = (props) => {
  const [imageSrc, setImageSrc] = useState(props.cardImage || "");

  useEffect(() => {
    setImageSrc(props.cardImage || "");
  }, [props.cardImage]);

  return (
    <GymCardWrapper bgcolor={props.bgcolor}>
      <ImageSection>
        <CardImgBackground bgcolor={props.bgcolor}>
          <CardImg
            src={imageSrc}
            alt={props.cardHeading || "Gym card icon"}
            onError={() => {
              if (props.fallbackImage && imageSrc !== props.fallbackImage) {
                setImageSrc(props.fallbackImage);
              }
            }}
          />
        </CardImgBackground>
      </ImageSection>
      <CardHeading>
        <h3>{props.cardHeading}</h3>
      </CardHeading>
      <CardPara>
        <Para para={props.cardPara} align="center" />
      </CardPara>
    </GymCardWrapper>
  );
};

export default GymCard;
