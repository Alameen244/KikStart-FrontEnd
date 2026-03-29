import { axiosInstance } from "../Helper/helper.js";
import { homeEndpoints } from "../Apis/EndPoints/endpoints.js";

export const getHomeBanner = async () => {
    try {
        const response = await axiosInstance.get(homeEndpoints.BANNER);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching banner sections:", error);
        throw error;
    }
}

export const getWhoWeAre = async () => {
    try {
        const response = await axiosInstance.get(homeEndpoints.WHO);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching who we are sections:", error);
        throw error;
    }
}
