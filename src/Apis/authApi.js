import { axiosInstance } from "../Helper/helper.js";
import { endpoints } from "../Apis/EndPoints/endpoints.js";

export const login = async (payload) => {
    return await axiosInstance.post(endpoints.LOGIN, payload);
}

export const register = async (payload) => {
    return await axiosInstance.post(endpoints.SIGN_UP, payload);
}

export const forgotPassword = async (payload) => {
    return await axiosInstance.post(endpoints.FORGOT_PASSWORD, payload);
}

export const resetPassword = async (payload) => {
    return await axiosInstance.post(endpoints.RESET_PASSWORD, payload);
}


export const sendOtp = async (payload) => {
    return await axiosInstance.post(endpoints.SEND_OTP, payload);
}

export const verifyForgotOtp = async (payload) => {
    return await axiosInstance.post(endpoints.VERIFY_FORGOT_OTP, payload);
}

export const verifySignUpOtp = async (payload) => {
    return await axiosInstance.post(endpoints.VERIFY_SIGN_UP_OTP, payload);
}

export const resendOTP = async (payload) => {
    return await axiosInstance.post(endpoints.RESEND_OTP, payload);
}

