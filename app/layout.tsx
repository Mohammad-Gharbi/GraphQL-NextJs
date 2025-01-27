"use client"

import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/ThemeProvider"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client"
import { client } from "@/lib/apollo-client"

// export const metadata: Metadata = {
//   title: "New App",
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ApolloProvider client={client}>{children}</ApolloProvider>,
        </ThemeProvider>
      </body>
    </html>
  )
}
