import type { LoginResponse } from "@/types/auth";

export default async function userLogIn(userEmail: string, userPassword: string): Promise<LoginResponse> {
  const response = await fetch("https://a08-venue-explorer-backend.vercel.app/api/v1/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: userEmail, password: userPassword }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(response.status === 401 ? "Invalid email or password" : "Unable to sign in. Please try again.");
  }
  return response.json();
}
