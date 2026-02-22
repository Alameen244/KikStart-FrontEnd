import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import kikstart from "../Header/Images/KIKSTART.png";
import sms from "../../assets/sms.png";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import wave from "../../assets/revwave.png";
const Footer = () => {
  return (
    <Box
      component="footer"
      maxWidth="xl"
      sx={{
        bgcolor: "#FFFAFA",
        p: { md: "240px 0 80px" },
        m: "0 auto",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item size={{ xs: 12, md: 4 }}>
            <Box component="img" src={kikstart} alt="kikstart logo" />

            <Typography
              variant="body1"
              color="semiDark"
              sx={{ m: "20px 0 30px" }}
            >
              Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at
              interdum eu viverra.
            </Typography>
            <Typography
              color="semiDark"
              sx={{
                fontFamily: "Noto Sans",
                fontSize: "16px",
                fontWeight: "400",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box component="img" src={sms} alt="sms" />
              info@KikStartKids.com
            </Typography>
          </Grid>

          <Grid item size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle2" color="dark">
              Quick Links
            </Typography>
            <Typography
              variant="body1"
              color="semiDark"
              sx={{ fontSize: "16px", mt: "25px" }}
            >
              About Us
            </Typography>
            <Typography
              variant="body1"
              color="semiDark"
              sx={{ fontSize: "16px", mt: "25px" }}
            >
              Programs
            </Typography>
            <Typography
              variant="body1"
              color="semiDark"
              sx={{ fontSize: "16px", mt: "25px" }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="body1"
              color="semiDark"
              sx={{ fontSize: "16px", mt: "25px" }}
            >
              Faqs
            </Typography>
          </Grid>

          <Grid item size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle2" color="dark">
              Legal
            </Typography>
            <Typography
              variant="body1"
              color="semiDark"
              sx={{ fontSize: "16px", mt: "25px" }}
            >
              About Us
            </Typography>
            <Typography
              variant="body1"
              color="semiDark"
              sx={{ fontSize: "16px", mt: "25px" }}
            >
              Terms and Conditions
            </Typography>
            <Typography
              variant="body1"
              color="semiDark"
              sx={{ fontSize: "16px", mt: "25px" }}
            >
              Privacy Policy
            </Typography>
          </Grid>

          <Grid item size={{ xs: 12, md: 3 }}>
            <Typography variant="subtitle2" color="dark">
              Newsletter
            </Typography>
            <Typography
              variant="body1"
              color="semiDark"
              sx={{ fontSize: "16px", m: "25px 0 15px" }}
            >
              Enter the email to subscribe our newsletter
            </Typography>
            <TextField
              id="outlined-password-input"
              label="Enter Email"
              autoComplete="current-password"
              sx={{ position: "relative" }}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <TrendingFlatIcon
                        sx={{
                          color: "white",
                          bgcolor: "#ED1C24",
                          borderRadius: "5px",
                          p: "8px 10px",
                          fontSize: "45px",
                          position: "absolute",
                          top: "9%",
                          right: "6px",
                        }}
                      />
                    </InputAdornment>
                  ),
                },
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
          position: "absolute",
          top: "0px",
          left: "0px",
        }}
      />
    </Box>
  );
};

export default Footer;
