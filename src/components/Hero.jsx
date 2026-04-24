import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Entrance animation for text elements
      gsap.from('.hero-element', {
        y: 30,
        opacity: 0,
        duration: 1.2,
        stagger: window.innerWidth < 768 ? 0.07 : 0.1,
        ease: 'power3.out',
        delay: 0.1
      });

      // Original subtle background floating shapes
      gsap.to('.shape-1', { y: -20, x: 10, rotation: 5, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      gsap.to('.shape-2', { y: 20, x: -15, rotation: -10, duration: 5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1 });
      gsap.to('.shape-3', { y: -15, x: 20, duration: 4.5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.5 });

      // The individual 3D icon continuous bouncing is now handled entirely by CSS in index.css
      // to perfectly sidestep GSAP/Vite HMR transform matrix conflicts and ensure silky smooth 60fps performance!

      // Scroll-based parallax (very subtle depth)
      gsap.to('.parallax-heart', {
        scrollTrigger: { trigger: container.current, start: 'top top', end: 'bottom top', scrub: 0.5 },
        yPercent: -3, xPercent: 0
      });
      gsap.to('.parallax-phone', {
        scrollTrigger: { trigger: container.current, start: 'top top', end: 'bottom top', scrub: 0.5 },
        yPercent: -4, xPercent: -1
      });
      gsap.to('.parallax-bus', {
        scrollTrigger: { trigger: container.current, start: 'top top', end: 'bottom top', scrub: 0.5 },
        yPercent: -2, xPercent: 0
      });
      gsap.to('.parallax-calendar', {
        scrollTrigger: { trigger: container.current, start: 'top top', end: 'bottom top', scrub: 0.5 },
        yPercent: -4, xPercent: 1
      });
      
      // Interactive Mouse Parallax (very gentle tilt)
      const handleMouseMove = (e) => {
        if (window.innerWidth < 768) return; 
        
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 2;
        const yPos = (clientY / window.innerHeight - 0.5) * 2;

        gsap.to('.hero-base-image', { x: xPos * 1, y: yPos * 1, duration: 2, ease: 'power2.out' });
        gsap.to('.parallax-heart', { x: xPos * -1, y: yPos * -1, duration: 2, ease: 'power2.out' });
        gsap.to('.parallax-phone', { x: xPos * 2, y: yPos * 2, duration: 2, ease: 'power2.out' });
        gsap.to('.parallax-bus', { x: xPos * -2, y: yPos * -1, duration: 2, ease: 'power2.out' });
        gsap.to('.parallax-calendar', { x: xPos * 2, y: yPos * 2, duration: 2, ease: 'power2.out' });
      };

      window.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, container);
    
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={container}
      className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[rgb(250,248,244)] to-[#F0EBE0] pt-[170px] pb-24 md:pt-[140px] md:pb-0"
    >
      {/* Background glow effects to highlight 3D icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-honey/5 blur-[100px]" />
        <div className="absolute bottom-[10%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-soft-sage/5 blur-[120px]" />
      </div>

      {/* Decorative floating shapes (Original subtle textures) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="shape-1 absolute top-[20%] left-[5%] md:left-[10%] w-24 h-24 md:w-32 md:h-32 rounded-full border-[6px] border-honey/15" />
        <div className="shape-2 absolute bottom-[25%] right-[5%] md:right-[15%] w-20 h-32 md:w-24 md:h-40 rounded-[2rem] bg-soft-sage/10" />
        <div className="shape-3 absolute top-[35%] right-[2%] md:right-[8%] w-12 h-12 md:w-16 md:h-16 rounded-full bg-lavender-mist/15" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left mt-12 md:mt-0">
          <h1 className="hero-element text-[2.25rem] md:text-6xl font-sans font-bold text-deep-navy leading-[1.1] mb-2 tracking-tighter">
            Everything about your kid.
          </h1>
          <h2 className="hero-element text-[2.25rem] md:text-[4rem] font-accent italic text-honey leading-[1.2] tracking-tight mb-6 mt-1 md:mt-2">
            One link away.
          </h2>
          <p className="hero-element text-[1rem] md:text-xl font-sans text-deep-navy/70 mb-8 max-w-[400px] leading-relaxed">
            Allergies, medicine doses, emergency contacts, shoe sizes, bedtime routines — all in one place. Share it with your babysitter, grandma, or co-parent in a single tap.
          </p>
          
          <div className="hero-element flex flex-col sm:flex-row items-center md:items-start w-full gap-3 md:gap-4 mt-2">
            <a href="#app-store" onClick={(e) => { e.preventDefault(); e.currentTarget.focus(); }} className="group relative overflow-hidden flex items-center justify-center gap-3 bg-deep-navy text-white px-5 md:px-6 rounded-[1.25rem] font-sans btn-spring shadow-soft w-[85%] sm:w-[190px] md:w-[210px] h-[56px] md:h-[64px] hover:bg-[#152042] transition-colors border border-deep-navy/10 focus:outline-none">
              <div className="flex items-center justify-center gap-3 transition-opacity duration-200 group-hover:opacity-0 group-focus:opacity-0 group-active:opacity-0">
                <svg className="w-6 h-6 md:w-7 md:h-7 pb-[1px] ml-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.488 12.336c-.027-3.236 2.651-4.803 2.776-4.887-1.503-2.196-3.834-2.496-4.664-2.529-1.956-.197-3.818 1.155-4.814 1.155-1.002 0-2.527-1.121-4.14-1.09-2.096.027-4.032 1.218-5.111 3.09-2.188 3.79-.558 9.395 1.572 12.449 1.042 1.498 2.274 3.193 3.882 3.129 1.545-.062 2.136-.994 3.991-.994 1.84 0 2.38.994 3.978.96 1.637-.027 2.704-1.56 3.731-3.055 1.185-1.745 1.677-3.435 1.704-3.529-.039-.016-3.284-1.258-3.32-4.195zM14.619 3.053c.854-1.031 1.428-2.463 1.272-3.883-1.233.05-2.712.822-3.593 1.849-.785.908-1.474 2.378-1.288 3.771 1.378.106 2.748-.707 3.609-1.737z" />
                </svg>
                <div className="flex flex-col items-start text-left whitespace-nowrap">
                  <span className="text-[9px] md:text-[10px] uppercase font-medium tracking-wide opacity-80 leading-none">Download on the</span>
                  <span className="text-[15px] md:text-[17px] font-bold leading-tight mt-0.5">App Store</span>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center font-bold text-honey text-[16px] md:text-[18px] opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100">
                Coming Soon!
              </div>
            </a>
            <a href="#google-play" onClick={(e) => { e.preventDefault(); e.currentTarget.focus(); }} className="group relative overflow-hidden flex items-center justify-center gap-3 bg-deep-navy text-white px-5 md:px-6 rounded-[1.25rem] font-sans btn-spring shadow-soft w-[85%] sm:w-[190px] md:w-[210px] h-[56px] md:h-[64px] hover:bg-[#152042] transition-colors border border-deep-navy/10 focus:outline-none">
              <div className="flex items-center justify-center gap-3 transition-opacity duration-200 group-hover:opacity-0 group-focus:opacity-0 group-active:opacity-0">
                <svg className="w-6 h-6 md:w-7 md:h-7 ml-1 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M3.609 1.814L13.792 12 3.61 22.186c-.156-.168-.249-.408-.249-.691V2.505c0-.283.093-.523.248-.691zM14.654 12.862l3.418-3.418-4.227-2.392L4.664 1.706l9.99 11.156zM18.8 9.055l3.149 1.782c.87.492.87 1.295 0 1.782L18.8 14.398l-3.323-1.894zM14.654 11.138l-4.227 4.226-5.59 3.164 9.817-10.963 0 3.573z"/>
                </svg>
                <div className="flex flex-col items-start text-left whitespace-nowrap">
                  <span className="text-[9px] md:text-[10px] uppercase font-medium tracking-wide opacity-80 leading-none">Get it on</span>
                  <span className="text-[15px] md:text-[17px] font-bold leading-tight mt-0.5">Google Play</span>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center font-bold text-honey text-[16px] md:text-[18px] opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100">
                Coming Soon!
              </div>
            </a>
          </div>
        </div>

        {/* Hero Illustration */}
        <div className="hero-element relative w-full aspect-square md:aspect-[4/3] max-w-sm md:max-w-md mx-auto mt-12 md:mt-0 lg:scale-[1.1] lg:translate-x-4 pr-6 pb-6 md:pr-0 md:pb-0">
          
          {/* Base image */}
          <img 
            src="/kf-debbie-hero.png" 
            alt="Kidfile Hero Base" 
            className="hero-base-image w-full h-auto object-contain relative z-20 drop-shadow-[0_20px_40px_rgba(28,43,89,0.15)]"
          />

          {/* Floating 3D Parallax Icons neatly stacked on left edge */}
          <div className="parallax-heart absolute left-[4%] md:left-[7%] top-[22%] md:top-[22%] w-[11%] md:w-[12%] z-30 pointer-events-none">
            <img 
              src="/kf-pink-heart.png" 
              alt="Heart icon" 
              className="hero-icon-heart animate-float-heart w-full h-auto drop-shadow-[0_15px_35px_rgba(236,72,153,0.5)]" 
            />
          </div>
          <div className="parallax-phone absolute left-[-1%] md:left-[1%] top-[44%] md:top-[44%] w-[12%] md:w-[13%] z-30 pointer-events-none">
            <img 
              src="/kf-phone exclamation.png" 
              alt="Phone alert icon" 
              className="hero-icon-phone animate-float-phone w-full h-auto drop-shadow-[0_15px_35px_rgba(168,85,247,0.45)]" 
            />
          </div>
          <div className="parallax-bus absolute left-[3%] md:left-[6%] top-[66%] md:top-[66%] w-[15%] md:w-[16%] z-30 pointer-events-none">
            <img 
              src="/kf-schoolbus.png" 
              alt="Bus icon" 
              className="hero-icon-bus animate-float-bus w-full h-auto drop-shadow-[0_20px_40px_rgba(56,189,248,0.45)]" 
            />
          </div>
          {/* Calendar positioned slightly right of the bus underneath */}
          <div className="parallax-calendar absolute left-[22%] md:left-[24%] top-[86%] md:top-[85%] w-[10%] md:w-[11%] z-30 pointer-events-none">
            <img 
              src="/kf-calendar.png" 
              alt="Calendar icon" 
              className="hero-icon-calendar animate-float-calendar w-full h-auto drop-shadow-[0_15px_35px_rgba(251,113,133,0.5)]" 
            />
          </div>
          
        </div>

      </div>

      {/* Social Proof Strip */}
      <div className="hero-element absolute bottom-0 left-0 w-full bg-cloud/70 backdrop-blur-md border-t border-soft-sand/50 py-3 md:py-4 px-6 overflow-x-auto hide-scrollbar z-20">
        <div className="flex items-center justify-start md:justify-center gap-10 md:gap-16 max-w-7xl mx-auto min-w-max text-xs md:text-sm text-deep-navy">
          <div className="flex items-center gap-2">
            <span className="text-honey tracking-widest text-[10px] md:text-xs">★★★★★</span>
            <span className="italic font-sans">"Finally, I'm not the only one who knows everything." — Sarah, mom of 3</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-honey tracking-widest text-[10px] md:text-xs">★★★★★</span>
            <span className="italic font-sans">"My babysitter actually thanked me." — Marcus, dad of 2</span>
          </div>
          <div className="flex items-center gap-2 pr-6 md:pr-0">
            <span className="text-honey tracking-widest text-[10px] md:text-xs">★★★★★</span>
            <span className="italic font-sans">"I sent it to my ex and we stopped arguing..." — Priya, mom of 1</span>
          </div>
        </div>
      </div>
    </section>
  );
}
