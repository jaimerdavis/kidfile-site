import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    category: "What Is Kidfile?",
    questions: [
      { q: "What is Kidfile, in one sentence?", a: "It's the one place for everything someone needs to know to take care of your kid — shareable with anyone who helps, in one tap." },
      { q: "How does it actually work?", a: "You add your kid, fill in the stuff that matters (allergies, medicine, emergency contacts, routine, sizes — whatever is relevant), and Kidfile turns it into a clean, shareable page called a care card. When your babysitter, your mom, your co-parent, or a camp counselor needs the info, you send them one link. They open it, everything's there, and it's always up to date." },
      { q: "Who is Kidfile for?", a: "Anyone responsible for a kid's care. That usually starts with a parent, but the people who benefit most are everyone around you — the babysitter who needs the allergy list, the grandparent who forgets the shoe size, the co-parent who needs the insurance info, the camp counselor who needs the emergency contacts. You set it up once. Everyone else just opens the link." },
      { q: "Is this a baby tracker?", a: "No. Baby trackers are about logging feeds, diapers, and sleep throughout the day. Kidfile is about the information someone else needs when they're taking care of your kid. You can log daily things if you want to, but the heart of the app is the care card — the shareable page that replaces the 11-text babysitter briefing." },
      { q: "What devices does it work on?", a: "iPhone and Android. A web version is on the way. There's also an Apple Wallet and Google Wallet card for emergency info you can keep on your phone's lock screen." }
    ]
  },
  {
    category: "What Goes in a Kidfile?",
    questions: [
      { q: "What kind of info can I add?", a: "As much or as little as you want. Common things parents add first: allergies, medications and doses, emergency contacts, daily routine (nap time, bedtime, meals), pediatrician info, insurance card, clothing and shoe sizes, and who's allowed to pick the kid up.\nOver time you can add vaccination records, school info, dietary preferences, care instructions, documents — whatever's useful. But you don't have to fill in everything on day one. Start with the basics and the app is already useful." },
      { q: "Do I have to fill everything in to get started?", a: "No. Add your kid's name, one allergy or \"no known allergies,\" and one emergency contact — and you already have a shareable care card. Everything else you can add whenever." },
      { q: "Does Kidfile remind me to keep things updated?", a: "Yes, gently. If something hasn't been reviewed in a while — like a medication dose that might have changed or a shoe size from 6 months ago — the app will flag it on your home screen. It's a nudge, not a nag." },
      { q: "Can I keep private notes that nobody else sees?", a: "Yes. Private parent notes are separate from the shared care card. Even people you've given access to won't see them." }
    ]
  },
  {
    category: "Sharing With Caregivers",
    questions: [
      { q: "How do I share my kid's info with someone?", a: "Two ways. You can invite someone by email — they create an account and get ongoing access. Or you can send a share link — they tap it and see the care card in their browser, no account needed. Most parents use the link for babysitters and the invite for co-parents or grandparents who help regularly." },
      { q: "Can I control what each person sees?", a: "Yes. Kidfile has built-in view modes for common situations — there's one for babysitters (the essentials), one for grandparents (a bit more), one for school or camp (what staff need), and one for emergencies (just the critical info). You can also customize what each view shows." },
      { q: "Can I take someone's access away?", a: "Yes, instantly. One tap and their access is gone." },
      { q: "Can I set a share link to expire?", a: "Yes. You can make it one-time use (it works once, then disappears), set it to expire after a certain number of days, or leave it active until you decide to turn it off. You can also add a password." },
      { q: "Can I see who has looked at my kid's info?", a: "Yes. The app logs every time someone opens a share link or views the profile inside the app — who, when, and from where. You're always in control." }
    ]
  },
  {
    category: "Multiple Parents & Co-Parenting",
    questions: [
      { q: "Can both parents access the same kid's profile?", a: "Yes. You can add another parent as a full co-owner with the same level of access you have. Both of you can update info, and changes sync in real time." },
      { q: "Is Kidfile useful for separated or divorced parents?", a: "Very. Instead of texting back and forth about doctor appointments, insurance info, or medication changes, both parents see the same always-current care card. It reduces \"you didn't tell me\" moments and keeps the focus on the kid, not the communication friction." }
    ]
  },
  {
    category: "The Wallet Pass",
    questions: [
      { q: "What's the Wallet Pass?", a: "A digital card that lives in Apple Wallet or Google Wallet on your phone's lock screen. It shows your kid's name, age, critical allergies, medications, emergency contacts, and a QR code that opens a limited emergency view of the profile. Useful for you, your partner, grandparents — anyone who might need to pull up the info fast." }
    ]
  },
  {
    category: "Pricing",
    questions: [
      { q: "How much does Kidfile cost?", a: "There's a free plan and a paid plan.\nFree — 1 kid, a basic care card, 1 share link. Free forever, no credit card needed.\nStandard ($4.99/month) — Multiple kids, full profiles, unlimited share links, document storage, custom access levels, caregiver chat, and smart features. Less than a pack of diapers." },
      { q: "Is the free plan actually useful, or is it just a teaser?", a: "It's genuinely useful. One kid, one care card, one share link — that covers the core use case for a lot of families. The paid plan is for families who need more kids, more sharing, or document storage." },
      { q: "Can I cancel anytime?", a: "Yes. Cancel from inside the app. You keep access through the end of your billing period, then it drops back to free. No hassle, no phone call, no guilt trip." },
      { q: "If I cancel, do I lose my data?", a: "No. Your data stays. You just lose access to the paid features. If you come back later, everything is still there." }
    ]
  },
  {
    category: "Privacy & Security",
    questions: [
      { q: "Is my family's data safe?", a: "Yes. Your data is encrypted the same way banks and healthcare apps encrypt theirs — both when it's moving between your phone and our servers, and when it's stored. We don't cut corners on this." },
      { q: "Do you sell my data?", a: "No. We don't sell, share, or monetize your family's information. Ever. Our business model is the subscription. You're the customer, not the product." },
      { q: "Does my kid's name or health info ever appear in a web address?", a: "No. Share links use random codes. There's no way to guess a link or stumble onto someone's care card." },
      { q: "Who on your team can see my data?", a: "Nobody, unless you contact support and ask for help. Even then, support tools limit what's visible and every action is logged." },
      { q: "Is Kidfile HIPAA compliant?", a: "We're not a healthcare provider, so HIPAA doesn't technically apply to us. But we apply the same standards — encryption, access controls, audit logs — because you're trusting us with health information and we take that seriously." },
      { q: "Does Kidfile collect information from my child?", a: "No. Kidfile does not interact with children at all. Everything is entered by a parent or authorized guardian." }
    ]
  },
  {
    category: "Smart Features",
    questions: [
      { q: "Does Kidfile use AI?", a: "Yes, in a few practical ways. You can type or speak naturally — something like \"Jamie is allergic to peanuts\" — and the app will suggest the right fields to update. You can also snap a photo of a document (like an insurance card or vaccination record) and Kidfile will pull out the key info for you to review." },
      { q: "Does the AI change things automatically?", a: "Never. Every suggestion shows up as a draft. You review it, approve it, or throw it away. Nothing touches your kid's profile without your say-so." }
    ]
  },
  {
    category: "Can I Take My Data With Me?",
    questions: [
      { q: "Can I export everything?", a: "Yes. You can export your full record — every profile, every document, every log, every note — from inside the app. You own your data, and you can take it with you if you ever leave." },
      { q: "What happens if I delete a profile?", a: "Everything connected to that profile — documents, logs, notes, share links — is permanently deleted from our servers. Nothing lingers." }
    ]
  },
  {
    category: "Getting Help",
    questions: [
      { q: "How do I contact support?", a: "Inside the app: Settings, then \"Need Help.\" Your message goes straight to our team. We prioritize urgent issues (account access, safety concerns) first." },
      { q: "Is there a faster support option?", a: "Paid plans get priority support. But everyone gets help — nobody is ignored." }
    ]
  }
];

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border-light rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-honey"
        aria-expanded={isOpen}
      >
        <h3 className="text-xl font-bold text-deep-navy pr-8">{question}</h3>
        <ChevronDown 
          className={`flex-shrink-0 text-honey transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          size={24}
        />
      </button>
      <div 
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[1000px] opacity-100 pb-6' : 'max-h-0 opacity-0 pb-0'
        }`}
      >
        <div className="text-deep-navy/80 font-sans leading-relaxed text-[17px] pt-4 border-t border-border-light/50">
          {answer.split('\n').map((para, i) => (
            <p key={i} className={i > 0 ? "mt-4" : ""}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto font-sans text-deep-navy w-full mb-12">
      <div className="text-center mb-16 relative z-10">
        <h1 className="text-4xl md:text-[3.5rem] font-bold mb-6 font-sans tracking-tight leading-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-lg md:text-xl text-deep-navy/60 font-medium max-w-2xl mx-auto">
          Straight answers, plain English, no fine print hiding anything important.
        </p>
      </div>

      <div className="space-y-16 relative z-10">
        {faqs.map((category, idx) => (
          <div key={idx} className="scroll-mt-32">
            <h2 className="text-2xl md:text-3xl font-bold font-sans text-deep-navy mb-8 pl-4 border-l-4 border-honey">
              {category.category}
            </h2>
            <div className="space-y-4">
              {category.questions.map((faq, fIdx) => (
                <FAQItem key={fIdx} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
