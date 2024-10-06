import localFont from 'next/font/local';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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

export const metadata = {
  title: 'LearnXperience',
  description: 'Learn tech in an interactive and immersive way.',
  icons: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicons/android-chrome-192x192.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '512x512',
      url: '/favicons/android-chrome-512x512.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      url: '/favicons/android-chrome-192x192.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicons/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicons/favicon-16x16.png',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={` ${geistSans.variable} ${geistMono.variable}  antialiased bg-gray-50 text-gray-900 inter`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
