import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sailing Camps in Spain | Camp Adventure",
  description:
    "Sailing camps in Barcelona, Spain for children & teenagers from 10-16 years. Learn to sail in the Mediterranean!",
};

export default function SailingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

