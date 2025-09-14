// lib/auth.ts
import CredentialsProvider from 'next-auth/providers/credentials'
import { NextAuthOptions } from 'next-auth'
import axios from 'axios'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Laravel Credentials',
      credentials: {
        email_or_username: { label: 'Email or Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        try {
          const res = await axios.post(`${process.env.API_URL}/login`, {
            email_or_username: credentials?.email_or_username,
            password: credentials?.password
          })

          const { user, access_token } = res.data

          if (user && access_token) {
            return {
              ...user,
              token: access_token
            }
          }

          return null
        } catch (error) {
          console.error('Login error:', error)
          return null
        }
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?.token) {
        token.accessToken = user.token
        token.user = user
      }
      return token
    },
    async session({ session, token }) {
      session.user = token.user
      session.accessToken = token.accessToken
      return session
    }
  },
  pages: {
    signIn: '/login'
  },
  secret: process.env.NEXTAUTH_SECRET
}
