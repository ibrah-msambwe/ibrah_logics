import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ibrah_Logics - Portfolio',
  description: 'Professional portfolio of Ibrah_Logics - Web and App Developer',
  keywords: 'web developer, app developer, portfolio, full-stack developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Ibrah_Logics" />

        {/* Google AdSense verification */}
        <meta name="google-site-verification" content="4576403804116277" />

        {/* Google AdSense script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4576403804116277"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
