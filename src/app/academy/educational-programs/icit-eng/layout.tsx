import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "International Counsellor in Training (ICIT) Training Program in Germany | Go and Grow Camp",
  description:
    "Get trained as an international camp counselor in Germany. For 17 to 19-year-olds. ► further details here!",
};

export default function IcitEngLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

