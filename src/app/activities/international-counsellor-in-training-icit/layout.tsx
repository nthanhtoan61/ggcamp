import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "International Counsellor in Training (ICIT) | Camp Adventure",
  description:
    "ICIT program in Germany for teenagers from 17-19 years. Start your journey to become a camp counselor!",
};

export default function InternationalCounsellorInTrainingIcitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

