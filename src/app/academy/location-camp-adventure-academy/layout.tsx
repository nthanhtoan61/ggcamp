import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Go and Grow Camp Academy in Germany | Go and Grow Camp",
  description:
    "With more than 15 acres of fields, woods, several lakes & even a beach, our camp location is the perfect site for Outdoor Sports",
};

export default function LocationCampAdventureAcademyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

