import Container from "@mui/material/Container";
import Big from "../../../Uploads/Big.png";
import Para from "./Para";
import MainButton from "./MainButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import cloud from "../../../Uploads/cloud.png";
import star from "../../../Uploads/star.png";
import bigStar from "../../../Uploads/bigStar.png";
import lStar from "../../../Uploads/lStar.png";
import curveArrow from "../../../Uploads/curveArrow.png";
import butterfly from "../../../Uploads/butterfly.png";
import wave from "../../../Uploads/wave.png";
import miniStar from "../../../Uploads/miniStar.png";

const Layer1 = () => {
  return (
    <Container
      sx={{
        bgcolor: "#FFFAFA",
        position: "relative",
         p: "120px 0 350px"
      }}
      maxWidth="xl"
    >
      <Container maxWidth="lg" sx={{}}>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid item size={{ lg: 4.5 }}  sx={{ position: "relative" }}>
            <Typography variant="h3" color="myRed">
              PLAY LIKE A PRO
            </Typography>
            <Typography
              variant="h2"
              color="dark"
              sx={{
                fontSize: "66px",
              }}
            >
              Never Miss a
            </Typography>
            <Typography
              variant="h2"
              color="myRed"
              sx={{
                fontSize: "66px",
              }}
            >
              Chance To Play
            </Typography>
            <Box
              sx={{
                p: "20px 0 50px",
              }}
            >
              <Para para=" Lorem ipsum dolor sit amet consectetur. Nisl malesuada eu aenean adipiscing augue arcu facilisis. Nulla dui ullamcorper maecenas non nunc nam." />
            </Box>
            <MainButton text="SIGN UP NOW" />
            <Box
              component="img"
              src={cloud}
              alt="cloud"
              sx={{
                position: "absolute",
                top: "-75px",
                left: "-127px",
              }}
            />
            <Box
              component="img"
              src={star}
              alt="star"
              sx={{
                position: "absolute",
                top: "-39px",
                right: "-56px",
              }}
            />
            <Box
              component="img"
              src={curveArrow}
              alt="Arrow"
              sx={{
                position: "absolute",
                bottom: "-90px",
                right: "-60px",
              }}

            />
             <Box
              component="img"
              src={miniStar}
              alt="miniStar"
              sx={{
                position: "absolute",
                top: "-7%",
                right: "41%",
              }}
            />
             <Box
              component="img"
              src={miniStar}
              alt="miniStar"
              sx={{
                position: "absolute",
                bottom: "-26%",
                right: "103%",
              }}
            />
          </Grid>
          <Grid item size={{ lg: 5.5 }} sx={{ position: "relative" }}>
            <Box
              component="img"
              src={Big}
              sx={{
                objectFit: "cover",
              }}
              alt="big pic"
            />
            <Box
              component="img"
              src={cloud}
              alt="cloud"
              sx={{
                position: "absolute",
                bottom: "-75px",
                right: "-37px",
              }}
            />
            <Box
              component="img"
              src={bigStar}
              alt="star"
              sx={{
                position: "absolute",
                top: "193px",
                right: "-191px",
              }}
            />
            <Box
              component="img"
              src={lStar}
              alt="little star"
              sx={{
                position: "absolute",
                top: "3px",
                right: "-106px",
              }}
            />
            <Box
              component="img"
              src={butterfly}
              alt="butterfly"
              sx={{
                position: "absolute",
                top: "-100px",
                right: "41%",
              }}
            />

          </Grid>
        </Grid>
      </Container>
      <Box
        component="img"
        src={wave}
        alt="wave"
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width:'calc(100% + 1px)'

        }}
      />


    </Container>

  );
};

export default Layer1;
