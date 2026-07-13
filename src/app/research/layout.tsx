import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research & Innovation",
  description: "Discover cutting-edge research, Atal Incubation Centre (AIC), patent filings, state-of-the-art laboratories, and doctoral research programs at Banasthali Vidyapith.",
};

export default function ResearchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
