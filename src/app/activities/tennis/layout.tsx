import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tennis Camps in Germany | Camp Adventure",
  description:
    "Tennis camps in Germany for children & teenagers from 7-17 years. Professional coaching and training!",
};

export default function TennisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

