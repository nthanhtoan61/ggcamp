import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "International Summer Camp in Bavaria - Bayerischer Wald | Go and Grow Camp",
  description:
    "International summer camp in Bayerischer Wald, Bayern for children & teenagers from 7-16 years. Book now!",
};

export default function GermanyBayerischerWaldLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

