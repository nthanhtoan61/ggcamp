import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Windsurfing Camps in Spain | Camp Adventure",
  description:
    "Windsurfing camps in Barcelona, Spain for children & teenagers from 10-16 years. Learn to windsurf in the Mediterranean!",
};

export default function WindsurfingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

