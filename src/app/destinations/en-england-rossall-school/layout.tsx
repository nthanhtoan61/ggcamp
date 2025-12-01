import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "English Language Camp at Rossall School, England | Go and Grow Camp",
  description:
    "English language camp at Rossall School, Lancashire, England for children & teenagers from 10-17 years. Book now!",
};

export default function EnglandRossallSchoolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

