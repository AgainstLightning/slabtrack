'use client'

import { ApolloWrapper } from '@/lib/client'
import { NextUIProvider } from '@nextui-org/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ApolloWrapper>
        {children}
      </ApolloWrapper>
    </NextUIProvider>
  )
}
