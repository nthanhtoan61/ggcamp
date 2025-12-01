import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lifeguarding Course in Germany | Go and Grow Camp",
  description:
    "Lifeguarding course in Germany for teenagers from 12-17 years. Get certified as a lifeguard!",
};

export default function LifeguardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

