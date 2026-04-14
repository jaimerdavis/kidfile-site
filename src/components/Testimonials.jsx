import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "I set it up in 3 minutes during nap time and immediately sent the link to my mom, my husband, and our sitter. That evening, nobody texted me a single question. I almost cried.",
    name: "Jessica M.",
    role: "mom of 2 (Ages 3 and 6)",
    color: "bg-[#F9ECE0]", // Honey tint
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    quote: "We're divorced and co-parenting. Kidfile ended 90% of our 'you didn't tell me' texts. We both just check the card.",
    name: "Andre T.",
    role: "dad of 1 (Age 5)",
    color: "bg-cloud",
    avatar: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    quote: "I watch my grandkids every Wednesday. I used to text my daughter 5 questions before she even got to work. Now I just open the link.",
    name: "Pat K.",
    role: "grandma",
    color: "bg-[#EAF3EA]", // Sage tint
    avatar: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    quote: "As a nanny, I get a new family every 6 months. When a parent sends me their Kidfile link, I know everything before day one. It's a game changer.",
    name: "Taylor R.",
    role: "professional nanny",
    color: "bg-[#EAEFF6]", // Lavender tint
    avatar: "https://images.unsplash.com/photo-1492681222956-6a5676ee52d1?auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    quote: "The ER visit was scary enough. But when they asked about allergies and medications, I just pulled up the care card. Every answer was right there.",
    name: "Keisha D.",
    role: "mom of 3",
    color: "bg-warm-white",
    // Fixed broken 404 ID from previous selection with a robust public profile
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    quote: "I'm the organized one. My husband is not. Kidfile means he finally has access to everything without asking me. Marriage saver, honestly.",
    name: "Lauren W.",
    role: "mom of 2",
    color: "bg-[#FBE4E9]", // Coral tint
    avatar: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=150&h=150&q=80",
  }
];

export default function Testimonials() {
  const container = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: container.current,
          start: 'top 85%',
        },
        y: 40,
        rotation: () => (Math.random() - 0.5) * 4, 
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power3.out',
        clearProps: 'all' 
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section id="proof" ref={container} className="py-24 md:py-32 bg-cloud relative z-10 border-t border-soft-sand/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="font-mono text-soft-sage uppercase tracking-widest text-sm font-bold mb-4 block">Real Parents</span>
          <h2 className="text-4xl md:text-[3.4rem] font-sans font-bold text-deep-navy mb-6 tracking-tight leading-[1.1]">You're going to love not being the only one who knows everything.</h2>
        </div>

        {/* Masonry-style Grid using CSS columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              ref={el => cardsRef.current[idx] = el}
              className={`break-inside-avoid w-full ${t.color} rounded-[1.8rem] p-8 md:p-10 border border-deep-navy/5 shadow-sm card-lift flex flex-col`}
            >
              <div className="text-honey text-4xl mb-2 font-serif opacity-80 leading-none">"</div>
              <p className="text-[1.1rem] font-sans text-deep-navy/90 font-medium leading-relaxed mb-8">
                {t.quote}
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-deep-navy/5 flex items-center justify-center shrink-0 border border-deep-navy/10 overflow-hidden shadow-sm">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold font-sans text-deep-navy text-[15px]">{t.name}</span>
                  <span className="text-[13px] font-sans text-deep-navy/60 font-medium">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
