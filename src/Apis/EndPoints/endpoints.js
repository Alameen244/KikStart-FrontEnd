export const authEndpoints = {
  SIGN_UP: "api/v1/auth/signUp",
  LOGIN: "api/v1/auth/login",
  RESET_PASSWORD: "api/v1/auth/resetPassword",
  SEND_OTP: "api/v1/auth/sendOTP",
  VERIFY_FORGOT_OTP: "api/v1/auth/verifyForgotOTP",
  VERIFY_SIGN_UP_OTP: "api/v1/auth/verifySignUpOTP",
  FORGOT_PASSWORD: "api/v1/auth/forgotPassword",
  RESEND_OTP: "api/v1/auth/resendOtp",
  ME: "api/v1/auth/me",
};

export const homeEndpoints = {
  BANNER: "/api/v1/banner",
  WHO: "/api/v1/who",
  HOME_FAQS: "/api/v1/faqs/home",
  HOME_ACTIVE_CARDS: "/api/v1/gym-cards/home",
  TESTIMONIALS: "/api/v1/testimonials",
};

export const faqEndpoints = {
  FAQS: "/api/v1/faqs",
};

export const whyUsEndpoints = {
  GYM_CARDS: "/api/v1/gym-cards",
};
