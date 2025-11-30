import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cooperate Camps for kids and teenagers | Go and Grow Camp",
  description:
    "We organize tailor-made and cooperate camp programs for the kids of your employees ► further details here!",
};

export default function CampsForCompaniesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}



