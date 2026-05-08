import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C3539] font-serif">
      {/* Header */}
      <header className="px-8 py-10 max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl tracking-[0.2em] uppercase font-light">Konnectia</div>
        <nav className="hidden md:flex gap-12 text-sm tracking-widest uppercase text-[#5A666B]">
          <a href="#" className="hover:text-[#2C3539] transition-colors pb-1 border-b border-transparent hover:border-[#2C3539]">Philosophy</a>
          <a href="#products" className="hover:text-[#2C3539] transition-colors pb-1 border-b border-transparent hover:border-[#2C3539]">Products</a>
          <a href="#" className="hover:text-[#2C3539] transition-colors pb-1 border-b border-transparent hover:border-[#2C3539]">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-20 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left">
          <p className="uppercase tracking-[0.3em] text-xs mb-8 text-[#8E9B9A]">Tailored Artificial Intelligence</p>
          <h1 className="text-5xl md:text-7xl leading-[1.1] mb-8 font-normal text-[#1A2124]">
            Bespoke <br className="hidden md:block"/>
            <span className="italic text-[#798C8A]">Intelligence for</span><br/>
            Specific Communities.
          </h1>
          <p className="text-lg md:text-xl text-[#5A666B] max-w-xl mx-auto lg:mx-0 mb-12 font-light leading-relaxed">
            Konnectia crafts sophisticated AI agents curated for precise demographics. We eschew generic solutions in favor of nuanced, highly specialized digital companionship and assistance.
          </p>
          <a href="#products" className="inline-flex group items-center gap-4 text-sm uppercase tracking-widest border-b border-[#2C3539] pb-2 hover:text-[#798C8A] hover:border-[#798C8A] transition-all mx-auto lg:mx-0">
            Explore our products
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
        
        <div className="flex-1 w-full relative">
          <div className="aspect-[4/5] bg-[#E8E6E1] w-full max-w-md mx-auto relative flex items-center justify-center p-8">
            <div className="absolute inset-4 border border-[#D5D0C5]"></div>
            <div className="text-center z-10 p-8 bg-[#FDFBF7] shadow-xl">
              <h3 className="uppercase tracking-[0.2em] text-sm mb-4">Our Methodology</h3>
              <p className="italic text-[#5A666B]">"True intelligence is context-aware. It adapts not just to the task, but to the nature of the human performing it."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="bg-[#1A2124] text-[#FDFBF7] py-32 px-8 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-4xl italic mb-6">Our Portfolio</h2>
            <div className="w-12 h-px bg-[#798C8A] mx-auto md:mx-0"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Menteviva Tab / Card */}
            <a 
              href="https://menteviva-ai.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block border border-[#2C3539] p-12 hover:border-[#798C8A] transition-all bg-[#1F272B] hover:bg-[#252E32]"
            >
              <div className="flex justify-between items-start mb-12">
                <h3 className="text-3xl italic">Menteviva</h3>
                <span className="text-[#A4B1B0] group-hover:text-[#FDFBF7] transition-colors">
                  <ArrowRight size={24} className="group-hover:-rotate-45 transition-transform" />
                </span>
              </div>
              <p className="font-light text-[#A4B1B0] leading-relaxed mb-12 h-24">
                An elegant solution addressing the complex needs of the elderly demographic. Menteviva transcends typical utility to offer genuine cognitive companionship.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="text-xs uppercase tracking-widest text-[#798C8A] border border-[#2C3539] px-4 py-2">Senior Care</span>
                <span className="text-xs uppercase tracking-widest text-[#798C8A] border border-[#2C3539] px-4 py-2">Voice AI</span>
                <span className="text-xs uppercase tracking-widest text-[#FDFBF7] border border-[#FDFBF7] px-4 py-2 ml-auto group-hover:bg-[#FDFBF7] group-hover:text-[#1A2124] transition-colors">Launch Agent</span>
              </div>
            </a>

            {/* Future Product Placeholder */}
            <div className="border border-[#2C3539] p-12 opacity-50 relative overflow-hidden">
              <div className="absolute inset-0 bg-[#1A2124]/80 backdrop-blur-sm flex items-center justify-center z-10">
                <span className="text-sm uppercase tracking-widest text-[#A4B1B0] border border-[#2C3539] px-6 py-3">In Development</span>
              </div>
              <div className="flex justify-between items-start mb-12">
                <h3 className="text-3xl italic">Project N.</h3>
                <span className="text-[#5A666B]">
                  <ArrowRight size={24} />
                </span>
              </div>
              <p className="font-light text-[#5A666B] leading-relaxed mb-12 h-24">
                Specialized cognitive assistance for early-childhood development and neurodivergent learning patterns.
              </p>
              <div className="flex gap-4">
                <span className="text-xs uppercase tracking-widest text-[#5A666B] border border-[#2C3539] px-4 py-2">Education</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 text-center">
        <div className="text-xl tracking-[0.3em] uppercase font-light text-[#8E9B9A] mb-8">Konnectia</div>
        <p className="text-xs uppercase tracking-widest text-[#A4B1B0]">© 2026 Konnectia Limited. All rights reserved.</p>
      </footer>
    </div>
  );
}
