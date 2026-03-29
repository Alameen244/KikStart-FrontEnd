import { axiosInstance } from "../Helper/helper.js";
import { authEndpoints } from "../Apis/EndPoints/endpoints.js";

export const login = async (payload) => {
    const res = await axiosInstance.post(authEndpoints.LOGIN, payload);
    return res?.data;
}

export const register = async (payload) => {
    const normalizedPayload = {
        ...payload,
        pinCode: payload?.pinCode || payload?.passCode
    };
    delete normalizedPayload.passCode;
    delete normalizedPayload.confirmPassword;

    const res = await axiosInstance.post(authEndpoints.SIGN_UP, normalizedPayload);
    return res?.data;
}

export const forgotPassword = async (payload) => {
    const res = await axiosInstance.post(authEndpoints.FORGOT_PASSWORD, payload);
    return res?.data;
}

export const resetPassword = async (payload) => {
    const res = await axiosInstance.post(authEndpoints.RESET_PASSWORD, payload);
    return res?.data;
}


export const sendOtp = async (payload) => {
    const res = await axiosInstance.post(authEndpoints.SEND_OTP, payload);
    return res?.data;
}

export const verifyForgotOtp = async (payload) => {
    const res = await axiosInstance.post(authEndpoints.VERIFY_FORGOT_OTP, payload);
    return res?.data;
}

export const verifySignUpOtp = async (payload) => {
    const res = await axiosInstance.post(authEndpoints.VERIFY_SIGN_UP_OTP, payload);
    return res?.data;
}

export const resendOTP = async (payload) => {
    const res = await axiosInstance.post(authEndpoints.RESEND_OTP, payload);
    return res?.data;
}

export const getMe = async () => {
    const res = await axiosInstance.get(authEndpoints.ME);
    return res?.data;
}
