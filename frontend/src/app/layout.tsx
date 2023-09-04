import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Test Frontend App',
  description: 'A Next.js App to test containerisation and minikube',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
