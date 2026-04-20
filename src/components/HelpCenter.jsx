import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LifeBuoy, FileText, ArrowRight, MessageSquare } from 'lucide-react';

export default function HelpCenter() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto font-sans text-deep-navy w-full mb-12">
      <div className="text-center mb-16 relative z-10">
        <h1 className="text-4xl md:text-[3.5rem] font-bold mb-6 font-sans tracking-tight leading-tight">
          How can we help?
        </h1>
        <p className="text-lg md:text-xl text-deep-navy/60 font-medium max-w-2xl mx-auto">
          Whether you have a question about setting up your first kid's profile or need technical support, we're here for you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <Link to="/faq" className="group bg-white p-8 rounded-3xl border border-border-light shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-full bg-honey/10 flex items-center justify-center mb-6 text-honey group-hover:scale-110 transition-transform">
            <FileText size={24} />
          </div>
          <h2 className="text-2xl font-bold mb-3">Frequently Asked Questions</h2>
          <p className="text-deep-navy/70 mb-6">Quick answers to common questions about sharing, privacy, and getting started.</p>
          <div className="flex items-center text-honey font-bold">
            Read the FAQ <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
        <Link to="/contact" className="group bg-white p-8 rounded-3xl border border-border-light shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-full bg-soft-sage/20 flex items-center justify-center mb-6 text-soft-sage group-hover:scale-110 transition-transform">
            <MessageSquare size={24} />
          </div>
          <h2 className="text-2xl font-bold mb-3">Get in Touch</h2>
          <p className="text-deep-navy/70 mb-6">Can't find what you're looking for? Send us a message directly and we'll reply right away.</p>
          <div className="flex items-center text-soft-sage font-bold">
            Contact Support <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      </div>

      <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 shadow-lg border border-border-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cloud rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <h2 className="text-3xl font-bold mb-2 flex items-center gap-3 relative z-10">
          <LifeBuoy className="text-honey" size={28} />
          Submit a request
        </h2>
        <p className="text-deep-navy/70 mb-8 relative z-10">Fill out this form and a member of our support team will get back to you shortly.</p>

        <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-bold text-deep-navy/80 tracking-wide uppercase">Your Name</label>
              <input type="text" id="name" className="w-full bg-warm-white/50 border border-border-light rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-honey focus:border-transparent transition-all" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-bold text-deep-navy/80 tracking-wide uppercase">Email Address</label>
              <input type="email" id="email" className="w-full bg-warm-white/50 border border-border-light rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-honey focus:border-transparent transition-all" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="topic" className="text-sm font-bold text-deep-navy/80 tracking-wide uppercase">What can we help you with?</label>
            <select id="topic" className="w-full bg-warm-white/50 border border-border-light rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-honey focus:border-transparent transition-all appearance-none cursor-pointer">
              <option>Getting Started</option>
              <option>Account & Billing</option>
              <option>Technical Issue</option>
              <option>Feedback or Feature Request</option>
              <option>Privacy or Security</option>
              <option>Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-bold text-deep-navy/80 tracking-wide uppercase">Your Message</label>
            <textarea id="message" rows="5" className="w-full bg-warm-white/50 border border-border-light rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-honey focus:border-transparent transition-all resize-none"></textarea>
          </div>

          <button type="submit" className="bg-deep-navy text-white font-bold py-4 px-8 rounded-2xl w-full sm:w-auto hover:bg-[#152042] transition-colors btn-spring shadow-soft">
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
