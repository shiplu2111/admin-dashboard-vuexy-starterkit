// Next Imports

import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
// Component Imports
import Login from '@views/Login'
// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'
export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account'
}

const LoginPage = async () => {
  // Vars
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/dashboard')
  }
  const mode = await getServerMode()

  return <Login mode={mode} />
}

export default LoginPage
