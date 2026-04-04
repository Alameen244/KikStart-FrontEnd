import { axiosInstance } from "../Helper/helper.js";
import {  homeEndpoints } from "../Apis/EndPoints/endpoints.js";


export const getHomeBanner = async () => {
    try {
        const response = await axiosInstance.get(homeEndpoints.BANNER);
        return response.data;
    } catch (error) {
        console.error("Error fetching banner sections:", error);
        throw error;
    }
}

export const getWhoWeAre = async () => {
    try {
        const response = await axiosInstance.get(homeEndpoints.WHO);
        return response.data;
    } catch (error) {
        console.error("Error fetching who we are sections:", error);
        throw error;
    }
}


export const getHomeFAQs = async () => {
    try {
        const response = await axiosInstance.get(homeEndpoints.HOME_FAQS);
        return response.data;
    } catch (error) {
        console.error("Error fetching home FAQs:", error);
        throw error;
    }
}

export const getHomeActiveCards = async () => {
    try {
        const response = await axiosInstance.get(homeEndpoints.HOME_ACTIVE_CARDS);
        return response.data;
    } catch (error) {
        console.error("Error fetching home active cards:", error);
        throw error;
    }
}


export const getHomeTestimonials = async () => {
    try {
        const response = await axiosInstance.get(homeEndpoints.TESTIMONIALS);
        return response.data;
    } catch (error) {
        console.error("Error fetching testimonials:", error);
        throw error;
    }
}
