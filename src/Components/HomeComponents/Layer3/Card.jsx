import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Para from "../Layer1/Para";
function Card(props) {
  return (
    <Box sx={{ boxShadow: 2, padding: " 15px 10px", borderRadius: "15px" }}>
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
          }}
        />
      </Box>
      <Typography
        variant="h3"
        textAlign={props.align === "center" ? "center" : "left"}
        sx={{
          fontWeight: "bold",
          margin: "15px 0",
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
          margin: "15px 0",
        }}
      >
        <Para para={props.cardPara} align="center" />
      </Box>
    </Box>
  );
}

export default Card;
