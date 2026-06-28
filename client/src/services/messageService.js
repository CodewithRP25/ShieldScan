import { apiClient } from "./apiClient";

export async function analyzeMessage(message) {
  try {
    const response = await apiClient.post("/analyze/message", {
      message
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}