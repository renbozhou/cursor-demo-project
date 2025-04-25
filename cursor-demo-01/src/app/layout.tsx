import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ERP研发平台 - 企业资源规划解决方案',
  description: '专业的ERP研发平台，为企业提供全方位的资源规划解决方案',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  )
} 