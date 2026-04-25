import { Roboto } from "next/font/google";
import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";

const roboto = Roboto({ 
  subsets: ['latin'], 
  weight: ['400','500','600','700','800', '900'],
  variable: '--font-roboto',
});

export const metadata = {
  metadataBase: new URL("https://dakotavking.dev"),
  title: {
    default: "Dakota King | Portfolio",
    template: "%s | Dakota King",
  },
  description: "Welcome to my portfolio website! I'm Dakota, a passionate developer and designer. Explore my projects, skills, and experience in web development. Let's create something amazing together!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${roboto.variable}`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
