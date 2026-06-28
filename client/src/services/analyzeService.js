const API_BASE = "http://localhost:5000/api";

export async function analyzeUrl(url) {
  try {
    const response = await fetch(`${API_BASE}/analyze/url`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ url })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong.");
    }

    return data;
  } catch (error) {
    throw error;
  }
}