import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Horseback Riding Camps in Germany | Camp Adventure",
  description:
    "Horseback riding camps in Germany for children & teenagers from 7-17 years. Intensive riding lessons and horse care!",
};

export default function HorsebackRidingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

