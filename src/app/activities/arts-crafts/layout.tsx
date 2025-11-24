import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arts & Crafts Camps in Germany | Camp Adventure",
  description:
    "Arts & Crafts camps in Germany for children & teenagers from 7-17 years. Unleash your creativity!",
};

export default function ArtsCraftsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

