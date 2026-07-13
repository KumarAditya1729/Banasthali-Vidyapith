import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scholarships & Financial Aid",
  description: "Explore merit scholarships, financial assistance, fee concessions, and government scholarship schemes available for meritorious and deserving students at Banasthali Vidyapith.",
};

export default function ScholarshipsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
