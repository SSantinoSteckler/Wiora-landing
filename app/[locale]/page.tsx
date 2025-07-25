import { Toaster } from '@/components/ui/toaster';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';
import Testimonials from '@/components/sections/Testimonials';
import WaitlistSection from '@/components/sections/WaitlistSection';
import Footer from '@/components/layout/Footer';
import FAQ from '@/components/sections/FAQ';
import Navbar from '@/components/navbar/Navbar';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className=' bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900 text-white overflow-hidden screen-height-with-header'>
        <main className='space-y-28'>
          <Hero />
          <Features />
          <HowItWorks />
          <Testimonials />
          <section>
            <FAQ />
            <WaitlistSection />
          </section>
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}
