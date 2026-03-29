import { useState, useRef, useEffect } from "react";
import OneLineField from "../../OneLineField/OneLineField";
import PaswordField from "../../PasswordField/PaswordField";
import KIKSTART from "../../../assets/KIKSTART.png";
import FormHeadings from "../../FormHeadings/FormHeadings";
import {
  Box,
  styled,
  Typography,
  TextField,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RedButton from "../../RedButton/RedButton";
import gps from "../../../assets/gps.png";
import { toast, Zoom } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { register, sendOtp } from "../../../Apis/authApi";
import Cookies from "js-cookie";
import { useAuth } from "../../../Context/AuthContext";
import AuthSocialOptions from "../AuthSocialOptions/AuthSocialOptions";
// ── Page wrapper with subtle warm background ───────────────────
const PageWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "embeddedMode",
})(({ embeddedMode }) => ({
  minHeight: embeddedMode ? "auto" : "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingBottom: embeddedMode ? 0 : "48px",
}));

// ── Top section (logo + main heading) — untouched ─────────────
const TopSection = styled(Box, {
  shouldForwardProp: (prop) => prop !== "embeddedMode",
})(({ embeddedMode }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: embeddedMode ? "20px" : "32px",
  paddingBottom: "8px",
  "& .figure": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "12px",
  },
  "& .figure img": {
    maxHeight: "100%",
    objectFit: "contain",
    textAlign: "center",
  },
}));

// ── Card container wrapping tabs + form ───────────────────────
const FormCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== "embeddedMode",
})(({ embeddedMode }) => ({
  width: "100%",
  maxWidth: embeddedMode ? "100%" : "620px",
  background: "#ffffff",
  borderRadius: "24px",
  boxShadow: "0 4px 32px rgba(237, 28, 36, 0.07), 0 1px 8px rgba(0,0,0,0.06)",
  overflow: "hidden",
  marginTop: embeddedMode ? 0 : "8px",
}));

// ── Progress Tabs ──────────────────────────────────────────────
const TabsWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  position: "relative",
  borderBottom: "2px solid #f0f0f0",
  background: "#fafafa",
});

const Tab = styled(Box)(({ active, passed }) => ({
  fontFamily: "'Noto Sans', sans-serif",
  fontSize: "13px",
  fontWeight: active ? 700 : 400,
  color: active ? "#ED1C24" : passed ? "#ED1C24" : "#b0b0b0",
  padding: "14px 22px",
  position: "relative",
  cursor: "default",
  whiteSpace: "nowrap",
  transition: "color 0.3s ease",
  letterSpacing: active ? "0.01em" : "normal",
}));

const TabIndicator = styled(Box)({
  position: "absolute",
  bottom: "-2px",
  height: "2px",
  background: "#ED1C24",
  borderRadius: "2px",
  transition:
    "left 0.35s cubic-bezier(0.4, 0, 0.2, 1), width 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
});

// ── Form body inside card ──────────────────────────────────────
const FormBody = styled(Box)({
  padding: "32px 60px 28px",
});

// ── Step heading accent ────────────────────────────────────────
const StepHeadingWrapper = styled(Box)({
  marginBottom: "24px",
  borderLeft: "3px solid #ED1C24",
  paddingLeft: "12px",
});

// ── Form fields column ─────────────────────────────────────────
const FormContent = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  alignItems: "stretch",
});

// ── Styled Location TextField ──────────────────────────────────
const LocationTextField = styled(TextField)({
  width: "100%",
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#ED1C24",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "15px",
    "& fieldset": { borderColor: "#B3B3B3" },
    "&:hover fieldset": { borderColor: "#B3B3B3" },
    "&.Mui-focused fieldset": { borderColor: "#B3B3B3" },
  },
});

// ── Step Dots ──────────────────────────────────────────────────
const DotsWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  gap: "8px",
  paddingTop: "20px",
  paddingBottom: "28px",
  background: "#fafafa",
  borderTop: "1px solid #f5f5f5",
});

