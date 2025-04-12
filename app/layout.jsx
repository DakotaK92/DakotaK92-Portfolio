import { Roboto } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const roboto = Roboto({ 
  subsets: ['latin'], 
  weight: ['400','500','600','700','800', '900'],
  variable: '--font-roboto',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
