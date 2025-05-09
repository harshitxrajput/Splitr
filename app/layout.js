import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ConvexClientProvider } from "@/components/convex-client-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Splitr",
  description: "The smartest way to split expenses with friends",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logos/logo-s.png" type="image/x-icon" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ConvexClientProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
