import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "International Summer Camp in Northern Germany - Lüneburger Heide | Go and Grow Camp",
  description:
    "International summer camp in Lüneburger Heide, Niedersachsen for children & teenagers from 7-17 years. Book now!",
};

export default function GermanyLueneburgerHeideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

