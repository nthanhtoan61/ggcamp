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
  return <>{children}</>;
}

