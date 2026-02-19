import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import miniStar from "../../../Uploads/miniStar.png";
import star from "../../../Uploads/star.png";
import bigStar from "../../../Uploads/bigStar.png";
import lStar from "../../../Uploads/lStar.png";
import cloud from "../../../Uploads/cloud.png";
import wave from "../../../Uploads/wave.png";

const CommonLayer = (props) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        bgcolor: "#FFFAFA",
        p: "130px 0 300px",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Typography variant="h1" color="dark">
          {props.heading}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "#494949" }}>
          {props.subHeading}
        </Typography>
        <Box
          component="img"
          src={star}
          alt="star"
          sx={{
            position: "absolute",
            top: "59px",
            right: "30%",
          }}
        />
        <Box
          component="img"
          src={miniStar}
          alt="miniStar"
          sx={{
            position: "absolute",
            bottom: "67%",
            left: "24%",
          }}
        />
        <Box
          component="img"
          src={cloud}
          alt="cloud"
          sx={{
            position: "absolute",
            top: "15%",
            left: "4%",
          }}
        />
        <Box
          component="img"
          src={bigStar}
          alt="star"
          sx={{
            position: "absolute",
            bottom: "31%",
            right: "-2%",
          }}
        />
        <Box
          component="img"
          src={lStar}
          alt="star"
          sx={{
            position: "absolute",
            bottom: "-50%",
            left: "12%",
          }}
        />
      </Box>

      <Box
        component="img"
        src={wave}
        alt="wave"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
      />
    </Container>
  );
};

export default CommonLayer;
