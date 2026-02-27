import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const StyledLine = styled(Box)(({ linecolor, thickness, linemaxwidth, my, mx }) => ({
  width: "100%",
  maxWidth: linemaxwidth,
  height: thickness,
  backgroundColor: linecolor,
  marginTop: my,
  marginBottom: my,
  marginLeft: mx,
  marginRight: mx,
  flexShrink: 0,
}));

const Line = ({
  color = "#E9E9E9",
  thickness = "1px",
  maxWidth = "100%",
  marginY = "0px",
  marginX = "0px",
  ...props
}) => {
  return (
    <StyledLine
      linecolor={color}
      thickness={thickness}
      linemaxwidth={maxWidth}
      my={marginY}
      mx={marginX}
      {...props}
    />
  );
};

export default Line;
