import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import userLogIn from "@/libs/userLogIn";
import getUserProfile from "@/libs/getUserProfile";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Email and Password",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "alice@eventplanner.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;
        try {
          const login = await userLogIn(credentials.email, credentials.password);
          if (!login.success || !login.token) return null;
          const profile = await getUserProfile(login.token);
          if (!profile.success) return null;
          return {
            id: profile.data._id,
            _id: profile.data._id,
            name: profile.data.name,
            email: profile.data.email,
            role: profile.data.role,
            token: login.token,
          };
        } catch {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token._id = user._id;
        token.role = user.role;
        token.token = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      session.user._id = token._id;
      session.user.role = token.role;
      session.user.token = token.token;
      return session;
    },
  },
};
