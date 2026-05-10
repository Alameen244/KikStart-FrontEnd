import { axiosInstance } from "../Helper/helper.js";
import { subscriptionEndpoints } from "./EndPoints/endpoints.js";

export const createCheckoutSession = async (payload) => {
  const res = await axiosInstance.post(
    subscriptionEndpoints.CREATE_CHECKOUT_SESSION,
    payload,
  );
  return res?.data;
};

export const confirmCheckoutSession = async (payload) => {
  const res = await axiosInstance.post(
    subscriptionEndpoints.CONFIRM_SESSION,
    payload,
  );
  return res?.data;
};