const Dot = styled(Box)(({ active }) => ({
  height: "8px",
  width: active ? "28px" : "8px",
  borderRadius: "99px",
  background: active ? "#ED1C24" : "#e0e0e0",
  transition: "width 0.35s ease, background 0.3s ease",
}));

// ── Slide Wrapper ──────────────────────────────────────────────
const SlideWrapper = styled(Box)(({ slidedir }) => ({
  width: "100%",
  animation: `${slidedir === "forward" ? "slideInRight" : "slideInLeft"} 0.3s ease`,
  "@keyframes slideInRight": {
    from: { opacity: 0, transform: "translateX(32px)" },
    to: { opacity: 1, transform: "translateX(0)" },
  },
  "@keyframes slideInLeft": {
    from: { opacity: 0, transform: "translateX(-32px)" },
    to: { opacity: 1, transform: "translateX(0)" },
  },
}));

// ── Checkbox text ──────────────────────────────────────────────
const CheckboxText = styled(Typography)({
  fontFamily: "'Noto Sans', sans-serif",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "15px",
  color: "#494949",
  lineHeight: 1.4,
  "& a": {
    color: "#ED1C24",
    textDecoration: "none",
    "&:hover": { textDecoration: "underline" },
  },
});

// ── Data ──────────────────────────────────────────────────────
const stepTabs = ["Personal Info", "Location & Code", "Set Password"];

const steps = [
  [
    { Label: "Full Name", type: "text", value: "name" },
    { Label: "Email", type: "email", value: "email" },
    { Label: "Phone", type: "tel", value: "phone" },
  ],
  [], // handled separately (Location + PassCode with GPS)
  [
    { Label: "Desired Password", type: "password", value: "password" },
    { Label: "Confirm Password", type: "password", value: "confirmPassword" },
  ],
];

const stepHeadings = [
  {
    heading: "Tell us about you",
    subHeading: "Step 1 of 3 — Personal details",
  },
  { heading: "Where are you?", subHeading: "Step 2 of 3 — Location & code" },
  {
    heading: "Secure your account",
    subHeading: "Step 3 of 3 — Set your password",
  },
];

