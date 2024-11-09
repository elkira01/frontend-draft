import { Layout } from 'antd';

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Layout className='h-[100vh]'>{children}</Layout>;
}
