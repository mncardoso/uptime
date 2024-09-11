import type { Metadata } from 'next';

import localFont from 'next/font/local';

import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Uptime.com :) The OG Website Monitoring Service',
  description:
    'Start monitoring in seconds your websites, APIs, cron jobs and more. Unlimited email, SMS, Slack notifications.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <a href="#main" className={'skipToContent'}>
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
