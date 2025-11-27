import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Swimming Camps in Germany | Camp Adventure",
  description:
    "Swimming camps in Germany for children & teenagers from 7-17 years. Learn to swim or improve your skills!",
};

export default function SwimmingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

