import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Gaff Electrics - Professional Electrical Services',
  description: 'Expert residential and commercial electrical services. Available 24/7 for emergencies. Fast, safe, and reliable.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
