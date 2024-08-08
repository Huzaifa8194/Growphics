"use client";
import Header from "@/app/ui/Header";
import CustomCursor from "@/app/ui/CustomCursor";
import Footer from "@/app/ui/Footer";
import "swiper/css";
import "swiper/css/pagination";
import "./scss/index.scss";
import WhatsAppIcon from "./ui/Whatsapp/page";
import { Poppins, Open_Sans } from "next/font/google";
import Spacing from "./ui/Spacing";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--primary-font",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--secondary-font",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Laralink" />
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <title>GROWPHICS</title>
      </head>
      <body className={`${openSans.variable} ${poppins.variable}`}>
        <Header />
        <CustomCursor />

        {/* Content area */}
        {children}

        {/* These divs will appear based on the current scroll position */}
        <div
          id="__next"
          style={{
            position: "relative",
            zIndex: 3,
          }}
        ></div>

        <div
          id="modal-root"
          style={{
            position: "relative",
            zIndex: 4, // Ensure this is on top of `#__next` if needed
          }}
        ></div>

        <Footer />
      </body>
    </html>
  );
}
