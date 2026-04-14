import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.price-card', {
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out'
      });
      
      gsap.to('.pulse-border', {
         boxShadow: '0 0 0 3px rgba(229,182,124,0.4), 0 0 24px rgba(229,182,124,0.3)',
         duration: 2,
         repeat: -1,
         yoyo: true,
         ease: 'sine.inOut'
      });

    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section id="pricing" ref={container} className="py-24 md:py-32 bg-warm-white relative z-10 border-t border-soft-sand">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="font-mono text-honey uppercase tracking-widest text-sm font-bold mb-4 block">Simple Pricing</span>
          <h2 className="text-4xl md:text-[3rem] font-sans font-bold text-deep-navy mb-6 tracking-tight leading-tight">Start free. Upgrade when you're ready.</h2>
          <p className="text-lg md:text-xl font-sans text-deep-navy/70">No trials. No tricks. Choose the village size you need.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Free Plan */}
          <div className="price-card bg-cloud rounded-[2rem] p-8 lg:p-10 border border-soft-sand shadow-soft flex flex-col lg:mt-6 card-lift relative overflow-hidden group">

            <h3 className="text-2xl font-bold font-sans text-deep-navy mb-2">The Basics</h3>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-bold font-sans text-deep-navy">Free</span>
            </div>
            <p className="text-deep-navy/60 font-sans text-[15px] mb-8 pb-8 border-b border-soft-sand">Forever. For real.</p>
            
            <ul className="flex flex-col gap-3 mb-10 flex-1">
              <li className="flex items-start gap-4 text-deep-navy font-sans text-[15px]">
                <div className="bg-soft-sage/20 p-1 rounded-full shrink-0">
                  <Check className="text-soft-sage stroke-[3]" size={14} />
                </div>
                <span><span className="font-bold">1 Profile</span></span>
              </li>
              <li className="flex items-start gap-4 text-deep-navy font-sans text-[15px]">
                <div className="bg-soft-sage/20 p-1 rounded-full shrink-0">
                  <Check className="text-soft-sage stroke-[3]" size={14} />
                </div>
                <span><span className="font-bold">1 User</span> per profile</span>
              </li>
              <li className="flex items-start gap-4 text-deep-navy font-sans text-[15px]">
                <div className="bg-soft-sage/20 p-1 rounded-full shrink-0">
                  <Check className="text-soft-sage stroke-[3]" size={14} />
                </div>
                <span>1 Share link</span>
              </li>

              <li className="flex items-start gap-4 text-deep-navy/50 font-sans text-[15px] pt-2">
                <div className="bg-black/5 p-1 rounded-full shrink-0">
                  <X className="text-deep-navy/40 stroke-[3]" size={14} />
                </div>
                <span className="line-through">Documents</span>
              </li>
              <li className="flex items-start gap-4 text-deep-navy/50 font-sans text-[15px]">
                <div className="bg-black/5 p-1 rounded-full shrink-0">
                  <X className="text-deep-navy/40 stroke-[3]" size={14} />
                </div>
                <span className="line-through">Full profiles & Favorites</span>
              </li>
              <li className="flex items-start gap-4 text-deep-navy/50 font-sans text-[15px]">
                <div className="bg-black/5 p-1 rounded-full shrink-0">
                  <X className="text-deep-navy/40 stroke-[3]" size={14} />
                </div>
                <span className="line-through">Chat & A.I. Assistant</span>
              </li>
              <li className="flex items-start gap-4 text-deep-navy/50 font-sans text-[15px]">
                <div className="bg-black/5 p-1 rounded-full shrink-0">
                  <X className="text-deep-navy/40 stroke-[3]" size={14} />
                </div>
                <span className="line-through">Custom share access</span>
              </li>
            </ul>
            
            <a href="#" className="w-full py-4 rounded-full border-2 border-deep-navy/10 text-deep-navy font-bold font-sans text-center btn-spring hover:border-deep-navy text-[16px] mt-auto relative z-10 bg-cloud">
              Start Free
            </a>
          </div>

          {/* Paid Plan */}
          <div className="price-card bg-cloud rounded-[2.5rem] p-8 lg:p-10 border-2 border-honey pulse-border relative flex flex-col card-lift shadow-[0_20px_60px_rgba(28,43,89,0.08)] z-10 pb-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-honey text-deep-navy px-5 py-2 rounded-full font-mono text-[11px] font-bold uppercase tracking-widest shadow-md whitespace-nowrap z-20">
              Most Families
            </div>
            


            <h3 className="text-2xl font-bold font-sans text-deep-navy mb-2 text-center lg:text-left">Standard</h3>
            <div className="flex items-baseline justify-center lg:justify-start gap-1 mb-2">
              <span className="text-xl font-bold font-sans text-deep-navy self-start mt-2">$</span>
              <span className="text-5xl font-bold font-sans text-deep-navy counter">4.99</span>
              <span className="text-deep-navy/50 font-sans font-medium">/mo</span>
            </div>
            <p className="text-deep-navy/60 font-sans text-[14.5px] mb-8 pb-8 border-b border-soft-sand text-center lg:text-left leading-relaxed">
              Perfect for parents sharing the mental load.
            </p>
            
            <ul className="flex flex-col gap-3 mb-10 flex-1">
              <li className="flex items-start gap-4 text-deep-navy font-sans text-[15px]">
                <div className="bg-honey/20 p-1 rounded-full shrink-0">
                  <Check className="text-honey stroke-[3]" size={14} />
                </div>
                <span><span className="font-bold">3 Profiles</span></span>
              </li>
              <li className="flex items-start gap-4 text-deep-navy font-sans text-[15px]">
                <div className="bg-honey/20 p-1 rounded-full shrink-0">
                  <Check className="text-honey stroke-[3]" size={14} />
                </div>
                <span><span className="font-bold">2 Users</span> per profile</span>
              </li>
              <li className="flex items-start gap-4 text-deep-navy font-sans text-[15px]">
                <div className="bg-honey/20 p-1 rounded-full shrink-0">
                  <Check className="text-honey stroke-[3]" size={14} />
                </div>
                <span>Unlimited Share links</span>
              </li>
              <li className="flex items-start gap-4 text-deep-navy font-sans text-[15px]">
                <div className="bg-honey/20 p-1 rounded-full shrink-0">
                  <Check className="text-honey stroke-[3]" size={14} />
                </div>
                <span>20 Documents per profile</span>
              </li>
              <li className="flex items-start gap-4 text-deep-navy font-sans text-[15px]">
                <div className="bg-honey/20 p-1 rounded-full shrink-0">
                  <Check className="text-honey stroke-[3]" size={14} />
                </div>
                <span>Full profiles & Favorites</span>
              </li>
              <li className="flex items-start gap-4 text-deep-navy font-sans text-[15px]">
                <div className="bg-honey/20 p-1 rounded-full shrink-0">
                  <Check className="text-honey stroke-[3]" size={14} />
                </div>
                <span>Chat & A.I. Assistant</span>
              </li>
              <li className="flex items-start gap-4 text-deep-navy font-sans text-[15px]">
                <div className="bg-honey/20 p-1 rounded-full shrink-0">
                  <Check className="text-honey stroke-[3]" size={14} />
                </div>
                <span>Custom share access</span>
              </li>
            </ul>
            
            <div className="flex flex-col gap-3 relative z-10 w-full mt-auto">
              <a href="#" className="w-full py-4 rounded-full bg-honey text-deep-navy font-bold font-sans text-center btn-spring shadow-[0_8px_20px_rgba(229,182,124,0.4)] text-[16px]">
                Get Standard
              </a>
            </div>
          </div>

          {/* Unlimited Plan */}
          <div className="price-card bg-cloud rounded-[2rem] p-8 lg:p-10 border border-soft-sand shadow-soft flex flex-col lg:mt-6 card-lift">


            <h3 className="text-2xl font-bold font-sans text-deep-navy mb-2 text-center lg:text-left">Premium</h3>
            <div className="flex items-baseline justify-center lg:justify-start gap-1 mb-2">
              <span className="text-xl font-bold font-sans text-deep-navy self-start mt-2">$</span>
              <span className="text-5xl font-bold font-sans text-deep-navy counter">9.99</span>
              <span className="text-deep-navy/50 font-sans font-medium">/mo</span>
            </div>
            <p className="text-deep-navy/60 font-sans text-[14.5px] mb-8 pb-8 border-b border-soft-sand text-center lg:text-left leading-relaxed">
              The entire village. Nannies, grandparents, everyone.
            </p>
            
            <ul className="flex flex-col gap-3 mb-10 flex-1">
              <li className="flex items-start gap-4 text-deep-navy font-sans text-[15px]">
                <div className="bg-soft-sage/20 p-1 rounded-full shrink-0">
                  <Check className="text-soft-sage stroke-[3]" size={14} />
                </div>
                <span><span className="font-bold">Unlimited</span> Profiles & Users</span>
              </li>
              <li className="flex items-start gap-4 text-deep-navy font-sans text-[15px]">
                <div className="bg-soft-sage/20 p-1 rounded-full shrink-0">
                  <Check className="text-soft-sage stroke-[3]" size={14} />
                </div>
                <span><span className="font-bold">Unlimited</span> Documents & Links</span>
              </li>
              <li className="flex items-start gap-4 text-deep-navy font-sans text-[15px]">
                <div className="bg-soft-sage/20 p-1 rounded-full shrink-0">
                  <Check className="text-soft-sage stroke-[3]" size={14} />
                </div>
                <span>Full profiles & Favorites</span>
              </li>
              <li className="flex items-start gap-4 text-deep-navy font-sans text-[15px]">
                <div className="bg-soft-sage/20 p-1 rounded-full shrink-0">
                  <Check className="text-soft-sage stroke-[3]" size={14} />
                </div>
                <span>Chat & A.I. Assistant</span>
              </li>
              <li className="flex items-start gap-4 text-deep-navy font-sans text-[15px]">
                <div className="bg-soft-sage/20 p-1 rounded-full shrink-0">
                  <Check className="text-soft-sage stroke-[3]" size={14} />
                </div>
                <span>Custom share access</span>
              </li>
            </ul>
            
            <div className="flex flex-col gap-3 relative w-full mt-auto">
              <a href="#" className="w-full py-4 rounded-full border-2 border-deep-navy text-deep-navy font-bold font-sans text-center btn-spring hover:bg-deep-navy hover:text-white text-[16px] transition-colors relative z-10 bg-cloud">
                Get Premium
              </a>
            </div>
          </div>

        </div>
        
        <p className="text-center text-[15.5px] font-sans text-deep-navy/60 max-w-2xl mx-auto mt-14 md:mt-20 leading-relaxed font-medium">
          "Your babysitter costs $15 an hour. The app that makes sure she has everything she needs costs a fraction of that."
        </p>
      </div>
    </section>
  );
}
