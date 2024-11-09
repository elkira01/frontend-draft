import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../styles/globals.css';
import AppThemeProvider from '@/app/_app';
import {AntdRegistry} from '@ant-design/nextjs-registry'

const geistSans = localFont({
  src: '../styles/assets/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../styles/assets/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'R-Encarta',
  description: 'Multipurpose platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='w-full'>
        <AppThemeProvider>
          <AntdRegistry>{children}</AntdRegistry>
        </AppThemeProvider>
      </body>
    </html>
  );
}
