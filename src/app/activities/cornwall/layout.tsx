import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cornwall | Camp Adventure",
  description:
    "English & German camps for 7 to 17 year olds, at all levels & with recognized certificates such as TOEFL® ► Book now!",
};

export default function CornwallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

