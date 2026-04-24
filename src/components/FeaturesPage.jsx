import { useEffect } from 'react';
import { Check, X, Minus } from 'lucide-react';

const comparisonData = [
  { feature: "Dedicated profile for each child", kidfile: true, other: false },
  { feature: "Emergency-only view for fast access", kidfile: true, other: false },
  { feature: "Freeform notes and text entry", kidfile: true, other: true },
  { feature: "Role-based sharing (Sitter, Grandparent, School)", kidfile: true, other: false },
  { feature: "Auto-expiring secure share links", kidfile: true, other: false },
  { feature: "Revoke access at any time", kidfile: true, other: false },
  { feature: "Scan and store medical & school documents", kidfile: true, other: false },
  { feature: "Structured vaccination and medication logs", kidfile: true, other: false },
  { feature: "Search across all records", kidfile: true, other: true },
  { feature: "Shared caregiver activity feed & to-dos", kidfile: true, other: false },
  { feature: "AI drafting help for routines", kidfile: true, other: false },
  { feature: "Printable Care Card & Apple Wallet pass", kidfile: true, other: false },
];

const categoryExplanations = [
  {
    category: "Child Profile",
    description: "Keep the important details about each child in one place, so you are not repeating the same information over and over."
  },
  {
    category: "Emergency Ready",
    description: "Make critical information easy to find fast when someone else is caring for your child."
  },
  {
    category: "Easy Sharing",
    description: "Give the right people the right information for the moment, whether it is a sitter, grandparent, school, or temporary caregiver."
  },
  {
    category: "Privacy & Control",
    description: "Stay in charge of who can see what, approve access deliberately, and change permissions anytime."
  },
  {
    category: "Daily Care",
    description: "Capture the routines and preferences that help care feel more consistent and less stressful."
  },
  {
    category: "Health & Records",
    description: "Keep medical and care-related information organized, current, and easier to reference when needed."
  },
  {
    category: "Family Coordination",
    description: "Reduce scattered texts and disconnected notes by keeping caregivers, schedules, and tasks aligned."
  },
  {
    category: "Smarter Setup",
    description: "Set up the essentials first, then build over time with tools that make updates faster and easier."
  },
  {
    category: "Your Data, Your Terms",
    description: "Your family’s information stays under your control, with clear privacy options and the ability to export or delete when you need to."
  }
];

export default function FeaturesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto font-sans text-deep-navy">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-sans tracking-tight">Features</h1>
        <div className="max-w-2xl mx-auto space-y-4 text-lg md:text-xl text-deep-navy/70 leading-relaxed">
          <p>Everything someone caring for your child should have — organized, current, and easy to share.</p>
          <p>KidFile helps families keep important details ready for babysitters, grandparents, schools, camps, and other caregivers. From emergency information to routines and everyday logistics, everything lives in one secure place.</p>
        </div>
      </div>

      {/* Comparison Matrix */}
      <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-lg border border-border-light mb-24 overflow-hidden relative">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold font-sans tracking-tight mb-3">The Better Way to Share Care</h2>
          <p className="text-deep-navy/60 text-lg">Stop relying on scattered text messages and messy note apps.</p>
        </div>

        <div className="overflow-x-auto hide-scrollbar">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr>
                <th className="py-6 px-6 font-bold text-xl text-deep-navy w-1/2 border-b-2 border-deep-navy/10 align-bottom">Capability</th>
                <th className="py-6 px-4 text-center border-b-2 border-honey/30 bg-honey/5 rounded-t-3xl align-bottom w-1/4">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <img src="/logo.png" alt="Kidfile" className="h-8 md:h-10 object-contain" />
                    <span className="font-bold text-deep-navy text-lg">Kidfile</span>
                  </div>
                </th>
                <th className="py-6 px-4 font-bold text-xl text-deep-navy/50 border-b-2 border-deep-navy/10 text-center align-bottom w-1/4">
                  Texts & Notes
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-deep-navy/10">
              {comparisonData.map((item, idx) => (
                <tr key={idx} className="group">
                  <td className="py-5 px-6 font-medium text-lg text-deep-navy/80 group-hover:text-deep-navy transition-colors">{item.feature}</td>
                  
                  {/* Kidfile Column */}
                  <td className="py-5 px-4 text-center bg-honey/5 transition-colors">
                    {item.kidfile ? (
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-soft-sage/10 text-soft-sage">
                        <Check size={20} strokeWidth={3} />
                      </div>
                    ) : (
                      <Minus className="inline-block text-deep-navy/20" size={24} />
                    )}
                  </td>

                  {/* Notes Column */}
                  <td className="py-5 px-4 text-center transition-colors">
                    {item.other ? (
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-deep-navy/5 text-deep-navy/60">
                        <Check size={20} strokeWidth={2} />
                      </div>
                    ) : (
                      <X className="inline-block text-deep-navy/20" size={24} strokeWidth={2.5} />
                    )}
                  </td>
                </tr>
              ))}
              {/* Bottom rounded corners for the Kidfile column highlight */}
              <tr>
                <td className="pt-2"></td>
                <td className="bg-honey/5 rounded-b-3xl pt-2"></td>
                <td className="pt-2"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Feature Explanations */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-sans tracking-tight mb-3">Built for Every Scenario</h2>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryExplanations.map((item, idx) => (
          <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-border-light/50 hover:shadow-soft transition-all duration-300">
            <h3 className="text-xl font-bold mb-3 text-deep-navy">{item.category}</h3>
            <p className="text-deep-navy/70 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
