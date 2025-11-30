import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Camp Adventure",
  description:
    "Frequently Asked Questions about our camps, programs, and services.",
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Thêm font Bricolage Grotesque từ Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap"
        rel="stylesheet"
      />
      {children}
    </>
  );
}