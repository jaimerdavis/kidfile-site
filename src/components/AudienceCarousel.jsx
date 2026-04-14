import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const audienceData = [
  {
    label: "For You",
    badgeColor: "bg-coral-pop text-white",
    title: "The one who remembers everything",
    body: "You carry your kid's entire life in your head. Allergy info, medicine doses, shoe sizes, the pediatrician's after-hours number. Kidfile takes it out of your brain and puts it somewhere everyone can see it. You're not a mess. You just needed a better place for all of it.",
    imageHint: "Card 1: Parent with floating thought bubbles.",
  },
  {
    label: "For the Sitter",
    badgeColor: "bg-honey text-deep-navy",
    title: "No more 20 questions",
    body: "What's the bedtime? Can she have peanut butter? What's the medicine dose? What if something happens? One link answers all of it. No app download needed. Just tap and everything's there.",
    imageHint: "Card 2: Babysitter confidently checking phone.",
  },
  {
    label: "For Grandma & Grandpa",
    badgeColor: "bg-lavender-mist text-white",
    title: "The cheat sheet they actually want",
    body: "They love your kid more than anything. They just can't remember if it's the pink medicine or the purple one, and they feel bad asking again. The care card link means they'll never have to.",
    imageHint: "Card 3: Grandparents in store checking sizes.",
  },
  {
    label: "For Co-Parents",
    badgeColor: "bg-soft-sage text-white",
    title: "One source of truth. Zero arguments.",
    body: "Both households always have the latest info. No more 'you didn't tell me about the allergy appointment.' No more texting back and forth about the insurance card. It's all in one place, always current.",
    imageHint: "Card 4: Split view: two connected homes.",
  },
  {
    label: "For School",
    badgeColor: "bg-deep-navy text-white",
    title: "Every form, handled",
    body: "Start of the year and they need allergies, emergency contacts, pickup authorization, and immunization records? Send the link. It has everything and it's always up to date. No more paper forms.",
    imageHint: "Card 5: Teacher at desk with care card tablet.",
  }
];

export default function AudienceCarousel() {
  const container = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Entrance animation for grid mode (desktop)
      if (window.matchMedia("(min-width: 768px)").matches) {
        gsap.from(cardsRef.current, {
          scrollTrigger: {
            trigger: container.current,
            start: 'top 80%',
          },
          x: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          clearProps: 'all'
        });
      }
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="py-24 md:py-32 bg-cloud relative z-10 overflow-hidden">
      <div className="container mx-auto px-0 md:px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 px-6 md:px-0">
          <span className="font-mono text-soft-sage uppercase tracking-widest text-sm font-bold mb-4 block">Who It's For</span>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-deep-navy mb-6 tracking-tight">You. And everyone who helps.</h2>
          <p className="text-lg md:text-xl font-sans text-deep-navy/70">Kidfile isn't just for parents. It's for the whole village.</p>
        </div>

        {/* Carousel on Mobile, Grid on Desktop */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-0 overflow-x-auto snap-x snap-mandatory pb-12 md:pb-0 hide-scrollbar -mx-6 md:mx-0">
          {/* Add a tiny padding block at start for mobile scroll start spacing offset */}
          <div className="shrink-0 w-2 md:hidden" />
          
          {audienceData.map((card, idx) => (
            <div 
              key={idx} 
              ref={el => cardsRef.current[idx] = el}
              className={`min-w-[85vw] md:min-w-0 snap-center bg-warm-white rounded-card p-6 md:p-8 border border-soft-sand shadow-sm card-lift flex flex-col items-start ${idx === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
            >
              <div className="w-full aspect-[4/3] bg-cloud rounded-[1.5rem] mb-8 overflow-hidden relative border border-soft-sand/50 group">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-20">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-deep-navy/30 mb-2 font-bold">Image</span>
                  <p className="text-xs font-sans italic text-deep-navy/50 font-medium group-hover:scale-105 transition-transform duration-700">{card.imageHint}</p>
                </div>
                {/* Abstract visual background */}
                <div className="absolute inset-0 bg-gradient-to-br from-warm-white to-soft-sand/20 opacity-50 z-10" />
                <div className="absolute -bottom-10 -right-10 w-28 h-28 rounded-full border-[6px] border-[#D9E3DF]/50 z-10" />
              </div>
              
              <div className={`${card.badgeColor} px-4 py-1.5 rounded-full font-mono text-[11px] font-bold uppercase tracking-widest mb-6 inline-block shadow-sm`}>
                {card.label}
              </div>
              <h3 className="text-[1.35rem] md:text-2xl font-bold font-sans text-deep-navy mb-4 leading-[1.3] truncate whitespace-normal w-full">{card.title}</h3>
              <p className="text-[1.05rem] font-sans text-deep-navy/75 leading-relaxed mb-2">{card.body}</p>
            </div>
          ))}
          
          {/* Add a tiny padding block at end for mobile scroll end spacing offset */}
          <div className="shrink-0 w-2 md:hidden" />
        </div>
      </div>
    </section>
  );
}
