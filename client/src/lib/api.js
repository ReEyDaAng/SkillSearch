const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export async function getProfiles() {
  const res = await fetch(`${BASE_URL}/profiles`);
  if (!res.ok) throw new Error("Failed to load profiles");
  return res.json();
}

export async function searchProfiles(skills) {
  const res = await fetch(`${BASE_URL}/search`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ skills })
  });
  if (!res.ok) throw new Error("Search failed");
  return res.json();
}
