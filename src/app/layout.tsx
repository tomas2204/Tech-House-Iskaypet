import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.scss";

const nunitoFont = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tech-House Iskaypet",
  description: "Iskaypet",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className={`${nunitoFont.variable}`}>
        {children}
      </body>
    </html>
  );
}

export default RootLayout
