import { axiosInstance } from "../Helper/helper.js";
import { userEndpoints } from "./EndPoints/endpoints.js";

export const getAllUsers = async () => {
  const res = await axiosInstance.get(userEndpoints.GET_ALL_USERS);
  return res?.data;
};
