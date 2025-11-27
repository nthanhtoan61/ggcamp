import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "German Language Camps | Camp Adventure",
  description:
    "German language camps in Germany for children & teenagers from 7-17 years. Learn German with native speakers!",
};

export default function GermanCampsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

