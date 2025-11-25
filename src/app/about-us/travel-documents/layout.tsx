import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel Documents | Camp Adventure",
  description:
    "Information about required travel documents for international participants.",
};

export default function TravelDocumentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

