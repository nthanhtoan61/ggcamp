import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insurance & Travel Cancellation Guarantee | Camp Adventure",
  description:
    "Information about insurance coverage and recommendations for camp participants.",
};

export default function InsuranceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

