// components/ProtectedLayout.tsx
'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  const { status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.replace('/login')
    }
  }, [status])

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  return <>{children}</>
}
