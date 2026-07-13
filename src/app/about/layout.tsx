import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us & Heritage",
  description: "Discover the 85+ year heritage of Banasthali Vidyapith, founded in 1935 by Pandit Hiralal Shastri and Smt. Ratan Shastri, dedicated to holistic women's education.",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
