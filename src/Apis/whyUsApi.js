import { axiosInstance } from "../Helper/helper.js";
import { whyUsEndpoints } from "./EndPoints/endpoints.js";

export const getActiveCards = async () => {
    try {
        const response = await axiosInstance.get(whyUsEndpoints.GYM_CARDS);
        return response.data;
    } catch (error) {
        console.error("Error fetching active cards:", error);
        throw error;
    }
}
