import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Staggered cards entrance
      gsap.from('.step-card', {
        scrollTrigger: {
          trigger: container.current,
          start: 'top 75%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: window.innerWidth < 768 ? 0.15 : 0.2,
        ease: 'power3.out'
      });

      // Floating animations for micro-UI illustrations
      gsap.to('.micro-ui-1', { y: -8, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      gsap.to('.micro-ui-2', { y: -8, duration: 3.5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.5 });
      gsap.to('.micro-ui-3', { y: -8, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1 });
      
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section id="how" ref={container} className="py-24 md:py-32 bg-cloud relative z-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="font-mono text-coral-pop uppercase tracking-widest text-sm font-bold mb-4 block">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-deep-navy mb-6 tracking-tight">Three minutes. That's it.</h2>
          <p className="text-lg md:text-xl font-sans text-deep-navy/70">Set it up once and never re-text your kid's info again.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-10">
          
          {/* Step 1 */}
          <div className="step-card flex flex-col items-center md:items-start text-center md:text-left card-lift">
            <div className="w-full aspect-[4/3] bg-warm-white rounded-card overflow-hidden mb-8 relative border border-soft-sand flex items-center justify-center">
               <div className="micro-ui-1 w-[60%] h-[80%] bg-cloud rounded-2xl shadow-sm border border-soft-sand flex flex-col items-center justify-start p-4 top-4 relative">
                  <div className="w-10 h-10 rounded-full bg-honey/20 mb-4" />
                  <div className="w-full h-4 bg-warm-white rounded mb-2 overflow-hidden relative">
                    <div className="absolute top-0 left-0 h-full w-[40%] bg-honey/40 rounded" />
                  </div>
                  <div className="w-full h-4 bg-warm-white rounded mb-2 overflow-hidden relative">
                    <div className="absolute top-0 left-0 h-full w-[70%] bg-coral-pop/30 rounded" />
                  </div>
                  <div className="w-[80%] h-4 bg-soft-sage/20 rounded mt-auto" />
               </div>
               <div className="absolute top-4 right-5 text-deep-navy font-mono opacity-[0.08] text-4xl font-bold">01</div>
            </div>
            <div className="text-deep-navy/40 font-bold font-mono text-lg mb-2">01</div>
            <h3 className="text-2xl font-bold font-sans text-deep-navy mb-3">Add your kid</h3>
            <p className="text-deep-navy/70 font-sans leading-relaxed">Name, age, and the stuff that matters — allergies, meds, emergency contacts, pediatrician. Fill in what you know. Skip what you don't.</p>
          </div>

          {/* Step 2 */}
          <div className="step-card flex flex-col items-center md:items-start text-center md:text-left card-lift">
            <div className="w-full aspect-[4/3] bg-warm-white rounded-card overflow-hidden mb-8 relative border border-soft-sand flex items-center justify-center relative">
               <div className="absolute inset-0 bg-gradient-to-br from-cloud/0 to-honey/5 pointer-events-none" />
               <div className="micro-ui-2 w-[55%] h-[90%] bg-cloud rounded-t-2xl shadow-soft border border-soft-sand flex flex-col p-4 mt-12 relative">
                  <div className="w-12 h-2.5 bg-honey/30 rounded-full mb-5" />
                  <div className="w-full bg-coral-pop/15 h-8 rounded-lg mb-3" />
                  <div className="w-full bg-lavender-mist/15 h-12 rounded-lg mb-3" />
                  <div className="w-full bg-soft-sage/15 h-8 rounded-lg mb-3" />
               </div>
               <div className="absolute top-4 right-5 text-deep-navy font-mono opacity-[0.08] text-4xl font-bold">02</div>
            </div>
            <div className="text-deep-navy/40 font-bold font-mono text-lg mb-2">02</div>
            <h3 className="text-2xl font-bold font-sans text-deep-navy mb-3">Your care card appears</h3>
            <p className="text-deep-navy/70 font-sans leading-relaxed">One beautiful page with everything on it. Always up to date. Looks great on any phone — and nobody needs to download an app to see it.</p>
          </div>

          {/* Step 3 */}
          <div className="step-card flex flex-col items-center md:items-start text-center md:text-left card-lift">
            <div className="w-full aspect-[4/3] bg-warm-white rounded-card overflow-hidden mb-8 relative border border-soft-sand flex flex-col items-center justify-center">
               <div className="micro-ui-3 w-[70%] bg-cloud rounded-2xl shadow-soft border border-soft-sand flex flex-col p-4 relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-lavender-mist/30" />
                    <div className="w-24 h-2.5 bg-deep-navy/10 rounded-full" />
                    <div className="ml-auto w-5 h-5 rounded-full bg-soft-sage/20 flex items-center justify-center">
                       <div className="w-2 h-2 bg-soft-sage rounded-full" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-honey/30" />
                    <div className="w-16 h-2.5 bg-deep-navy/10 rounded-full" />
                    <div className="ml-auto w-5 h-5 rounded-full bg-soft-sage/20 flex items-center justify-center">
                       <div className="w-2 h-2 bg-soft-sage rounded-full" />
                    </div>
                  </div>
               </div>
               <div className="absolute top-4 right-5 text-deep-navy font-mono opacity-[0.08] text-4xl font-bold">03</div>
            </div>
            <div className="text-deep-navy/40 font-bold font-mono text-lg mb-2">03</div>
            <h3 className="text-2xl font-bold font-sans text-deep-navy mb-3">Share one link</h3>
            <p className="text-deep-navy/70 font-sans leading-relaxed">Text it to the babysitter. Email it to the school. Send it to grandma. Everyone who helps with your kid now has what they need.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
