import { axiosInstance } from "../Helper/helper.js";
import { chatEndpoints } from "./EndPoints/endpoints.js";

export const createConversation = async (payload) => {
  const res = await axiosInstance.post(chatEndpoints.CREATE_CONVERSATION, payload);
  return res?.data;
};

export const addParticipant = async (payload) => {
  const res = await axiosInstance.post(chatEndpoints.ADD_PARTICIPANT, payload);
  return res?.data;
};

export const sendChatMessage = async (payload) => {
  const res = await axiosInstance.post(chatEndpoints.SEND_MESSAGE, payload);
  return res?.data;
};

export const getConversationMessages = async (conversationSid) => {
  const res = await axiosInstance.get(chatEndpoints.GET_MESSAGES(conversationSid));
  return res?.data;
};

export const deleteConversation = async (conversationSid) => {
  const res = await axiosInstance.delete(chatEndpoints.DELETE_CONVERSATION(conversationSid));
  return res?.data;
};

export const generateChatToken = async (payload) => {
  const res = await axiosInstance.post(chatEndpoints.GENERATE_TOKEN, payload);
  return res?.data;
};
