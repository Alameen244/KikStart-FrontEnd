import React from "react";
import { styled } from "@mui/material/styles";

const PageWrapper = styled("div")({
  width: "650px",
  padding: "0px 20px 0px 60px",
  borderLeft: "1px solid #E5E5E5",
});

const HeaderWrapper = styled("div")({
  paddingBottom: "30px",
  paddingTop: "40px",
  h2: {
    fontFamily: "PT Sans",
    fontSize: "20px",
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

const FormWrapper = styled("div")({
  width: "580px",
});

const FieldWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  border: "1px solid #DEE2E6",
  borderRadius: "12px",
  padding: "16px",
  marginBottom: "16px",
  transition: "border-color 180ms ease, box-shadow 180ms ease",
  "&:focus-within": {
    borderColor: "#ED1C24",
    boxShadow: "0 0 0 4px rgba(237, 28, 36, 0.08)",
  },
});

const LocationFieldWrapper = styled(FieldWrapper)({
  position: "relative",
  paddingBottom: "8px",
});

const FieldLabel = styled("label")({
  padding: "0 0 8px 0",
  color: "#B3B3B3",
  fontFamily: "Noto Sans",
  fontSize: "14px",
  fontWeight: "400",
});

const RequiredMark = styled("span")({
  color: "#ED1C24",
  marginLeft: "4px",
});

const FieldInput = styled("input")({
  outline: "0",
  border: "0",
  fontFamily: "Noto Sans",
  fontSize: "16px",
  fontWeight: "500",
  color: "#1F2937",
  backgroundColor: "transparent",
  "&::placeholder": {
    color: "#A8B0BA",
  },
});

const AllergyToggle = styled("div")({
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
  padding: "6px",
  backgroundColor: "#FFF5F5",
  borderRadius: "999px",
  width: "fit-content",
});

const ToggleButton = styled("button", {
  shouldForwardProp: (prop) => prop !== "isSelected",
})(({ isSelected }) => ({
  border: "0",
  borderRadius: "999px",
  padding: "10px 18px",
  fontFamily: "Noto Sans",
  fontSize: "15px",
  fontWeight: "600",
  color: isSelected ? "#FFFFFF" : "#374151",
  backgroundColor: isSelected ? "#ED1C24" : "transparent",
  cursor: "pointer",
  transition: "all 180ms ease",
  boxShadow: isSelected ? "0 10px 20px rgba(237, 28, 36, 0.18)" : "none",
  "&:hover": {
    backgroundColor: isSelected ? "#ED1C24" : "#FFE4E6",
  },
}));

const AllergyDetailsInput = styled(FieldInput, {
  shouldForwardProp: (prop) => prop !== "isDisabled",
})(({ isDisabled }) => ({
  color: isDisabled ? "#A8A8A8" : "#1F2937",
  cursor: isDisabled ? "not-allowed" : "text",
}));

const LocationInput = styled(FieldInput)({
  paddingRight: "40px",
});

const TargetIconWrapper = styled("button")({
  position: "absolute",
  right: "16px",
  top: "50%",
  transform: "translateY(-50%)",
  cursor: "pointer",
  background: "transparent",
  border: "0",
  padding: "0",
});

const UploadRow = styled("div")({
  display: "flex",
  alignItems: "center",
  border: "1px solid #DEE2E6",
  borderRadius: "12px",
  padding: "16px",
  marginBottom: "16px",
});

const UploadSubTitle = styled("p")({
  color: "#2B2B2B",
  fontFamily: "Noto Sans",
  fontSize: "14px",
  fontWeight: "400",
  paddingTop: "6px",
});

const UploadButton = styled("label")({
  border: "1px solid #DEE2E6",
  borderRadius: "12px",
  padding: "18px 22px",
  cursor: "pointer",
  fontFamily: "Noto Sans",
  fontSize: "16px",
  fontWeight: "500",
  color: "#2B2B2B",
  marginLeft: "auto",
  "&:hover": {
    backgroundColor: "#F3F4F6",
  },
});

const HiddenFileInput = styled("input")({
  display: "none",
});

const FileName = styled("p")({
  fontFamily: "Noto Sans",
  fontSize: "13px",
  fontWeight: "400",
  color: "#6B7280",
  paddingTop: "6px",
});

const HelperText = styled("p")({
  fontFamily: "Noto Sans",
  fontSize: "13px",
  fontWeight: "400",
  color: "#ED1C24",
  marginTop: "8px",
});

const NextButton = styled("button")({
  backgroundColor: "#EF4444",
  color: "#FFFFFF",
  fontFamily: "Noto Sans",
  fontSize: "16px",
  fontWeight: "500",
  padding: "15px 35px",
  borderRadius: "50px",
  marginBottom: "40px",
  border: "0",
  transition: "opacity 180ms ease, background-color 180ms ease",
  "&:hover": {
    backgroundColor: "#DC2626",
  },
  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
    backgroundColor: "#EF4444",
  },
});

const TargetIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#9CA3AF"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="2" />
    <line x1="12" y1="2" x2="12" y2="6" />
    <line x1="12" y1="18" x2="12" y2="22" />
    <line x1="2" y1="12" x2="6" y2="12" />
    <line x1="18" y1="12" x2="22" y2="12" />
  </svg>
);

const ChildrenForm = ({
  next,
  formData,
  onChange,
  onFileChange,
  onLocationRequest,
  nextDisabled,
}) => {
  const ageError =
    formData.age !== "" && (Number.isNaN(Number(formData.age)) || Number(formData.age) < 1);

  const showAllergyError = formData.hasAllergy && !formData.allergyDetails.trim();

  return (
    <PageWrapper>
      <HeaderWrapper>
        <h2>Children Details</h2>
        <p>Lorem ipsum dolor sit amet consectetur</p>
      </HeaderWrapper>

      <FormWrapper>
        <FieldWrapper>
          <FieldLabel>
            Full Name
            <RequiredMark>*</RequiredMark>
          </FieldLabel>
          <FieldInput
            type="text"
            value={formData.fullName}
            onChange={(e) => onChange("fullName", e.target.value)}
            placeholder="Enter full name"
          />
        </FieldWrapper>

        <LocationFieldWrapper>
          <FieldLabel>
            Location
            <RequiredMark>*</RequiredMark>
          </FieldLabel>
          <LocationInput
            type="text"
            value={formData.location}
            onChange={(e) => onChange("location", e.target.value)}
            placeholder="Enter location"
          />
          <TargetIconWrapper
            type="button"
            onClick={() => onLocationRequest("location")}
          >
            <TargetIcon />
          </TargetIconWrapper>
        </LocationFieldWrapper>

        <FieldWrapper>
          <FieldLabel>
            Age
            <RequiredMark>*</RequiredMark>
          </FieldLabel>
          <FieldInput
            type="number"
            min="1"
            value={formData.age}
            onChange={(e) => onChange("age", e.target.value)}
            placeholder="Enter age"
          />
          {ageError && <HelperText>Please enter a valid age.</HelperText>}
        </FieldWrapper>

        <FieldWrapper>
          <FieldLabel>Food Habit</FieldLabel>
          <FieldInput
            type="text"
            value={formData.foodHabit}
            onChange={(e) => onChange("foodHabit", e.target.value)}
            placeholder="Enter food habit"
          />
        </FieldWrapper>

        <FieldWrapper>
          <FieldLabel>Have Any Type of Allergy?</FieldLabel>
          <AllergyToggle>
            <ToggleButton
              type="button"
              isSelected={!formData.hasAllergy}
              onClick={() => {
                onChange("hasAllergy", false);
                onChange("allergyDetails", "");
              }}
            >
              No
            </ToggleButton>
            <ToggleButton
              type="button"
              isSelected={formData.hasAllergy}
              onClick={() => onChange("hasAllergy", true)}
            >
              Yes
            </ToggleButton>
          </AllergyToggle>
        </FieldWrapper>

        <FieldWrapper>
          <FieldLabel>
            Allergy Details
            {formData.hasAllergy && <RequiredMark>*</RequiredMark>}
          </FieldLabel>
          <AllergyDetailsInput
            type="text"
            isDisabled={!formData.hasAllergy}
            disabled={!formData.hasAllergy}
            value={formData.allergyDetails}
            onChange={(e) => onChange("allergyDetails", e.target.value)}
            placeholder={
              formData.hasAllergy
                ? "Enter allergy details"
                : "Enable by selecting Yes above"
            }
          />
          {showAllergyError && (
            <HelperText>Allergy details are required.</HelperText>
          )}
        </FieldWrapper>

        <FieldWrapper>
          <FieldLabel>Any Prolong Details</FieldLabel>
          <FieldInput
            type="text"
            value={formData.prolongedDisease}
            onChange={(e) => onChange("prolongedDisease", e.target.value)}
            placeholder="Enter prolonged disease details"
          />
        </FieldWrapper>

        <UploadRow>
          <div>
            <FieldLabel>Profile Image</FieldLabel>
            <UploadSubTitle>Upload image within size of 5MB</UploadSubTitle>
            {formData.profileImage?.name && (
              <FileName>{formData.profileImage.name}</FileName>
            )}
          </div>

          <UploadButton>
            UPLOAD
            <HiddenFileInput
              type="file"
              accept="image/*"
              onChange={(e) => onFileChange(e.target.files?.[0] || null)}
            />
          </UploadButton>
        </UploadRow>
      </FormWrapper>

      <NextButton onClick={next} disabled={nextDisabled}>
        Next
      </NextButton>
    </PageWrapper>
  );
};

export default ChildrenForm;
