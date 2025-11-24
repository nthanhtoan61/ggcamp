import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Husky Camp in Germany | Camp Adventure",
  description:
    "Husky Camp in Germany for children & teenagers from 7-17 years. Experience working with sled dogs!",
};

export default function HuskyCampLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

