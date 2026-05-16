export const authEndpoints = {
  SIGN_UP: "api/v1/auth/signUp",
  LOGIN: "api/v1/auth/login",
  GOOGLE_AUTH: "api/v1/auth/google",
  RESET_PASSWORD: "api/v1/auth/resetPassword",
  SEND_OTP: "api/v1/auth/sendOTP",
  VERIFY_FORGOT_OTP: "api/v1/auth/verifyForgotOTP",
  VERIFY_SIGN_UP_OTP: "api/v1/auth/verifySignUpOTP",
  FORGOT_PASSWORD: "api/v1/auth/forgotPassword",
  RESEND_OTP: "api/v1/auth/resendOtp",
  ME: "api/v1/auth/me",
  CHILDREN: "api/v1/auth/children",
};

export const subscriptionEndpoints = {
  CREATE_CHECKOUT_SESSION: "api/v1/subs/create-checkout-session",
  CONFIRM_SESSION: "api/v1/subs/confirm-session",
};

export const homeEndpoints = {
  BANNER: "/api/v1/banner",
  WHO: "/api/v1/who",
  HOME_FAQS: "/api/v1/faqs/home",
  HOME_ACTIVE_CARDS: "/api/v1/gym-cards/home",
  TESTIMONIALS: "/api/v1/testimonials",
  PROGRAMS: "/api/v1/programs",
  HOME_PROGRAMS: "/api/v1/programs/home",
};

export const faqEndpoints = {
  FAQS: "/api/v1/faqs",
};

export const whyUsEndpoints = {
  GYM_CARDS: "/api/v1/gym-cards",
};

export const userEndpoints = {
  GET_ALL_USERS: "/api/v1/auth/users",
};

export const chatEndpoints = {
  CREATE_CONVERSATION: "/api/v1/chat/create",
  ADD_PARTICIPANT: "/api/v1/chat/participant",
  SEND_MESSAGE: "/api/v1/chat/message",
  GET_MESSAGES: (conversationSid) => `/api/v1/chat/messages/${conversationSid}`,
  DELETE_CONVERSATION: (conversationSid) => `/api/v1/chat/${conversationSid}`,
  GENERATE_TOKEN: "/api/v1/chat/token",
};
