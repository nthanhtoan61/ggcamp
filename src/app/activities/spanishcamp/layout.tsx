import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spanish Language Camps | Camp Adventure",
  description:
    "Spanish language camps in Barcelona, Spain for children & teenagers from 10-16 years. Learn Spanish with native speakers!",
};

export default function SpanishcampLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