// ── Component ─────────────────────────────────────────────────
const SignUpForm = ({ embedded = false }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState("forward");
  const [animKey, setAnimKey] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [gpsLoading, setGpsLoading] = useState(false);
  const tabRefs = useRef([]);
  const tabsWrapperRef = useRef(null);
  const [checked, setChecked] = useState(false);

  const [formData, setFormData] = useState(() => {
    const saved = sessionStorage.getItem("signUpFormData");
    return saved
      ? JSON.parse(saved)
      : {
          name: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
          location: "",
          passCode: "",
        };
  });
  // Save to sessionStorage whenever formData changes
  useEffect(() => {
    sessionStorage.setItem("signUpFormData", JSON.stringify(formData));
  }, [formData]);
  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;

  const navigate = useNavigate();
  const { refreshAuth } = useAuth();
  const signUpMutation = useMutation({
    mutationFn: register,
  });
  const sendOtpMutation = useMutation({
    mutationFn: sendOtp,
  });

  const goTo = (nextStep, dir) => {
    setDirection(dir);
    setAnimKey((k) => k + 1);
    setCurrentStep(nextStep);
  };

  useEffect(() => {
    const activeTab = tabRefs.current[currentStep];
    const wrapper = tabsWrapperRef.current;
    if (activeTab && wrapper) {
      const tabRect = activeTab.getBoundingClientRect();
      const wrapperRect = wrapper.getBoundingClientRect();
      setIndicatorStyle({
        left: tabRect.left - wrapperRect.left,
        width: tabRect.width,
      });
    }
  }, [currentStep]);

  const handleGpsClick = () => {
    if (!navigator.geolocation) return;
    setGpsLoading(true);
    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${coords.latitude}&lon=${coords.longitude}&format=json`,
            { headers: { "Accept-Language": "en" } },
          );
          const data = await res.json();
          const addr = data.address || {};
          const city =
            addr.city ||
            addr.town ||
            addr.village ||
            addr.county ||
            addr.state ||
            "Unknown location";
          const pincode = addr.postcode || "";
          setFormData({
            ...formData,
            location: city,
            passCode: pincode,
          });
        } catch {
          setFormData({
            ...formData,
            location: "Unable to fetch location",
            passCode: "",
          });
        } finally {
          setGpsLoading(false);
        }
      },
      () => {
        setGpsLoading(false);
      },
    );
  };

  const handleContinue = () => {
    if (currentStep === 0) {
      // First step: validate required fields
      if (!formData.name || !formData.phone || !formData.email) {
        toast.error("Please fill in all required fields");
        return;
      }

      if (!formData.email.includes("@")) {
        toast.error("Please enter a valid email address");
        return;
      }

      if (formData.phone.length < 10 || !/^\d+$/.test(formData.phone)) {
        toast.error("Please enter a valid phone number");
        return;
      }

      if (formData.phone.length > 10) {
        toast.error("Phone number can not be more than 10 digits");
        return;
      }
    }

    if (currentStep === 1) {
      // Second step: validate required fields
      if (!formData.location || !formData.passCode) {
        toast.error("Please fill in all required fields");
        toast.info("click on the gps icon to get your location", {
          theme: "dark",
          transition: Zoom,
          delay: 500,
        });
        return;
      }

      if (!/^\d+$/.test(formData.passCode)) {
        toast.error("Please enter a valid pass code");
        return;
      }
    }

    goTo(currentStep + 1, "forward");
  };
  const handleBack = () => goTo(currentStep - 1, "backward");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();

    if (!formData.password || !formData.confirmPassword) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Password validation - same as backend schema
    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }

    if (!/[A-Z]/.test(formData.password)) {
      toast.error("Password must contain at least one uppercase letter");
      return;
    }

    if (!/[a-z]/.test(formData.password)) {
      toast.error("Password must contain at least one lowercase letter");
      return;
    }

    if (!/[0-9]/.test(formData.password)) {
      toast.error("Password must contain at least one number");
      return;
    }

    // Password match validation
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (!checked) {
      toast.error("Please agree to the terms and conditions");
      return;
    }

    const signUpPromise = signUpMutation.mutateAsync(formData).then(async (res) => {
      Cookies.set("token", res.data.token, { expires: 7 });
      await refreshAuth();
      localStorage.setItem("RegisterName", res.data.user.name);
      sessionStorage.removeItem("signUpFormData");

      await sendOtpMutation.mutateAsync({ email: formData.email });
      navigate("/otp", { state: { email: formData.email } });
      return res;
    });

    toast.promise(signUpPromise, {
      pending: "Creating account...",
      success: {
        render({ data }) {
          return data?.message || "Sign up successful! Please verify OTP.";
        },
      },
      error: {
        render({ data }) {
          const message =
            data?.response?.data?.message || "Sign up failed. Please try again.";
          if (message.toLowerCase().includes("user already exists")) {
            return "User already exists! Please login instead.";
          }
          if (message.toLowerCase().includes("user already exist but not verified")) {
            navigate("/otp", { state: { email: formData.email } });
            return "User is not verified! Please verify your email first.";
          }
          return message;
        },
      },
    });
  };
  return (
    <PageWrapper embeddedMode={embedded}>
      {/* ── Logo + Main Heading (untouched) ── */}
      <TopSection embeddedMode={embedded}>
        <Box className="figure" component={Link} to="/">
          <Box component="img" src={KIKSTART} alt="KIKSTART" />
        </Box>
        <Box sx={{ paddingBottom: "8px" }}>
          <FormHeadings
            heading="Sign Up"
            subHeading="Please fill this form to create your account."
            align="center"
          />
        </Box>
      </TopSection>

      {/* ── Form Card ── */}
      <FormCard embeddedMode={embedded}>
        {/* Progress Tabs */}
        <TabsWrapper ref={tabsWrapperRef}>
          {stepTabs.map((label, i) => (
            <Tab
              key={i}
              ref={(el) => (tabRefs.current[i] = el)}
              active={i === currentStep ? 1 : 0}
              passed={i < currentStep ? 1 : 0}
            >
              {label}
            </Tab>
          ))}
          <TabIndicator
            sx={{ left: indicatorStyle.left, width: indicatorStyle.width }}
          />
        </TabsWrapper>

        {/* Animated Step Content */}
        <FormBody>
          <SlideWrapper key={animKey} slidedir={direction}>
            {/* Step Heading with red left accent */}
            <StepHeadingWrapper>
              <FormHeadings
                heading={stepHeadings[currentStep].heading}
                subHeading={stepHeadings[currentStep].subHeading}
                align="left"
              />
            </StepHeadingWrapper>

            <FormContent onSubmit={handleSignUpSubmit}>
              {currentStep === 1 ? (
                <>
                  {/* Location field with GPS icon */}
                  <LocationTextField
                    label="Location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Access your location"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          {gpsLoading ? (
                            <CircularProgress
                              size={20}
                              sx={{ color: "#ED1C24" }}
                            />
                          ) : (
                            <Box
                              component="img"
                              src={gps}
                              alt="GPS"
                              onClick={handleGpsClick}
                              sx={{
                                width: 24,
                                height: 24,
                                cursor: "pointer",
                                objectFit: "contain",
                                "&:hover": { opacity: 0.75 },
                              }}
                            />
                          )}
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": { height: 86 },
                    }}
                  />
                  {/* Pass Code field */}
                  <LocationTextField
                    label="Pass Code"
                    name="passCode"
                    value={formData.passCode}
                    onChange={handleChange}
                    sx={{
                      "& .MuiOutlinedInput-root": { height: 86 },
                    }}
                  />
                </>
              ) : currentStep === 2 ? (
                steps[currentStep].map((field, index) =>
                  index === 0 ? (
                    <PaswordField
                      key={index}
                      label={field.Label}
                      name={field.value}
                      value={formData[field.value]}
                      onChange={handleChange}
                    />
                  ) : (
                    <OneLineField
                      key={index}
                      label={field.Label}
                      type={field.type}
                      name={field.value}
                      width="100%"
                      value={formData[field.value]}
                      onChange={handleChange}
                    />
                  ),
                )
              ) : (
                steps[currentStep].map((field, index) => (
                  <OneLineField
                    key={index}
                    label={field.Label}
                    type={field.type}
                    name={field.value}
                    width="100%"
                    value={formData[field.value]}
                    onChange={handleChange}
                  />
                ))
              )}

              {/* Checkbox only on last step */}
              {isLastStep && (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={(e) => setChecked(e.target.checked)}
                      sx={{
                        color: "#ED1C24",
                        "&.Mui-checked": { color: "#ED1C24" },
                      }}
                    />
                  }
                  label={
                    <CheckboxText>
                      I agree to the <a href="#">Terms of Service</a> and
                      <a href="#">Privacy Policy</a>
                    </CheckboxText>
                  }
                  sx={{ alignItems: "center", margin: 0 }}
                />
              )}

              {/* Buttons */}
              <Box
                sx={{
                  display: "flex",
                  gap: "12px",
                  justifyContent: "center",
                  paddingTop: "8px",
                }}
              >
                {!isFirstStep && (
                  <RedButton
                    text="← Back"
                    color="primary"
                    py="16px"
                    px="48px"
                    onClick={handleBack}
                  />
                )}
                <RedButton
                  text={isLastStep ? (signUpMutation.isPending ? "Signing up..." : "Sign Up") : "Continue →"}
                  color="secondary"
                  py="16px"
                  px="48px"
                  onClick={!isLastStep ? handleContinue : undefined}
                  type={isLastStep ? "submit" : "button"}
                  disabled={isLastStep && signUpMutation.isPending}
                />
              </Box>
            </FormContent>
          </SlideWrapper>
        </FormBody>

        {/* Step Dots inside card footer */}
        <DotsWrapper>
          {steps.map((_, i) => (
            <Dot key={i} active={i === currentStep ? 1 : 0} />
          ))}
        </DotsWrapper>
      </FormCard>
      <AuthSocialOptions sx={{ maxWidth: embedded ? "100%" : "620px" }} />
    </PageWrapper>
  );
};

export default SignUpForm;
