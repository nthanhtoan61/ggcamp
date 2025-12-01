import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spanish Course in Barcelona | Go and Grow Camp",
  description:
    "Spanish course in Barcelona, Spain for children & teenagers from 10-16 years. Learn Spanish in beautiful Barcelona!",
};

export default function SpanishcourseInBarcelonaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

