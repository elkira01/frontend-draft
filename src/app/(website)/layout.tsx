import LandingLayout from '@/app/(website)/components/layout/LandingLayout';

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LandingLayout>{children}</LandingLayout>;
}
