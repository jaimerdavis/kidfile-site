import { useEffect } from 'react';

export default function DeleteAccount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto font-sans text-deep-navy">
      <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 shadow-lg border border-border-light">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 font-sans tracking-tight">Request Account Deletion</h1>

        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-deep-navy prose-p:text-deep-navy/80 prose-li:text-deep-navy/80 prose-a:text-honey hover:prose-a:text-soft-sage transition-colors">
          <p>
            To delete your account and associated data for Kidfile, email: <a href="mailto:support@kidfileapp.com" className="text-honey hover:text-soft-sage transition-colors font-semibold">support@kidfileapp.com</a> from the email address tied to your account, or use the in-app Delete Account option under Settings &gt; Account. We will process verified deletion requests within 7 days. Certain records may be retained where required for security, fraud prevention, or legal compliance.
          </p>
          
          <p className="mt-12 text-center text-sm font-medium text-deep-navy/40">
            © 2026 KidFile. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
