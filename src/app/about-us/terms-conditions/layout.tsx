import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Camp Adventure",
  description:
    "Terms and conditions for booking and participating in our camps.",
};

export default function TermsConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

