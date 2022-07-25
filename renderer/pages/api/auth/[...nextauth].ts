import { PrismaAdapter } from "@next-auth/prisma-adapter"
import NextAuth from "next-auth"
import { prisma } from "../../../lib/Prisma"
import CredentialsProvider  from "next-auth/providers/credentials"

export default NextAuth({
    secret: '$6$PU1cHLTf2kDxM.Gb$MaRP0gdZnAOZpiKCxg8iO3yzfdgZHXbGq025L5VYaBjDd2FEyf3Ga9g.mIeyTuOLMh6rYJYIMOuL7t1d6s98K/',
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials, req) {
                let account = { id: 1, email: "admin@example.com", password: 'password' };
                const user  = {email: account.email, id: account.id}

      if (user) {
        // Any object returned will be saved in `user` property of the JWT
         
        return user
      } else {
        // If you return null then an error will be displayed advising the user to check their details.
          
        return  Promise.reject("Email or password mismatch")

        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      }
            }
        })
    ],
    session: {
        maxAge: 24 * 60 * 60,
        updateAge: 24 * 60 * 60,
        strategy : 'jwt'
    },
    jwt: {

    },
    callbacks: {
        jwt: async ({ token, user }) => {
            user && (token.user = user);
            return token
        },
        session: async ({ session, token }) => {
            session.user = token.user;
            return session;
        },
       
    },
    pages: {
        signIn: "/auth",
        //error: "/auth"
    }
})