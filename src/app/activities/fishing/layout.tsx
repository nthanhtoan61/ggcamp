import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fishing Camps in Germany | Camp Adventure",
  description:
    "Fishing camps in Germany for children & teenagers from 7-17 years. Learn the art of fishing!",
};

export default function FishingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

