import { Roboto } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";

const roboto = Roboto({ 
  subsets: ['latin'], 
  weight: ['400','500','600','700','800', '900'],
  variable: '--font-roboto',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
