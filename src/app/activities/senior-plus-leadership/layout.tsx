import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Senior Plus & Leadership Program in Germany | Go and Grow Camp",
  description:
    "Senior Plus & Leadership program in Germany for teenagers from 15-17 years. Develop leadership skills!",
};

export default function SeniorPlusLeadershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

