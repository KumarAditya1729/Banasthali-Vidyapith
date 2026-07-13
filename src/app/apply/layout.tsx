import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Application Portal",
  description: "Apply online for undergraduate, postgraduate, and doctoral programs at Banasthali Vidyapith. Access official admission forms, prospectus, and payment portal.",
};

export default function ApplyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
