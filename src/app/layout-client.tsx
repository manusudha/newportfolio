'use client';

import ChatBubble from '@/components/common/ChatBubble';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import OnekoCat from '@/components/common/OnekoCat';
import { Quote } from '@/components/common/Quote';
import { ThemeProvider } from '@/components/common/ThemeProviders';
import ReactLenis from 'lenis/react';

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ReactLenis root>
        <Navbar />
        {children}
        <OnekoCat />
        <Quote />
        <Footer />
        <ChatBubble />
        {/* <UmamiAnalytics />*/}
      </ReactLenis>
    </ThemeProvider>
  );
}
