import './globals.css'
import type { Metadata } from 'next'
import Script from "next/script";
import { Inter, Anton } from 'next/font/google'
import { Providers } from './providers'
import { extendTheme } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Productlab',
  description: 'Develop structured intelligence from unstructured data gathered from receipts, digital accounts, paychecks, emails, and more — all fully permissioned and compiled directly from end consumers in our bespoke research panels.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Script id="google-analytics">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5RHMKW5');`}
        </Script>
      </head>
      <body className={inter.className} style={{ paddingRight: '24px', paddingLeft: '24px' }}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
