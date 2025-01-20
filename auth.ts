import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { client } from "@/sanity/lib/client";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.error("Missing credentials");
          throw new Error("Invalid credentials!");
        }

        try {
          const query = `*[_type == "user" && email == $email][0]`;
          const user = await client.fetch(query, { email: credentials.email });

          if (!user) {
            console.error("User not found");
            throw new Error("Invalid credentials!");
          }

          const isPasswordValid = await bcrypt.compare(
            credentials.password as any,
            user.password
          );

          if (!isPasswordValid) {
            console.error("Invalid password");
            throw new Error("Invalid credentials!");
          }

          return user; // Return the user object, including the ID
        } catch (error) {
          console.error("Authentication error:", error);
          throw new Error("An error occurred during login");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt", // Use JWT strategy for session handling
  },
  pages: {
    signIn: "/login", // Redirect here for login
  },
  secret: process.env.NEXTAUTH_SECRET, // Replace with your actual secret
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // Include user ID and other properties in the JWT
        token.id = user._id; // `_id` comes from Sanity
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        // Include the user ID in the session object
        session.user.id = token.id as string;
      }
      return session;
    },
  },
});
