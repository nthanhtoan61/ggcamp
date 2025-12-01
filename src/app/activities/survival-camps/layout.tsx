import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Survival Camps in Germany | Go and Grow Camp",
  description:
    "Survival camps in Germany for children & teenagers from 7-17 years. Learn essential outdoor survival skills!",
};

export default function SurvivalCampsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

