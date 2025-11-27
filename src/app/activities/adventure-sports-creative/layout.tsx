import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adventure, Sports & Creative Camps in Germany | Camp Adventure",
  description:
    "Adventure, Sports & Creative camps in Germany for children & teenagers from 7-17 years. Book now!",
};

export default function AdventureSportsCreativeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

