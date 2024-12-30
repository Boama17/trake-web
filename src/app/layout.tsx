import type { Metadata } from "next";
import "./globals.css";
import "./styles.css";


export const metadata: Metadata = {
  title: "Trake",
  description: "Made by Boama",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
