import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Simulamos un usuario válido
        const user = {
          id: "1",
          name: "Sofia",
          email: "estivenzapata20986@gmail.com",
        };

        // Validación manual
        if (
          credentials?.email === "estivenzapata20986@gmail.com" &&
          credentials?.password === "123456"
        ) {
          return user; // ✅ éxito
        }

        console.log("❌ Credenciales incorrectas:", credentials);
        return null; // ❌ genera el /api/auth/error
      },
    }),
  ],
});
