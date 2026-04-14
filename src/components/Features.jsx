import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const featureData = [
  {
    title: "The stuff that can't wait",
    body: "Allergies with severity levels. Current medications with exact doses. Known conditions. Blood type. Insurance info. The things a babysitter, ER nurse, or school nurse needs to see in 3 seconds.",
    tags: "Allergies • Medications • Conditions • Insurance",
    imageHint: "Care card health section. Peanut allergy badge, med entry.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    color: "bg-[#FBE4E9]" // Lighter coral-pop tint
  },
  {
    title: "The stuff that makes bedtime possible",
    body: "Nap schedule, bedtime routine, safe foods, avoid foods, favorite comfort items, how to handle a meltdown. Everything the babysitter wishes they knew before you left.",
    tags: "Routine • Foods • Preferences • Notes",
    imageHint: "Routine section. Schedule, food tags. Cozy, nurturing.",
    image: "https://images.unsplash.com/photo-1555505019-8c3f1c4aba5f?auto=format&fit=crop&w=800&q=80",
    color: "bg-[#F9ECE0]" // Lighter honey tint
  },
  {
    title: "The stuff that's always in your head",
    body: "Pediatrician name and number. Dentist. Emergency contacts with relationships. Pickup authorization list. School or daycare info, teacher name, classroom number. It all lives here now instead of in your brain.",
    tags: "Doctors • Emergency Contacts • School • Pickup List",
    imageHint: "Contacts section: pediatrician, emergency contacts, school info.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    color: "bg-[#EAEFF6]" // Lighter lavender tint
  },
  {
    title: "The stuff you can never find",
    body: "Vaccination records, insurance cards, birth certificates, IEPs, sports physicals, custody agreements — snap a photo, it's stored and shareable. No more digging through your camera roll at the pediatrician's office.",
    tags: "Immunizations • Insurance • School Forms • Documents",
    imageHint: "Phone camera scanning insurance card → digital record.",
    image: "https://images.unsplash.com/photo-1586282391129-76a6df230234?auto=format&fit=crop&w=800&q=80",
    color: "bg-[#EAF3EA]" // Lighter sage tint
  },
  {
    title: "The stuff grandma always asks",
    body: "Clothing sizes. Shoe size. Diaper size. Favorite foods. Stuff grandma texts you about every single time she goes to the store. Now she can just check the link.",
    tags: "Clothing • Shoes • Diapers • Favorites",
    imageHint: "Grandma in store checking sizes on phone. Humorous, warm.",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80",
    color: "bg-warm-white"
  }
];

export default function Features() {
  const container = useRef(null);
  const blocksRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      blocksRef.current.forEach((block, i) => {
        if (!block) return;
        const isEven = i % 2 === 0;
        const textContent = block.querySelector('.feature-text');
        const imgContent = block.querySelector('.feature-img');
        
        gsap.from(textContent, {
          scrollTrigger: {
            trigger: block,
            start: 'top 85%',
          },
          x: isEven ? 40 : -40,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });

        gsap.from(imgContent, {
          scrollTrigger: {
            trigger: block,
            start: 'top 85%',
          },
          x: isEven ? -40 : 40,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
          delay: 0.1
        });
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={container} className="py-24 md:py-32 bg-soft-sand relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-32">
          <span className="font-mono text-honey uppercase tracking-widest text-sm font-bold mb-4 block">The Care Card</span>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-deep-navy mb-6 tracking-tight">Everything they need.<br className="hidden md:block"/> Nothing they don't.</h2>
          <p className="text-lg md:text-xl font-sans text-deep-navy/70">Your care card is a clean, shareable page with all the important stuff about your kid. Here's what goes on it.</p>
        </div>

        <div className="flex flex-col gap-24 md:gap-40">
          {featureData.map((feature, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={idx} 
                ref={el => blocksRef.current[idx] = el}
                className={`grid md:grid-cols-[1fr_1.1fr] gap-12 md:gap-24 items-center ${!isEven ? 'md:grid-cols-[1.1fr_1fr]' : ''}`}
              >
                {/* Image Side */}
                <div className={`feature-img w-full aspect-[4/3] rounded-[2rem] shadow-soft flex flex-col justify-center text-center relative overflow-hidden ${feature.color} ${!isEven ? 'md:order-2' : ''}`}>
                   <div className="absolute inset-0 border-[8px] border-cloud/40 rounded-[2rem] pointer-events-none z-20" />
                   
                   <img src={feature.image} alt={feature.title} className="w-full h-full object-cover relative z-10" />
                   
                   {/* Abstract background elements */}
                   <div className="absolute top-0 right-0 w-64 h-64 bg-cloud rounded-full opacity-40 -translate-y-1/2 translate-x-1/2" />
                   <div className="absolute bottom-0 left-0 w-48 h-48 bg-cloud rounded-full opacity-40 translate-y-1/3 -translate-x-1/3" />
                </div>

                {/* Text Side */}
                <div className={`feature-text flex flex-col items-start ${!isEven ? 'md:order-1' : ''}`}>
                  <h3 className="text-3xl md:text-4xl font-bold font-sans text-deep-navy mb-5 tracking-tight">{feature.title}</h3>
                  <p className="text-lg font-sans text-deep-navy/70 mb-8 leading-relaxed max-w-xl">{feature.body}</p>
                  <div className="bg-warm-white border border-soft-sand px-5 py-3 rounded-xl shadow-sm">
                    <span className="font-mono text-[11px] md:text-xs font-bold text-deep-navy/60 uppercase tracking-widest leading-loose">{feature.tags}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
