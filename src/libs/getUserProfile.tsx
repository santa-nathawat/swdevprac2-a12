import type { UserProfileResponse } from "@/types/auth";

export default async function getUserProfile(token: string): Promise<UserProfileResponse> {
  const response = await fetch("https://a08-venue-explorer-backend.vercel.app/api/v1/auth/me", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });

  if (!response.ok) throw new Error("Unable to load your profile. Please sign in again or try later.");
  return response.json();
}
