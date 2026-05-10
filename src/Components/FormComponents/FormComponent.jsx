import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Stepper from "../Stepper/Stepper";
import FormStepper from "../FormStepper/FormStepper";
import { createChildren } from "../../Apis/authApi";
import { useAuth } from "../../Context/AuthContext";

const LayerWrapper = styled("div")({});

const LayerContainer = styled(Container)({});

const ContentWrapper = styled(Box)({
  justifyContent: "center",
  display: "flex",
  border: "1px solid #E5E5E5",
  borderRadius: "30px",
  padding: "0px 20px",
});

const Headingwrapper = styled("div")({
  textAlign: "center",
  paddingTop: "80px",
  paddingBottom: "50px",
  h2: {
    fontFamily: "PT Sans",
    fontSize: "26px",
    fontWeight: "700",
    color: "#2B2B2B",
  },
  p: {
    fontFamily: "Noto Sans",
    fontSize: "15px",
    fontWeight: "400",
    color: "#494949",
  },
});

const ContentGrid = styled(Grid)({});

const initialFormData = {
  fullName: "",
  location: "",
  age: "",
  foodHabit: "",
  hasAllergy: false,
  allergyDetails: "",
  prolongedDisease: "",
  profileImage: null,
  schoolName: "",
  schoolLocation: "",
  waiverAcceptance: false,
};

const buildChildrenPayload = (formData) => {
  const payload = {
    fullName: formData.fullName.trim(),
    location: formData.location.trim(),
    age: Number(formData.age),
    allergy: {
      hasAllergy: formData.hasAllergy,
      details: formData.hasAllergy ? formData.allergyDetails.trim() : "",
    },
    schoolDetails: {
      schoolName: formData.schoolName.trim(),
      schoolLocation: formData.schoolLocation.trim(),
    },
    waiverAcceptance: formData.waiverAcceptance,
  };

  if (formData.foodHabit.trim()) {
    payload.foodHabit = formData.foodHabit.trim();
  }

  if (formData.prolongedDisease.trim()) {
    payload.prolongedDisease = formData.prolongedDisease.trim();
  }

  return payload;
};

const isChildrenStepValid = (formData) => {
  const age = Number(formData.age);

  if (!formData.fullName.trim()) return false;
  if (!formData.location.trim()) return false;
  if (!Number.isFinite(age) || age < 1) return false;
  if (formData.hasAllergy && !formData.allergyDetails.trim()) return false;

  return true;
};

const isSchoolStepValid = (formData) =>
  Boolean(formData.schoolName.trim() && formData.schoolLocation.trim());

const isWaiverStepValid = (formData) => Boolean(formData.waiverAcceptance);

export default function FormComponent() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user, refreshAuth } = useAuth();
  const navigate = useNavigate();

  const next = () => {
    setStep((prev) => prev + 1);
  };

  const back = () => {
    setStep((prev) => prev - 1);
  };

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (file) => {
    setFormData((prev) => ({
      ...prev,
      profileImage: file || null,
    }));
  };

  const handleLocationRequest = async (fieldName) => {
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported in this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${coords.latitude}&lon=${coords.longitude}&format=json`,
            { headers: { "Accept-Language": "en" } },
          );
          const data = await res.json();
          const address = data?.address || {};
          const city =
            address.city ||
            address.town ||
            address.village ||
            address.county ||
            address.state ||
            "";

          if (!city) {
            toast.error("Unable to detect location.");
            return;
          }

          handleChange(fieldName, city);
          toast.success("Location added successfully.");
        } catch (error) {
          console.error("location fetch error:", error);
          toast.error("Failed to fetch location.");
        }
      },
      () => {
        toast.error("Location permission denied.");
      },
    );
  };

  const handleSubmit = async () => {
    if (!user?.id) {
      toast.error("Please login first to add children details.");
      return;
    }

    const payload = buildChildrenPayload(formData);
    const submitPromise = createChildren(payload);

    setIsSubmitting(true);

    try {
      await toast.promise(submitPromise, {
        pending: "Saving children details...",
        success: {
          render({ data }) {
            return data?.message || "Children created successfully";
          },
        },
        error: {
          render({ data }) {
            return (
              data?.response?.data?.message ||
              "Failed to save children details"
            );
          },
        },
      });

      await refreshAuth();
      setFormData(initialFormData);
      setStep(1);
      navigate("/subs", {
        state: {
          childCreated: true,
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const canGoNext =
    (step === 1 && isChildrenStepValid(formData)) ||
    (step === 2 && isSchoolStepValid(formData)) ||
    (step === 3 && isWaiverStepValid(formData)) ||
    step === 4;

  return (
    <LayerWrapper>
      <LayerContainer>
        <Headingwrapper>
          <h2>Fill the form</h2>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </Headingwrapper>

        <ContentWrapper>
          <ContentGrid container spacing={4}>
            <Grid size={{ lg: 4 }}>
              <Stepper activeStep={step - 1} />
            </Grid>

            <Grid size={{ lg: 8 }}>
              <FormStepper
                step={step}
                next={next}
                back={back}
                formData={formData}
                onChange={handleChange}
                onFileChange={handleFileChange}
                onLocationRequest={handleLocationRequest}
                onSubmit={handleSubmit}
                nextDisabled={!canGoNext}
                isSubmitting={isSubmitting}
              />
            </Grid>
          </ContentGrid>
        </ContentWrapper>
      </LayerContainer>
    </LayerWrapper>
  );
}
