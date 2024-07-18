import type { Metadata } from "next";

import "./globals.css";
import { Footer, Navbar } from "./components";

//Specifies what page will look like(whole thing)
//We put navbar+footer here because it doesn't change no matter which page


export const metadata: Metadata = {
  title: "shitbox",
  description: "it's shitbox dude.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
