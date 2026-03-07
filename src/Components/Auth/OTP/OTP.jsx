import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import KIKSTART from "../../../assets/KIKSTART.png";
import FormHeadings from "../../FormHeadings/FormHeadings";
import RedButton from "../../RedButton/RedButton";
import OtpInput from "./OtpInput";

const OTPWrapper = styled(Box) ({
  boxSizing: "border-box",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#FFF8F8",

  "& .OTPCard": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "20px",
    padding: "48px 56px",
    boxShadow: "0px 4px 32px rgba(0,0,0,0.10)",
    minWidth: "420px",
  },

  "& .imageBox": {
    maxWidth: "204px",
    maxHeight: "89px",
    marginBottom: "45px",
  },

  "& .Headings": {
    display: "flex",
    flexDirection: "column",
    marginBottom: "30px",
  },

  "& .phoneText": {
    fontFamily: "Noto Sans",
    fontWeight: 400,
    fontSize: 15,
    color: "#494949",
    textAlign: "center",
    marginBottom: "32px",
    "& span": {
      fontWeight: 700,
      color: "#ED1C24",
    },
  },

  "& .resendText": {
    fontFamily: "Noto Sans",
    fontWeight: 400,
    fontSize: 15,
    color: "#494949",
    textAlign: "center",
    margin: "20px 0 28px",
    "& span": {
      fontWeight: 700,
      color: "#ED1C24",
      cursor: "pointer",
    },
  },
});

const OTP = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    const regex = /[^0-9]/g;
    if (!phoneNumber) {
      setPhoneError("Phone number is required.");
      return;
    }
    if (phoneNumber.length !== 10 || regex.test(phoneNumber)) {
      setPhoneError("Please enter a valid 10-digit phone number.");
      return;
    }
    setPhoneError("");
    // Call BE API to send OTP
    setShowOtpInput(true);
  };

  const onOtpSubmit = (otp) => {
    console.log("Login Successful", otp);
  };

  return (
    <Container maxWidth="xl" disableGutters>
      <OTPWrapper>
        <Box className="OTPCard">
          <Box className="imageBox">
            <Box
              component="img"
              src={KIKSTART}
              alt="KikStart"
              sx={{ width: "100%" }}
            />
          </Box>

          <Box className="Headings">
            <FormHeadings
              heading={showOtpInput ? "Enter OTP" : "Verify Phone"}
              subHeading={
                showOtpInput
                  ? "We have sent a 4-digit OTP to your phone"
                  : "Please enter your phone number to receive an OTP"
              }
              align="center"
            />
          </Box>

          {!showOtpInput ? (
            <Box
              component="form"
              onSubmit={handlePhoneSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Box
                component="input"
                type="text"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                  if (phoneError) setPhoneError("");
                }}
                placeholder="Enter Phone Number"
                sx={{
                  width: "340px",
                  height: "56px",
                  borderRadius: "12px",
                  border: phoneError
                    ? "2px solid #ED1C24"
                    : "2px solid #E0E0E0",
                  padding: "0 20px",
                  fontFamily: "Noto Sans",
                  fontSize: "15px",
                  color: "#2B2B2B",
                  outline: "none",
                  "&:focus": {
                    borderColor: "#ED1C24",
                  },
                }}
              />
              {phoneError && (
                <Typography
                  sx={{
                    fontFamily: "Noto Sans",
                    fontSize: "13px",
                    color: "#ED1C24",
                    alignSelf: "flex-start",
                    pl: "4px",
                    mb: "8px",
                  }}
                >
                  {phoneError}
                </Typography>
              )}
              <Box sx={{ mt: phoneError ? 0 : "16px" }}>
                <RedButton
                  text="SEND OTP"
                  color="secondary"
                  py="18px"
                  px="53px"
                />
              </Box>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography className="phoneText">
                OTP sent to <span>{phoneNumber}</span>
              </Typography>

              <OtpInput length={4} onOtpSubmit={onOtpSubmit} />

              <Typography className="resendText">
                Didn't receive OTP? <span onClick={() => {}}>Resend OTP</span>
              </Typography>

              <RedButton
                text="VERIFY OTP"
                color="secondary"
                py="18px"
                px="53px"
              />
            </Box>
          )}
        </Box>
      </OTPWrapper>
    </Container>
  );
};

export default OTP;
