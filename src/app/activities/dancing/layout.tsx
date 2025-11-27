import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dancing Camps in Germany | Camp Adventure",
  description:
    "Dancing camps in Germany for children & teenagers from 7-17 years. Learn various dance styles!",
};

export default function DancingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

