import Box from "@mui/material/Box";
import icon from "./images/icon.png";

const FounderImage = (props) => {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box component="img" src={props.image} alt="image"></Box>
      <Box
        component="img"
        src={icon}
        alt="icon"
        sx={{
          position: "absolute",
          top: "53px",
          left: "-63px",
          zIndex: "-1",
        }}
      />
    </Box>
  );
};

export default FounderImage;
