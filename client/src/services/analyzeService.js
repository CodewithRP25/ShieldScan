import { apiClient } from "./apiClient";

export async function analyzeUrl(url) {
  try {
    const response = await apiClient.post("/analyze/url", {
      url
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}