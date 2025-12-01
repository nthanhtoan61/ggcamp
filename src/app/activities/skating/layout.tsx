import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skating Camps in Germany | Go and Grow Camp",
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

