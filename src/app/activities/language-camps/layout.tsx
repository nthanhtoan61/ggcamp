import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Language Camps | Camp Adventure",
  description:
    "Language camps in Germany, England & Spain for children & teenagers from 7-17 years. Learn English, German & Spanish!",
};

export default function LanguageCampsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

