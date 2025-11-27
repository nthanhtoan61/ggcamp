import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soccer Camps in Germany, England & Spain | Camp Adventure",
  description:
    "Soccer camps in Germany, England, and Spain for children & teenagers from 7-17 years. Train with top European clubs!",
};

export default function SoccerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

