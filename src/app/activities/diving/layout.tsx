import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scuba Diving Camps in Spain | Camp Adventure",
  description:
    "Scuba diving camps in Barcelona, Spain for children & teenagers from 10-16 years. PADI certification courses!",
};

export default function DivingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

