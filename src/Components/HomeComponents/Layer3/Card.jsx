import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Para from "../../Para/Para";
function Card(props) {
  return (
    <Box sx={{ boxShadow: 2, padding: " 15px 10px", borderRadius: "15px" }}>
      <Box sx={{}}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center", // horizontal center
            alignItems: "center",
            padding: "10px",
            margin: " 15px 0",
          }}
        >
          <Box
            component="img"
            src={props.image}
            alt="card image"
            sx={{
              objectFit: "cover",
              bgcolor: "#FFF8F8",
              borderRadius: "50%",
              p: "20px",
            }}
          />
        </Box>
        <Typography
          variant="h3"
          textAlign={props.align === "center" ? "center" : "left"}
          sx={{
            fontWeight: "bold",
            marginTop: "15px",
            fontSize: {
              xs: "16px", // mobile
              md: "20px", // desktop
            },
          }}
        >
          {props.cardHeading}
        </Typography>
        <Box
          sx={{
            padding: "10px",
            marginBottom: "15px",
            fontSize: "13px",
          }}
        >
          <Para para={props.cardPara} align="center" />
        </Box>
      </Box>
    </Box>
  );
}

export default Card;
