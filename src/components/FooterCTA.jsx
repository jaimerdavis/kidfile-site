import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, useLocation } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function FooterCTA() {
  const container = useRef(null);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const getHref = (hash) => isHome ? hash : `/${hash}`;

  useEffect(() => {
    let ctx = gsap.context(() => {
      // CTA title word-by-word fade up
      const words = document.querySelectorAll('.cta-word');
      gsap.from(words, {
        scrollTrigger: {
          trigger: container.current,
          start: 'top 75%',
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      });

      // Floating shapes in bg
      gsap.to('.cta-shape', {
        y: -30,
        rotation: 10,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 1
      });

    }, container);
    return () => ctx.revert();
  }, []);

  const title = "You don't have to remember everything anymore.";

  return (
    <>
      <section ref={container} className="bg-deep-navy relative z-10 pt-28 md:pt-40 pb-20 px-6 rounded-t-[2.5rem] md:rounded-t-[4rem] flex flex-col items-center justify-center overflow-hidden">
        
        {/* Abstract background shapes */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
           <div className="cta-shape absolute top-[10%] left-[10%] w-40 h-40 bg-white rounded-full" />
           <div className="cta-shape absolute bottom-[20%] right-[10%] w-64 h-64 bg-cloud rounded-[3rem] rotate-12" />
           <div className="cta-shape absolute top-1/2 left-2/3 w-32 h-32 bg-white rounded-full" />
        </div>

        <div className="text-center max-w-4xl mx-auto relative z-10">
          <h2 className="text-[2.5rem] md:text-[4.5rem] font-sans font-bold text-white mb-6 md:mb-8 leading-[1.05] tracking-tight flex flex-wrap justify-center gap-x-[0.25em] gap-y-1 md:gap-y-2">
            {title.split(' ').map((word, i) => (
              <span key={i} className="cta-word inline-block">{word}</span>
            ))}
          </h2>
          <h3 className="text-[2.2rem] md:text-[3.5rem] font-accent italic text-honey mb-12 md:mb-16 select-none tracking-tight leading-none">
            Let Kidfile carry it.
          </h3>
          
          <div className="flex justify-center w-full mt-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <a href="#app-store" onClick={(e) => { e.preventDefault(); e.currentTarget.focus(); }} className="group relative overflow-hidden flex items-center justify-center gap-3 bg-white text-deep-navy px-6 py-3.5 md:px-8 md:py-4 rounded-[1.5rem] font-sans btn-spring shadow-xl w-[85%] sm:w-[190px] md:w-[220px] hover:bg-cloud transition-colors focus:outline-none">
                <div className="flex items-center justify-center gap-3 transition-opacity duration-200 group-hover:opacity-0 group-focus:opacity-0 group-active:opacity-0">
                  <svg className="w-7 h-7 md:w-8 md:h-8 pb-[1px] ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.488 12.336c-.027-3.236 2.651-4.803 2.776-4.887-1.503-2.196-3.834-2.496-4.664-2.529-1.956-.197-3.818 1.155-4.814 1.155-1.002 0-2.527-1.121-4.14-1.09-2.096.027-4.032 1.218-5.111 3.09-2.188 3.79-.558 9.395 1.572 12.449 1.042 1.498 2.274 3.193 3.882 3.129 1.545-.062 2.136-.994 3.991-.994 1.84 0 2.38.994 3.978.96 1.637-.027 2.704-1.56 3.731-3.055 1.185-1.745 1.677-3.435 1.704-3.529-.039-.016-3.284-1.258-3.32-4.195zM14.619 3.053c.854-1.031 1.428-2.463 1.272-3.883-1.233.05-2.712.822-3.593 1.849-.785.908-1.474 2.378-1.288 3.771 1.378.106 2.748-.707 3.609-1.737z" />
                  </svg>
                  <div className="flex flex-col items-start text-left">
                    <span className="text-[10px] md:text-[11px] uppercase font-medium tracking-wide opacity-70 leading-none">Download on the</span>
                    <span className="text-[17px] md:text-[20px] font-bold leading-tight mt-0.5">App Store</span>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-deep-navy text-[17px] md:text-[20px] opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100">
                  Coming Soon!
                </div>
              </a>
              <a href="#google-play" onClick={(e) => { e.preventDefault(); e.currentTarget.focus(); }} className="group relative overflow-hidden flex items-center justify-center gap-3 bg-white text-deep-navy px-6 py-3.5 md:px-8 md:py-4 rounded-[1.5rem] font-sans btn-spring shadow-xl w-[85%] sm:w-[190px] md:w-[220px] hover:bg-cloud transition-colors focus:outline-none">
                <div className="flex items-center justify-center gap-3 transition-opacity duration-200 group-hover:opacity-0 group-focus:opacity-0 group-active:opacity-0">
                  <svg className="w-7 h-7 md:w-8 md:h-8 ml-1 text-[#333]" viewBox="0 0 24 24" fill="currentColor">
                     <path d="M3.609 1.814L13.792 12 3.61 22.186c-.156-.168-.249-.408-.249-.691V2.505c0-.283.093-.523.248-.691zM14.654 12.862l3.418-3.418-4.227-2.392L4.664 1.706l9.99 11.156zM18.8 9.055l3.149 1.782c.87.492.87 1.295 0 1.782L18.8 14.398l-3.323-1.894zM14.654 11.138l-4.227 4.226-5.59 3.164 9.817-10.963 0 3.573z"/>
                  </svg>
                  <div className="flex flex-col items-start text-left">
                    <span className="text-[10px] md:text-[11px] uppercase font-medium tracking-wide opacity-70 leading-none">Get it on</span>
                    <span className="text-[17px] md:text-[20px] font-bold leading-tight mt-0.5">Google Play</span>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-deep-navy text-[17px] md:text-[20px] opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100">
                  Coming Soon!
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Details */}
      <footer className="bg-deep-navy pt-8 pb-12 px-6 md:px-12 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8 border-t border-white/10 pt-16">
            
            {/* Logo Col */}
            <div className="col-span-2 md:col-span-2 flex flex-col items-start pr-8 md:pr-16">
              <span className="font-bold text-3xl text-white font-sans tracking-tight mb-4">Kidfile</span>
              <p className="text-white/60 font-sans text-[15px] mb-8 leading-relaxed">The one place for everything about your kid — and one link to share it with anyone who helps care for them.</p>
            </div>
            
            {/* Links */}
            <div className="flex flex-col gap-5 text-[15px] font-sans">
              <span className="text-white/40 font-bold uppercase tracking-widest text-[11px] mb-2 font-mono">Product</span>
              <a href={getHref('#features')} className="text-white/80 hover:text-honey transition-colors">Features</a>
              <a href={getHref('#pricing')} className="text-white/80 hover:text-honey transition-colors">Pricing</a>
              <a href={getHref('#how')} className="text-white/80 hover:text-honey transition-colors">How It Works</a>
            </div>

            <div className="flex flex-col gap-5 text-[15px] font-sans">
              <span className="text-white/40 font-bold uppercase tracking-widest text-[11px] mb-2 font-mono">Company</span>
              <a href="#" className="text-white/80 hover:text-honey transition-colors">About</a>
              <a href="#" className="text-white/80 hover:text-honey transition-colors">Blog</a>
              <a href="#" className="text-white/80 hover:text-honey transition-colors">Careers</a>
            </div>

            <div className="flex flex-col gap-5 text-[15px] font-sans col-span-2 md:col-span-1 pt-4 md:border-0 md:pt-0">
               <span className="text-white/40 font-bold uppercase tracking-widest text-[11px] mb-2 font-mono">Support</span>
              <a href="#" className="text-white/80 hover:text-honey transition-colors">Help Center</a>
              <a href="#" className="text-white/80 hover:text-honey transition-colors">Contact</a>
              <Link to="/faq" className="text-white/80 hover:text-honey transition-colors">FAQ</Link>
              <Link to="/trust-and-safety" className="text-white/80 hover:text-honey transition-colors">Trust & Safety</Link>
            </div>
            
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 mt-16 pt-8 gap-6 md:gap-0">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 text-[13px] font-sans text-white/50 font-medium w-full md:w-auto">
              <span>© 2026 Kidfile</span>
              <div className="flex flex-wrap gap-4 md:gap-6">
                <Link to="/trust-and-safety" className="hover:text-white transition-colors">Your Family's Privacy</Link>
                <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>

            <div className="flex items-center gap-2.5 bg-white/5 rounded-full px-4 py-2 border border-white/10 w-full md:w-auto justify-center md:justify-start">
              <div className="w-2.5 h-2.5 rounded-full bg-soft-sage animate-[pulse_2s_ease-in-out_infinite]" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/60 font-bold mt-0.5">All Systems Operational</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
