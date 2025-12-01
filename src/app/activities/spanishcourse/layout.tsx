import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spanish Course | Go and Grow Camp",
  description:
    "Spanish course in Barcelona, Spain for children & teenagers from 10-16 years. Intensive Spanish language instruction!",
};

export default function SpanishcourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

