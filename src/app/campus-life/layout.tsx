import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campus Life & Residential Hostels",
  description: "Experience vibrant residential life on our 850-acre self-contained sanctuary featuring 29 student hostels, aviation gliding club, equestrian sports, and Panchmukhi activities.",
};

export default function CampusLifeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
