import { useEffect } from 'react';
import { 
  ShieldCheck, Lock, Link as LinkIcon, Eye, ShieldPlus, 
  Baby, EyeOff, Package, Ban, Sparkles, Heart, ArrowRight, XCircle
} from 'lucide-react';

function Section({ icon: Icon, title, children }) {
  return (
    <section className="flex flex-col md:flex-row gap-5 md:gap-8 items-start relative">
      <div className="bg-white p-3.5 md:p-4 rounded-[1.25rem] shadow-sm flex-shrink-0 text-honey mt-1 border border-border-light">
        <Icon size={28} className="md:w-8 md:h-8" />
      </div>
      <div>
        <h2 className="text-2xl md:text-[1.75rem] font-bold mb-4 tracking-tight leading-snug">{title}</h2>
        <div className="text-[1.05rem] md:text-[1.125rem] leading-[1.65] text-deep-navy/80 space-y-4">
          {children}
        </div>
      </div>
    </section>
  );
}

export default function TrustAndSafety() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-warm-white pt-32 pb-24 px-6 md:px-12 w-full font-sans text-deep-navy relative overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-honey/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-soft-sage/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <header className="mb-20 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-deep-navy/5 text-deep-navy/70 font-semibold text-sm mb-8 tracking-wide uppercase">
            <Lock size={16} /> Trust & Safety
          </div>
          <h1 className="text-5xl md:text-[4rem] font-bold mb-6 font-sans tracking-tight leading-[1.05]">Your Family's Privacy</h1>
          <p className="text-2xl md:text-[2rem] text-honey font-accent italic mb-8 leading-tight">
            Your kid's info is nobody's business but yours.
          </p>
          <div className="text-lg md:text-xl text-deep-navy/70 leading-relaxed font-medium space-y-4 max-w-2xl bg-white/50 p-6 md:p-8 rounded-[2rem] border border-border-light shadow-sm">
            <p>
              We built KidFile to help you share the right information with the right people at the right time. That only works if you trust us completely with what you put in here.
            </p>
            <p>
              So here's exactly how we handle it — in plain English, not legal speak.
            </p>
          </div>
        </header>

        <div className="space-y-16 md:space-y-20">
          
          <Section icon={ShieldCheck} title="We don't sell your data. Period.">
            <p>
              <strong className="text-deep-navy font-bold">Not to advertisers. Not to data brokers. Not to "partners." Not to anyone.</strong>
            </p>
            <p>
              There is no version of this where your child's allergy list ends up in a marketing database. Our business model is simple: you pay for the app, and the app works for you. You are the customer. Your data is not the product.
            </p>
          </Section>

          <Section icon={Lock} title="Everything is encrypted">
            <p>
              <strong className="text-deep-navy font-bold">Your family's information is protected by the same level of encryption used by banks, healthcare systems, and government agencies.</strong>
            </p>
            <p>
              When your data is moving — between your phone and our servers — it's encrypted so nobody can intercept it. Not on public wifi, not anywhere.
            </p>
            <p>
              When your data is stored — on our servers — it's encrypted again. Even if someone broke into our database (which has never happened), what they'd find is unreadable without the keys.
            </p>
            <p>
              This isn't optional or premium. Every account — free and paid — gets the same level of protection.
            </p>
          </Section>

          <Section icon={LinkIcon} title="Your kid's info never leaks through a link">
            <p>
              <strong className="text-deep-navy font-bold">When you share a care card, the link uses a random code</strong> — not your child's name, not their birthday, not anything identifiable. Nobody can guess a KidFile link. Nobody can stumble onto one by accident.
            </p>
            <p>
              And when a share link expires or you turn it off, it's gone. Anyone who tries to open it sees a dead end.
            </p>
          </Section>

          <Section icon={Eye} title="You control who sees what">
            <p>
              <strong className="text-deep-navy font-bold">KidFile doesn't decide who gets access to your child's information. You do. Every time.</strong>
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 bg-honey rounded-full mt-2.5 flex-shrink-0" />
                <span><strong>You choose who to share with.</strong> A babysitter gets a link. Your mom gets an invite. Your co-parent gets full access. You decide.</span>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 bg-honey rounded-full mt-2.5 flex-shrink-0" />
                <span><strong>You choose what they see.</strong> The babysitter might see allergies, meds, and bedtime. The school might see emergency contacts and insurance. You pick what's visible for each situation.</span>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 bg-honey rounded-full mt-2.5 flex-shrink-0" />
                <span><strong>You choose how long they have access.</strong> Share links can be one-time, expiring, or ongoing — and you can revoke any of them instantly with one tap.</span>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 bg-honey rounded-full mt-2.5 flex-shrink-0" />
                <span><strong>You see everything that happens.</strong> Every time someone opens your child's care card, it's logged — who, when, and from where. No silent viewing. No hidden access.</span>
              </li>
            </ul>
          </Section>

          <Section icon={ShieldPlus} title="We follow healthcare-grade security standards">
            <p>
              <strong className="text-deep-navy font-bold">KidFile isn't a hospital or a doctor's office, so technically we're not required to follow healthcare privacy laws.</strong>
            </p>
            <p>
              But you're trusting us with your child's health information — allergies, medications, conditions, doctor's names — and we think that deserves the same level of care. So we hold ourselves to those standards anyway:
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 bg-honey rounded-full mt-2.5 flex-shrink-0" />
                <span><strong>Encryption at rest and in transit</strong> — your data is protected whether it's moving or stored.</span>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 bg-honey rounded-full mt-2.5 flex-shrink-0" />
                <span><strong>Access controls</strong> — your information is only accessible to the people you've explicitly authorized.</span>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 bg-honey rounded-full mt-2.5 flex-shrink-0" />
                <span><strong>Audit logging</strong> — every access event, every edit, every share is recorded so there's always a clear trail.</span>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 bg-honey rounded-full mt-2.5 flex-shrink-0" />
                <span><strong>Role-based permissions</strong> — caregivers only see what you've allowed them to see. Nothing more.</span>
              </li>
            </ul>
          </Section>

          <Section icon={Baby} title="We don't collect information from children">
            <p>
              <strong className="text-deep-navy font-bold">KidFile is a tool for parents and guardians. Your child never interacts with the app.</strong>
            </p>
            <p>
              We don't ask kids for anything — no names, no emails, no data of any kind. Everything in a KidFile profile is entered by an authorized adult.
            </p>
            <p>
              We follow COPPA guidelines (the federal law that protects children's privacy online), not because we're required to, but because it's the right thing to do.
            </p>
          </Section>

          <Section icon={EyeOff} title="Nobody on our team sees your data">
            <p>
              <strong className="text-deep-navy font-bold">Your family's information is not visible to KidFile employees during normal operations. Period.</strong>
            </p>
            <p>
              If you contact support and ask for help with your account, a support team member may access limited information to assist you — but even then, sensitive fields are hidden by default, elevated permissions are required, and every action is logged.
            </p>
            <p>
              Nobody is browsing your child's profile. Nobody is reading your notes. Nobody has casual access to anything.
            </p>
          </Section>

          <Section icon={Package} title="Your data belongs to you">
            <p>
              <strong className="text-deep-navy font-bold">You can export everything you've ever put into KidFile</strong> — every profile, every document, every log, every note — at any time from inside the app.
            </p>
            <p>
              If you decide KidFile isn't for you, you take your data and go. No hostage situations. No "contact us to request your data." It's yours. It was always yours.
            </p>
            <p>
              If you delete a profile, it's gone from our servers. Not archived, not hidden, not "anonymized and retained." Deleted. If you delete your account, everything goes with it.
            </p>
          </Section>

          {/* Special Visual Section for what we'll never do */}
          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-border-light relative overflow-hidden">
             {/* Decorative subtle stripe */}
             <div className="absolute top-0 left-0 w-2 h-full bg-[#E54C38]" />
             
             <div className="flex items-center gap-4 mb-8">
               <div className="text-[#E54C38]">
                 <Ban size={36} className="md:w-10 md:h-10" />
               </div>
               <h2 className="text-2xl md:text-[1.85rem] font-bold tracking-tight">What we'll never do</h2>
             </div>
             
             <p className="text-lg md:text-xl font-medium mb-8 text-deep-navy/80">Just so it's perfectly clear:</p>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "sell or share your family's data with third parties.",
                  "show ads based on your child's information.",
                  "make your data accessible to anyone you haven't authorized.",
                  "use your child's health information for marketing purposes.",
                  "require you to stay in order to keep your data. You can export and leave at any time.",
                  "make security a paid feature. Free accounts get the same encryption."
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <XCircle className="text-[#E54C38] flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-[1.05rem] text-deep-navy/80 font-medium">We will never {item}</span>
                  </div>
                ))}
             </div>
          </section>

          <Section icon={Sparkles} title="What our smart features do (and don't do)">
            <p>
              <strong className="text-deep-navy font-bold">KidFile includes optional AI features that help you fill out profiles faster</strong> — like turning a photo of an insurance card into organized data, or converting "he takes 5ml of Zyrtec at night" into the right fields.
            </p>
            <p className="font-bold text-deep-navy pt-2">Here's what matters:</p>
            <ul className="space-y-3 mt-4">
              <li className="flex gap-3 bg-white p-4 rounded-2xl border border-border-light shadow-sm">
                <div className="w-2 h-2 bg-honey rounded-full mt-2.5 flex-shrink-0" />
                <span><strong>AI never changes your profile automatically.</strong> Every suggestion shows up as a draft that you review and approve before anything is saved. If you don't approve it, it disappears.</span>
              </li>
              <li className="flex gap-3 bg-white p-4 rounded-2xl border border-border-light shadow-sm">
                <div className="w-2 h-2 bg-honey rounded-full mt-2.5 flex-shrink-0" />
                <span><strong>Your data is processed securely.</strong> When the AI reads something you've typed or photographed, it's processed on our secure servers. Your child's information isn't stored by the AI, used to train models, or shared with anyone.</span>
              </li>
              <li className="flex gap-3 bg-white p-4 rounded-2xl border border-border-light shadow-sm">
                <div className="w-2 h-2 bg-honey rounded-full mt-2.5 flex-shrink-0" />
                <span><strong>The AI knows its limits.</strong> If you type something that sounds like a real emergency — a serious allergic reaction, a safety concern, a medical crisis — the app won't try to handle it. It'll tell you directly: this needs a doctor, a hotline, or 911, not an app.</span>
              </li>
            </ul>
          </Section>

          <section className="text-center pt-8 md:pt-12 border-t border-border-light">
             <div className="bg-deep-navy w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
               <Heart className="text-honey" size={32} />
             </div>
             <h2 className="text-[2rem] md:text-[2.5rem] font-bold mb-6 tracking-tight leading-tight">Built for the moment that matters most</h2>
             <p className="text-[1.125rem] leading-[1.65] text-deep-navy/80 max-w-2xl mx-auto mb-8">
               <strong className="text-deep-navy font-bold">Everything on this page exists because of one simple truth:</strong> when you hand your kid off to someone else, you need to trust that the right information is in the right hands.<br/><br/>
               That trust starts here — with how we handle what you've given us.
             </p>
             <p className="text-deep-navy/60 font-medium pb-8">
               If you have questions about any of this, reach out anytime. <strong>Settings → Need Help</strong> inside the app, or email us at <a href="mailto:privacy@kidfile.com" className="text-honey hover:underline">privacy@kidfile.com</a>.
             </p>
          </section>

        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-deep-navy text-white p-10 md:p-14 rounded-[3rem] shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_0%,transparent_100%)]" />
          <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10 tracking-tight">Ready to start?</h2>
          <a href="/#get-started" className="relative z-10 inline-flex items-center justify-center gap-3 bg-honey text-deep-navy px-8 py-4 rounded-full font-bold shadow-lg text-lg mb-6 hover:scale-105 transition-transform active:scale-95">
            Start Your KidFile — Free <ArrowRight size={20} />
          </a>
          <p className="text-white/60 font-medium text-sm md:text-base relative z-10">
            Same encryption. Same protection. Whether you're on free or paid.
          </p>
        </div>

      </div>
    </main>
  );
}
