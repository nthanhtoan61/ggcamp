import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multi Water Adventure Camps | Go and Grow Camp",
  description:
    "Multi Water Adventure camps in Germany & Spain for children & teenagers from 7-17 years. Sailing, windsurfing, diving & more!",
};

export default function MultiWaterAdventureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

