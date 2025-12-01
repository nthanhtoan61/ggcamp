import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Go and Grow Camp",
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

