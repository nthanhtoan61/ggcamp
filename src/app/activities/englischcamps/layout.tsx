import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "English Language Camps | Camp Adventure",
  description:
    "English language camps in Germany, England & Spain for children & teenagers from 7-17 years. Learn English with native speakers!",
};

export default function EnglischcampsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

