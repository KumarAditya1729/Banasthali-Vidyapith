import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accreditation & Rankings",
  description: "Official NAAC A++ Grade accreditation, NIRF university rankings, QS World Rankings, and UGC statutory recognition of Banasthali Vidyapith.",
};

export default function AccreditationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
