import NextAuth, { User } from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { NextResponse } from "next/server";

export const { handlers, signIn, signOut, auth } = NextAuth({
  // debug: true,
  providers: [GitHub, Google],
  callbacks: {
    async signIn({ user }) {
      try {
        const res = await fetch("http://localhost:8080/api/v1/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: user.name,
            email: user.email,
            image: user.image,
          }),
        });

        if (!res.ok) return false;

        const parsedRes = await res.json();
        console.log("user registered!");
        user.id = parsedRes.id;
        return true;
      } catch (err) {
        console.log("reached here");
        return false;
      }
    },
    async jwt({ token, user }) {
      console.log(token);
      try {
        const response = await fetch("http://localhost:8080/testz", {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();
        console.log("Fetch response:", data);
      } catch (error) {
        console.error("Fetch failed:", error);
      }
      return token;
    },
    async authorized({ request, auth }) {
      console.log("reached here");
      return false;
    },
  },
  logger: {
    error(code, ...message) {
      console.log(message);
    },
  },
  // pages: {
  //   signIn: "/login",
  // },
});
