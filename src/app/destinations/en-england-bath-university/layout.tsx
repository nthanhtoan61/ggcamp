import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "English Language Camp at Bath University, England | Go and Grow Camp",
  description:
    "English language camp at University of Bath, England for children & teenagers from 10-17 years. Book now!",
};

export default function EnglandBathUniversityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

