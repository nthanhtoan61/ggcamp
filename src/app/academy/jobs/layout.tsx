import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become a Camp Counselor in Europe | Go and Grow Camp",
  description:
    "Go and Grow Camp Academy and Camp Europe offer voluntary positions for International Camp Counselors in Europe ► Join us",
};

export default function JobsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

