import React, { useState } from "react";
import Box from "@mui/material/Box";
import KIKSTART from "../../../assets/KIKSTART.png";
import FormHeadings from "../../FormHeadings/FormHeadings";
import OneLineField from "../../OneLineField/OneLineField";
import RedButton from "../../RedButton/RedButton";
import { sendOtp } from "../../../Apis/authApi";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const otpMutation = useMutation({
    mutationFn: sendOtp,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    const otpPromise = otpMutation.mutateAsync({ email }).then((res) => {
      navigate("/otp", { state: { email, purpose: "forgot" } });
      return res;
    });

    toast.promise(otpPromise, {
      pending: "Sending OTP...",
      success: {
        render({ data }) {
          return data?.message || "OTP sent successfully!";
        },
      },
      error: {
        render({ data }) {
          return data?.response?.data?.message || "Failed to send OTP";
        },
      },
    });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Box className="LoginForm">
      <Box className="imageBox" component={Link} to="/">
        <Box component="img" src={KIKSTART} />
      </Box>
      <Box className="Headings">
        <FormHeadings
          heading="Forgot Password?"
          subHeading="Please enter your email to reset your password"
          align="center"
        />
      </Box>
      <form onSubmit={handleSubmit}>
        <Box sx={{ marginBottom: "30px" }}>
          <OneLineField
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </Box>
        <RedButton
          text={otpMutation.isPending ? "Sending..." : "CONTINUE"}
          color="secondary"
          py="18px"
          px="53px"
          type="submit"
          disabled={otpMutation.isPending}
        />
      </form>
    </Box>
  );
};

export default ForgotPasswordForm;
