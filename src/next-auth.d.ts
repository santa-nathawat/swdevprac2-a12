import type { DefaultSession } from "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      _id: string;
      role: string;
      token: string;
    };
  }
  interface User {
    _id: string;
    role: string;
    token: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    _id: string;
    role: string;
    token: string;
  }
}
