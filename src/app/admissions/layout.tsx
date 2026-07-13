import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions & Eligibility",
  description: "Comprehensive admission guidelines, eligibility criteria, Aptitude Test details, and application procedures for undergraduate and postgraduate courses at Banasthali Vidyapith.",
};

export default function AdmissionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
