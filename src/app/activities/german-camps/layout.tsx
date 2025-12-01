import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "German Language Camps | Go and Grow Camp",
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

