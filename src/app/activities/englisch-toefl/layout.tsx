import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "English TOEFL® Courses | Camp Adventure",
  description:
    "English TOEFL® courses in Germany & England for children & teenagers from 10-17 years. Get an internationally recognized certificate!",
};

export default function EnglischToeflLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

