import { apiClient } from "./apiClient.js";

export const healthService = {
  async getHealth() {
    const response = await apiClient.get("/health");
    return response.data;
  }
};
