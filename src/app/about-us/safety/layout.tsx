import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Philosophy & Safety at Camp | Camp Adventure",
  description:
    "Our comprehensive safety concept and philosophy for ensuring the well-being of all camp participants.",
};

export default function SafetyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

