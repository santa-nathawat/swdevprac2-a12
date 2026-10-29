export interface LoginResponse {
  success: boolean;
  _id: string;
  name: string;
  email: string;
  token: string;
}

export interface UserProfile {
  _id: string;
  name: string;
  email: string;
  tel: string;
  role: string;
  createdAt: string;
}

export interface UserProfileResponse {
  success: boolean;
  data: UserProfile;
}
