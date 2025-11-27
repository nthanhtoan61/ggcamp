import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us | Camp Adventure",
  description:
    "What began as a study project has now become a top address for international sports, language and adventure camps for children and teenagers in Europe.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

