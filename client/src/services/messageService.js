const API_BASE = "http://localhost:5000/api";

export async function analyzeMessage(message) {

  const response = await fetch(`${API_BASE}/analyze/message`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({
      message
    })

  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong.");
  }

  return data;
}