import { useEffect } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-3xl mx-auto font-sans text-deep-navy w-full mb-12">
      <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 shadow-lg border border-border-light relative overflow-hidden text-center">
        
        <div className="w-20 h-20 bg-cloud rounded-full flex items-center justify-center mx-auto mb-8 border-[6px] border-warm-white">
          <Mail className="text-deep-navy" size={32} />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-sans tracking-tight">
          Contact Us
        </h1>
        <p className="text-lg text-deep-navy/70 mb-10 max-w-lg mx-auto">
          We'd love to hear from you. The easiest and fastest way to get in touch with our team is via email. We typically respond to support requests within 24 hours.
        </p>

        <a href="mailto:support@kidfileapp.com" className="inline-flex items-center justify-center gap-3 bg-honey text-deep-navy font-bold text-lg md:text-xl py-4 px-8 md:px-10 rounded-[1.25rem] btn-spring hover:bg-yellow-400 transition-colors shadow-soft">
          support@kidfileapp.com
        </a>

        <div className="mt-16 pt-10 border-t border-border-light/50 max-w-sm mx-auto">
          <p className="text-deep-navy/60 font-medium mb-4">Looking for answers immediately?</p>
          <div className="flex flex-col gap-4">
             <Link to="/help" className="flex items-center justify-center gap-2 text-deep-navy font-bold hover:text-honey transition-colors">
               Visit our Help Center <ArrowRight size={16} />
             </Link>
             <Link to="/faq" className="flex items-center justify-center gap-2 text-deep-navy font-bold hover:text-honey transition-colors">
               Read the FAQ <ArrowRight size={16} />
             </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
