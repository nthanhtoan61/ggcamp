import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book your Summer Camp 2026 in Europe | Go and Grow Camp",
  description:
    "☀ Click here to book an international trip for your child to Germany, England & Spain ☀ Language Camp, Survival Camp, Sports Camp, Soccer Camp, etc. ☀",
};

export default function DestinationsBookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}



