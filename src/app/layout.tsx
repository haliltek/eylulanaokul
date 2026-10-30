import type { Metadata } from 'next';
import { Nunito, Comfortaa, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-nunito',
  display: 'swap',
});

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-comfortaa',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Eylül Çocuk Akademisi Anaokulu | Güvenle Bugüne, Umutla Yarına',
  description:
    'Eylül Çocuk Akademisi; 3-6 yaş butik sınıfları, Bütünleştirilmiş Eğitim Modeli (BEM), All Day English tam gün İngilizce, zengin etkinlik dünyası ve doğal beslenme felsefesiyle geleceğe sevgiyle hazırlıyor.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${nunito.variable} ${comfortaa.variable} ${plusJakartaSans.variable} scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Nunito:ital,wght@0,400;0,600;0,700;0,800;0,900;1,700&display=swap"
        />
      </head>
      <body className="antialiased bg-[#FEFAF2] text-slate-800 font-sans selection:bg-[#E5880B] selection:text-white">
        {children}
      </body>
    </html>
  );
}
