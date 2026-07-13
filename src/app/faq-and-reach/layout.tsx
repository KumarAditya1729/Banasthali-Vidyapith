import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Official FAQs & Travel Guide",
  description: "Official answers to frequently asked questions on admissions, fees, and residential amenities, plus a comprehensive travel guide to reach Banasthali campus by road, rail, or air.",
};

export default function FaqAndReachLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
