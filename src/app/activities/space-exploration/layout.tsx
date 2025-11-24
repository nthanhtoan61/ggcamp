import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Space Exploration Camp | Camp Adventure",
  description:
    "Space Exploration Camp in collaboration with ESA for children & teenagers from 10-17 years. Learn about space science!",
};

export default function SpaceExplorationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

