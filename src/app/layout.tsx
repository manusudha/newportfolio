import { generateMetadata as getMetadata } from '@/config/Meta';
import { ViewTransitions } from 'next-view-transitions';

import './globals.css';
import LayoutClient from './layout-client';

export const metadata = getMetadata('/');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body className={`font-hanken-grotesk antialiased`}>
          <LayoutClient>{children}</LayoutClient>
        </body>
      </html>
    </ViewTransitions>
  );
}
