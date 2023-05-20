"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "NextQl",
  description: "App created with next and mySql",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-green-50 text-green-950 flex flex-col min-h-screen">
        <Navigation />
        <main className="pt-4 lg:px-72">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
