import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book your holiday camps 2026 now!",
  description:
    "Easter, summer and autumn camps for kids and teens aged 7 to 19. Profiles like Adventure & Creative, Survival, Language ☀",
};

export default function CampProfilesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

