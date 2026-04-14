import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl rounded-[1.5rem] transition-all duration-300 ${
          scrolled 
            ? 'bg-warm-white/80 backdrop-blur-xl border border-soft-sand shadow-soft py-3' 
            : 'bg-transparent border-transparent py-4'
        }`}
      >
        <div className="flex items-center justify-between px-6">
          <a href="#" className="flex-shrink-0 relative z-10 block py-1">
            <img src="/logo.png" alt="Kidfile Logo" className="h-20 md:h-24 w-auto object-contain" />
          </a>
          
          <div className="hidden md:flex items-center gap-8 text-deep-navy font-medium font-sans">
            <a href="#how" className="hover:text-honey transition-colors">How It Works</a>
            <a href="#features" className="hover:text-honey transition-colors">Features</a>
            <a href="#pricing" className="hover:text-honey transition-colors">Pricing</a>
          </div>

          <div className="hidden md:block">
            <a href="#get-started" className="bg-honey text-deep-navy px-6 py-2.5 rounded-full font-bold btn-spring inline-block shadow-sm">
              <span className="relative z-10">Get Started</span>
            </a>
          </div>

          <button 
            className="md:hidden text-deep-navy p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-warm-white z-40 transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } md:hidden flex flex-col items-center justify-center`}
      >
        <div className="flex flex-col items-center gap-8 text-2xl font-bold font-sans text-deep-navy">
          <a href="#how" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
          <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
          <a 
            href="#get-started" 
            onClick={() => setMobileMenuOpen(false)}
            className="bg-honey text-deep-navy px-8 py-4 rounded-full font-bold btn-spring mt-4 pointer-events-auto shadow-soft"
          >
            Get Started Free
          </a>
        </div>
      </div>
    </>
  );
}
