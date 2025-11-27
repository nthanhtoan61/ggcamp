import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Climbing Camps in Germany | Camp Adventure",
  description:
    "Climbing camps in Germany for children & teenagers from 7-17 years. High ropes courses and climbing parks!",
};

export default function ClimbingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

