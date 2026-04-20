import { useEffect, useState } from 'react';

export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero (approx 600px)
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 w-full z-[100] md:hidden transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
        visible ? 'translate-y-0' : 'translate-y-[150%]'
      }`}
    >
      <div className="bg-warm-white/85 backdrop-blur-xl border-t border-soft-sand px-4 pt-4 pb-6 shadow-[0_-10px_40px_rgba(28,43,89,0.08)] flex justify-center gap-3">
        <a 
          href="#app-store" 
          onClick={(e) => { e.preventDefault(); e.currentTarget.focus(); }}
          className="group relative overflow-hidden flex-1 flex items-center justify-center gap-2 bg-deep-navy text-white font-bold font-sans py-3.5 rounded-2xl shadow-md active:scale-[0.98] transition-transform focus:outline-none"
        >
          <div className="flex items-center justify-center gap-2 transition-opacity duration-200 group-hover:opacity-0 group-focus:opacity-0 group-active:opacity-0">
            <svg className="w-5 h-5 pb-[1px]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.488 12.336c-.027-3.236 2.651-4.803 2.776-4.887-1.503-2.196-3.834-2.496-4.664-2.529-1.956-.197-3.818 1.155-4.814 1.155-1.002 0-2.527-1.121-4.14-1.09-2.096.027-4.032 1.218-5.111 3.09-2.188 3.79-.558 9.395 1.572 12.449 1.042 1.498 2.274 3.193 3.882 3.129 1.545-.062 2.136-.994 3.991-.994 1.84 0 2.38.994 3.978.96 1.637-.027 2.704-1.56 3.731-3.055 1.185-1.745 1.677-3.435 1.704-3.529-.039-.016-3.284-1.258-3.32-4.195zM14.619 3.053c.854-1.031 1.428-2.463 1.272-3.883-1.233.05-2.712.822-3.593 1.849-.785.908-1.474 2.378-1.288 3.771 1.378.106 2.748-.707 3.609-1.737z" />
            </svg>
            <span className="text-[13px] tracking-wide">App Store</span>
          </div>
          <div className="absolute inset-0 flex items-center justify-center font-bold text-honey text-[13px] tracking-wide opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100">
            Coming Soon!
          </div>
        </a>
        <a 
          href="#google-play" 
          onClick={(e) => { e.preventDefault(); e.currentTarget.focus(); }}
          className="group relative overflow-hidden flex-1 flex items-center justify-center gap-2 bg-deep-navy text-white font-bold font-sans py-3.5 rounded-2xl shadow-md active:scale-[0.98] transition-transform focus:outline-none"
        >
          <div className="flex items-center justify-center gap-2 transition-opacity duration-200 group-hover:opacity-0 group-focus:opacity-0 group-active:opacity-0">
            <svg className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186c-.156-.168-.249-.408-.249-.691V2.505c0-.283.093-.523.248-.691zM14.654 12.862l3.418-3.418-4.227-2.392L4.664 1.706l9.99 11.156zM18.8 9.055l3.149 1.782c.87.492.87 1.295 0 1.782L18.8 14.398l-3.323-1.894zM14.654 11.138l-4.227 4.226-5.59 3.164 9.817-10.963 0 3.573z"/>
            </svg>
            <span className="text-[13px] tracking-wide">Google Play</span>
          </div>
          <div className="absolute inset-0 flex items-center justify-center font-bold text-honey text-[13px] tracking-wide opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100">
            Coming Soon!
          </div>
        </a>
      </div>
    </div>
  );
}
