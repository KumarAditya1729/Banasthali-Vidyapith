import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academic Programs & Faculties",
  description: "Explore world-class academic programs from undergraduate to doctoral studies across Humanities, Social Sciences, STEM, Law, Management, and Design at Banasthali Vidyapith.",
};

export default function AcademicsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
