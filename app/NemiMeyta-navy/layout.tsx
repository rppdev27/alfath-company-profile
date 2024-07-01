import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import Headers from '@/app/components/Header-Home';
// import Footer from '@/app/components/Footer2';
import Link from 'next/link';


export const metadata: Metadata = {
  title: '10 Tahun Menica - Versi 6 100% Gratis',
  description: 'Memperingati 10 Tahun Menica',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        {/* <Headers/> */}

        <div className="relative flex flex-col min-h-screen bg-[#152443] overflow-hidden">
            <div className="fixed inset-0 w-full h-screen bg-no-repeat bg-contain bg-center animate-spin-slow" style={{ backgroundImage: 'url("https://ik.imagekit.io/vtvggda66/mandala-navy1-big.png?updatedAt=1719847550283")' }}></div>
            <div className="relative z-10 w-full">
                {children}
            </div>
        </div>

        {/* <Footer/> */}
    </>
  );
}