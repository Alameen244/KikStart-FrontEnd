import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import icon from "../../assets/icon.png";

const ImageWrapper = styled(Box)({
  position: "relative",
});

const FounderMainImage = styled(Box)({});
const MainImageWrapper = styled(Box)({
  width: "499px",
  height: "547px",
});

const FounderIconImage = styled(Box)({
  position: "absolute",
  top: "40.3px",
  left: "-43.3px",
  zIndex: "-1",
});

const FounderImage = (props) => {
  return (
    <ImageWrapper>
      <MainImageWrapper>
      <FounderMainImage component="img" src={props.image} alt="image" />
      </MainImageWrapper>
      <FounderIconImage component="img" src={icon} alt="icon" />
    </ImageWrapper>
  );
};

export default FounderImage;
