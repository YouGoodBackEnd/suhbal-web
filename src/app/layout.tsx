import type { Metadata } from "next";
import "../css/global.css";

export const metadata: Metadata = {
  title: "",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
