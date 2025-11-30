import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "International Outdoor Education Diploma 2026 in Germany | Go and Grow Camp",
  description:
    "Welcome to an exciting 6-month Outdoor Education Diploma program where you will find an ultimate life changing experience ☀",
};

export default function OutdoorEducationDiplomaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

