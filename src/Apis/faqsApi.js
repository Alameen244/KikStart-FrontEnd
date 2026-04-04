
import { axiosInstance } from "../../../admin/src/helper/helper";
import { faqEndpoints } from "./EndPoints/endpoints";


export const getFAQs = async () => {
    try {
        const response = await axiosInstance.get(faqEndpoints.FAQS);
        return response.data;
    } catch (error) {
        console.error("Error fetching FAQs:", error);
        throw error;
    }
}
