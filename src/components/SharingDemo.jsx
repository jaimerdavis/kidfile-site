import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Share, MessageSquare, Mail, Link, QrCode, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function SharingDemo() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Only engage complex pinning/scroll animation on larger screens to preserve native scrolling on mobile phones if requested, though spec says "scroll-driven". Let's apply globally but carefully.
    let ctx = gsap.context(() => {
      
      const isMobile = window.innerWidth < 768;
      const scrubSpeed = isMobile ? 0.3 : 0.8;
      const pinDuration = isMobile ? '+=150%' : '+=250%';

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: pinDuration,
          pin: true,
          scrub: scrubSpeed,
        }
      });

      // Frame 1: Tap Share, Sheet Slides Up
      tl.to('.tap-indicator', { opacity: 0.8, scale: 0.8, duration: 0.2 })
        .to('.tap-indicator', { opacity: 0, scale: 1.2, duration: 0.2 })
        .to('.share-sheet', { y: '0%', duration: 1, ease: 'power3.out' });
        
      // Frame 2: Tap Text, Message Compose Appears
      tl.to('.share-btn-text', { scale: 0.95, opacity: 0.7, duration: 0.2 }, "+=0.3")
        .to('.share-btn-text', { scale: 1, opacity: 1, duration: 0.2 })
        .to('.share-sheet', { y: '100%', duration: 0.5 })
        .to('.message-compose', { y: '0%', duration: 1, ease: 'power3.out' });

      // Frame 3: Send Message
      tl.to('.send-btn', { scale: 0.85, opacity: 0.8, duration: 0.2 }, "+=0.4")
        .to('.send-btn', { scale: 1, opacity: 1, duration: 0.2 })
        .to('.message-bubble', { y: -20, opacity: 0, duration: 0.6 })
        .to('.message-compose', { opacity: 0, duration: 0.6 })
        .to('.success-screen', { opacity: 1, duration: 0.8 });

      // Frame 4: Mini-cards below demo animate in (fade up slowly before unpinning)
      tl.from('.mini-card', { y: 20, opacity: 0, duration: 1, stagger: 0.2 }, "-=0.2");

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="sharing" ref={sectionRef} className="min-h-screen w-full bg-deep-navy relative z-30 overflow-hidden flex items-center py-20 lg:py-0">
      
      {/* Background Shapes */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
         <div className="absolute top-[10%] left-[10%] w-64 h-64 md:w-96 md:h-96 bg-honey rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px]" />
         <div className="absolute bottom-[10%] right-[10%] w-[20rem] h-[20rem] md:w-[35rem] md:h-[35rem] bg-lavender-mist rounded-full mix-blend-screen filter blur-[100px] md:blur-[140px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center justify-items-center lg:justify-items-center h-full w-full max-w-6xl">
        
        {/* Left Col: The Animated Phone */}
        <div className="relative w-[240px] md:w-[280px] lg:w-[320px] aspect-[9/19.5] flex-shrink-0 mx-auto lg:mr-0 order-2 lg:order-1 pt-8 lg:pt-0">
          {/* Phone Hardware Shell */}
          <div className="absolute inset-0 bg-warm-white rounded-[2.5rem] md:rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.4)] p-[10px] md:p-3 border-[4px] md:border-[6px] border-[#313E67]">
            {/* Screen */}
            <div className="relative w-full h-full bg-cloud rounded-[2rem] md:rounded-[2.4rem] overflow-hidden border border-soft-sand/30 flex flex-col">
              
              {/* Dynamic Island / Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] md:w-[120px] h-[22px] md:h-[28px] bg-[#313E67] rounded-b-[18px] md:rounded-b-[20px] z-[70]" />

              {/* Status Bar */}
              <div className="w-full h-10 md:h-12 flex justify-between items-center px-5 md:px-6 text-[9px] md:text-[10px] font-sans font-bold text-deep-navy z-[60] pt-2 md:pt-3">
                <span>9:41</span>
                <div className="flex gap-1 items-center">
                  <div className="tracking-tighter font-mono">5G</div>
                  <div className="w-4 h-[10px] border border-deep-navy rounded-[2px] p-[1px] ml-1">
                     <div className="w-full h-full bg-deep-navy rounded-[1px]" />
                  </div>
                </div>
              </div>

              {/* Base Screen: Care Card */}
              <div className="flex-1 overflow-hidden bg-warm-white px-4 pb-4 pt-1 flex flex-col items-center justify-center">
                <div className="bg-cloud w-full h-[95%] rounded-[1.2rem] shadow-sm border border-soft-sand/80 p-5 flex flex-col relative overflow-hidden">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-honey/20 mb-4" />
                  <h4 className="font-bold text-lg md:text-xl text-deep-navy mb-1.5 font-sans trackin-tight">Emma, Age 4</h4>
                  <div className="w-16 md:w-20 h-5 bg-coral-pop/15 rounded-md mb-6 flex items-center justify-center">
                    <div className="w-10 h-1.5 bg-coral-pop/40 rounded-full" />
                  </div>
                  
                  <div className="space-y-4 w-full">
                    <div className="w-full h-[2px] bg-soft-sand/50 my-2" />
                    <div className="flex flex-col gap-2.5">
                       <div className="w-[85%] h-3 rounded-full bg-soft-sage/20" />
                       <div className="w-[60%] h-3 rounded-full bg-soft-sage/20" />
                    </div>
                    <div className="flex flex-col gap-2.5 pt-2">
                       <div className="w-[75%] h-3 rounded-full bg-lavender-mist/20" />
                       <div className="w-[90%] h-3 rounded-full bg-lavender-mist/20" />
                    </div>
                  </div>

                  {/* Share Button to be 'tapped' */}
                  <div className="absolute bottom-5 right-5 w-12 h-12 md:w-14 md:h-14 bg-deep-navy rounded-full flex items-center justify-center shadow-lg z-10">
                    <Share size={20} className="text-white ml-[-2px]" />
                    <div className="tap-indicator absolute w-10 h-10 md:w-12 md:h-12 border-[3px] md:border-4 border-honey rounded-full opacity-0 scale-50" />
                  </div>
                </div>
              </div>

              {/* Slide-up Share Sheet */}
              <div className="share-sheet absolute inset-0 bg-black/50 z-[80] flex flex-col justify-end translate-y-full">
                 <div className="bg-white rounded-t-[1.5rem] w-full p-6 pb-8 md:pb-10 shadow-[0_-10px_20px_rgba(0,0,0,0.1)]">
                   <div className="w-10 h-1 md:h-1.5 bg-gray-200 rounded-full mx-auto mb-5 md:mb-6" />
                   <h5 className="font-bold text-center text-[13px] md:text-sm text-deep-navy mb-6 font-sans">Share Emma's Card</h5>
                   <div className="grid grid-cols-4 gap-3 px-1 md:px-2">
                     <div className="share-btn-text flex flex-col items-center gap-2 cursor-pointer">
                       <div className="w-[44px] h-[44px] md:w-14 md:h-14 rounded-full bg-[#34C759] text-white flex items-center justify-center shadow-sm">
                         <MessageSquare size={20} />
                       </div>
                       <span className="text-[10px] md:text-[11px] font-sans text-deep-navy font-bold">Messages</span>
                     </div>
                     <div className="flex flex-col items-center gap-2 opacity-50">
                       <div className="w-[44px] h-[44px] md:w-14 md:h-14 rounded-full bg-[#007AFF] text-white flex items-center justify-center">
                         <Mail size={20} />
                       </div>
                       <span className="text-[10px] md:text-[11px] font-sans text-deep-navy font-bold">Mail</span>
                     </div>
                     <div className="flex flex-col items-center gap-2 opacity-50">
                       <div className="w-[44px] h-[44px] md:w-14 md:h-14 rounded-full bg-gray-200 text-deep-navy flex items-center justify-center">
                         <Link size={20} />
                       </div>
                       <span className="text-[10px] md:text-[11px] font-sans text-deep-navy font-bold">Copy</span>
                     </div>
                     <div className="flex flex-col items-center gap-2 opacity-50">
                       <div className="w-[44px] h-[44px] md:w-14 md:h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                         <QrCode size={20} />
                       </div>
                       <span className="text-[10px] md:text-[11px] font-sans text-deep-navy font-bold">QR</span>
                     </div>
                   </div>
                 </div>
              </div>

              {/* Message Compose Slide Up */}
              <div className="message-compose absolute inset-0 bg-[#F2F2F7] z-[90] flex flex-col translate-y-full">
                 <div className="bg-[#F9F9F9]/80 backdrop-blur-xl pt-10 md:pt-12 pb-3 px-4 border-b border-gray-300 flex items-center">
                   <span className="text-[#007AFF] font-sans text-sm md:text-base font-medium flex-1">Cancel</span>
                   <span className="mx-auto font-bold font-sans text-sm md:text-base text-deep-navy whitespace-nowrap">New Message</span>
                   <div className="flex-1" />
                 </div>
                 <div className="bg-white px-4 py-2.5 md:py-3 border-b border-gray-200 flex items-center text-xs md:text-sm font-sans">
                   <span className="text-gray-400 mr-2">To:</span>
                   <span className="font-bold text-deep-navy rounded bg-blue-50 px-2.5 py-1">Grandma Pat</span>
                 </div>
                 <div className="flex-1 p-4 flex flex-col justify-end bg-white">
                   {/* iMessage styled bubble */}
                   <div className="message-bubble bg-[#007AFF] text-white p-3 md:p-3.5 rounded-[1.25rem] rounded-br-[0.2rem] self-end max-w-[85%] shadow-sm flex flex-col gap-2.5">
                     <p className="text-[13px] md:text-[14px] font-sans leading-snug px-1">Here's Emma's care card with all her allergy info and routine! 💕</p>
                     
                     {/* URL preview card inside the bubble */}
                     <div className="bg-black/10 p-2 md:p-2.5 rounded-lg flex items-center gap-3 w-full border border-black/5">
                       <div className="w-[40px] h-[40px] md:w-[46px] md:h-[46px] bg-white rounded flex items-center justify-center shrink-0">
                          <div className="w-5 h-5 bg-honey/40 rounded-full" />
                       </div>
                       <div className="flex flex-col gap-1.5 flex-1 min-w-0 pr-1">
                         <div className="w-full h-2.5 md:h-3 bg-white/70 rounded-full" />
                         <div className="w-[60%] h-2 bg-white/40 rounded-full" />
                       </div>
                     </div>
                   </div>
                 </div>
                 {/* Keyboard area / App bar */}
                 <div className="bg-[#F2F2F7] border-t border-gray-300 p-2.5 md:p-3 flex items-center gap-2 mb-1 z-10 shadow-[0_-2px_10px_rgba(0,0,0,0.02)]">
                   <div className="bg-white rounded-full h-8 md:h-9 flex-1 px-4 flex items-center text-gray-400 text-[11px] md:text-xs border border-[#E5E5EA]">
                     iMessage
                   </div>
                   {/* Send Button */}
                   <div className="send-btn w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#007AFF] flex items-center justify-center shadow-sm shrink-0">
                     <div className="w-[10px] h-[10px] border-t-[2px] border-r-[2px] border-white rotate-[-45deg] scale-x-125 ml-[-2px]" />
                   </div>
                 </div>
              </div>

              {/* Ultimate Success Screen */}
              <div className="success-screen absolute inset-0 bg-soft-sage z-[100] opacity-0 flex flex-col items-center justify-center p-6 text-center text-white">
                 <CheckCircle2 size={56} className="mb-6 text-white drop-shadow-sm stroke-[2.5]" />
                 <h3 className="font-bold font-sans text-xl md:text-2xl mb-2 tracking-tight">Sent!</h3>
                 <p className="font-sans text-[13px] md:text-sm opacity-90 leading-relaxed font-medium">Everyone has what they need.</p>
              </div>

            </div>
          </div>
        </div>

        {/* Right Col: Text Content and Mini Cards */}
        <div className="flex flex-col text-center lg:text-left max-w-lg mx-auto lg:ml-0 order-1 lg:order-2 w-full">
          
          <div className="mb-8 md:mb-10">
            <span className="font-mono text-coral-pop uppercase tracking-widest text-[10px] md:text-xs font-bold mb-3 block">Share in Seconds</span>
            <h2 className="text-3xl md:text-[2.75rem] font-sans font-bold text-cloud mb-5 tracking-tight leading-[1.1]">One tap.<br/>Everyone's covered.</h2>
            <p className="text-[15px] md:text-lg font-sans text-cloud/70 leading-relaxed max-w-md mx-auto lg:mx-0">Your care card is a link. Send it to anyone. They don't need to download anything.</p>
          </div>

          {/* Mini Cards side-stacked */}
          <div className="flex flex-col gap-4 lg:gap-5 w-full pr-2 md:pr-0">
            <div className="mini-card bg-cloud/5 backdrop-blur-sm rounded-2xl p-4 md:p-5 border border-cloud/10 card-lift text-left pl-5 md:pl-6 border-l-4 border-l-honey w-full shadow-lg">
              <h5 className="text-cloud font-bold font-sans mb-1.5 text-[15px] md:text-lg">No App Needed</h5>
              <p className="text-cloud/60 text-[13px] md:text-sm leading-relaxed pr-2">Just open the link. Works instantly on any phone or modern browser.</p>
            </div>
            <div className="mini-card bg-cloud/5 backdrop-blur-sm rounded-2xl p-4 md:p-5 border border-cloud/10 card-lift text-left pl-5 md:pl-6 border-l-4 border-l-coral-pop w-full shadow-lg">
              <h5 className="text-cloud font-bold font-sans mb-1.5 text-[15px] md:text-lg">Always Current</h5>
              <p className="text-cloud/60 text-[13px] md:text-sm leading-relaxed pr-2">Update info once, everyone sees it immediately. No re-sending links.</p>
            </div>
            <div className="mini-card bg-cloud/5 backdrop-blur-sm rounded-2xl p-4 md:p-5 border border-cloud/10 card-lift text-left pl-5 md:pl-6 border-l-4 border-l-soft-sage w-full shadow-lg">
              <h5 className="text-cloud font-bold font-sans mb-1.5 text-[15px] md:text-lg">You Control Access</h5>
              <p className="text-cloud/60 text-[13px] md:text-sm leading-relaxed pr-2">Revoke links anytime or customize specific access for caregivers.</p>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
