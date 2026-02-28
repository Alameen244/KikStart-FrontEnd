import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import star from "./images/star.png";

const Wrapper = styled(Box)({
    position: "relative",
    height: "565px",
    width:"528px"
});

const BigImageWrapper = styled(Box)({
 width: "375px",
  height: "473px",
});

const BigImage = styled(Box)({
maxWidth: "100%",
});

const SmallImageWrapper = styled(Box)({
  position: "absolute",
  bottom: "0px",
    right: "32px",
   width: "246px",
  height: "254px",
});

const SmallImage = styled(Box)({
    maxWidth: "100%",
});

const StarImage = styled(Box)({
  position: "absolute",
  right: "0px",
  top: "123px",
  zIndex: -1,
});

export default function ImageAfterImage(props) {
  return (
    <Wrapper>
      <BigImageWrapper>
        <BigImage component="img" src={props.bigImage} />
      </BigImageWrapper>
      <SmallImageWrapper>
        <SmallImage component="img" src={props.smallImage} />
      </SmallImageWrapper>
      <StarImage component="img" src={star} />
    </Wrapper>
  );
}
