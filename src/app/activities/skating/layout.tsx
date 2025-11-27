import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skating Camps in Germany | Camp Adventure",
  description:
    "Skating camps in Germany for children & teenagers from 7-17 years. Learn skateboarding and inline skating!",
};

export default function SkatingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

