import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Official Notices & Circulars",
  description: "Stay updated with official notifications, examination schedules, academic calendars, admissions deadlines, and administrative circulars from Banasthali Vidyapith.",
};

export default function NoticesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
