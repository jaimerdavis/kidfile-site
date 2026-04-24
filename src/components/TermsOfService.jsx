import { useEffect } from 'react';

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto font-sans text-deep-navy">
      <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 shadow-lg border border-border-light">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans tracking-tight">Terms of Service</h1>
        <p className="text-lg text-deep-navy/60 mb-12 font-medium">Last updated: 04/01/2026</p>

        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-deep-navy prose-p:text-deep-navy/80 prose-li:text-deep-navy/80 prose-a:text-honey hover:prose-a:text-soft-sage transition-colors">
          <p>
            Welcome to Kidfile. These Terms of Service ("Terms") govern your access to and use of the Kidfile mobile application, website at kidfileapp.com, and related services (collectively, the "Service") operated by Kidfile ("Kidfile," "we," "us," or "our").
          </p>
          <p>
            By creating an account, accessing, or using the Service, you agree to be bound by these Terms and by our Privacy Policy and Trust & Safety Policy, each of which is incorporated here by reference. If you do not agree, do not use the Service.
          </p>

          <h2 className="text-2xl mt-8 mb-4">1. Who Can Use Kidfile</h2>
          <p>
            <strong>Adult account holders.</strong> You must be at least 18 years old (or the age of majority in your jurisdiction) to create a Kidfile account and agree to these Terms. By registering, you represent that you meet this requirement and that the information you provide is accurate and complete.
          </p>
          <p>
            <strong>Children.</strong> Kidfile is not directed to children under 13, and children may not create their own accounts. Where Kidfile permits a parent or legal guardian to create a supervised profile for a child, the parent or guardian is solely responsible for that child's use of the Service, for all content added to or about the child, and for ensuring such use complies with these Terms and applicable law.
          </p>
          <p>
            <strong>Authority to bind.</strong> If you are using the Service on behalf of a family, organization, or another person, you represent that you have authority to bind them to these Terms.
          </p>

          <h2 className="text-2xl mt-8 mb-4">2. Your Account</h2>
          <p>
            You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. Notify us immediately at <a href="mailto:support@kidfileapp.com">support@kidfileapp.com</a> if you suspect unauthorized access. We may refuse, suspend, or terminate accounts at our discretion, including where required to protect users or comply with law.
          </p>

          <h2 className="text-2xl mt-8 mb-4">3. Your Content</h2>
          <p>
            <strong>What "Your Content" means.</strong> "Your Content" includes photos, videos, audio recordings, documents, messages, milestones, journal entries, metadata, and any other material you upload, submit, or transmit through the Service, including content about your children or other family members.
          </p>
          <p>
            <strong>Ownership.</strong> You retain ownership of Your Content. We do not claim ownership of it.
          </p>
          <p>
            <strong>License to us.</strong> You grant Kidfile a worldwide, non-exclusive, royalty-free, sublicensable license to host, store, reproduce, transmit, process, display, and create derivative works of Your Content solely to the extent necessary to operate, provide, secure, and improve the Service for you (for example, generating thumbnails, syncing across your devices, enabling sharing you've initiated, and backing up your data). This license ends when Your Content is deleted from our systems, except for backups retained for a reasonable period or as required by law.
          </p>
          <p>
            <strong>Your responsibility.</strong> You represent and warrant that (a) you own or have the necessary rights and permissions to submit Your Content and to grant the license above, (b) you have obtained any required consents from other individuals depicted or referenced (including co-parents, guardians, and any adults appearing in child-related content), and (c) Your Content does not violate these Terms or any law.
          </p>
          <p>
            We do not monitor all content, but we may review, remove, or restrict content that we reasonably believe violates these Terms, our Trust & Safety Policy, or applicable law.
          </p>

          <h2 className="text-2xl mt-8 mb-4">4. Acceptable Use</h2>
          <p>You agree not to, and not to permit anyone else to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Use the Service to upload, store, or share any sexual, sexualized, or exploitative content involving minors. Kidfile has zero tolerance for child sexual abuse material (CSAM), and we report suspected CSAM to the National Center for Missing & Exploited Children (NCMEC) and cooperate with law enforcement.</li>
            <li>Upload content depicting abuse, neglect, endangerment, or grooming of a child.</li>
            <li>Harass, threaten, impersonate, dox, or otherwise harm any person.</li>
            <li>Upload unlawful, defamatory, hateful, or violent content; content that infringes intellectual property or privacy rights; or content containing malware.</li>
            <li>Use the Service to solicit personal information from, or to contact, any child who is not in your care.</li>
            <li>Reverse engineer, decompile, scrape, or attempt to extract source code or data from the Service, except to the extent this restriction is prohibited by law.</li>
            <li>Circumvent rate limits, access controls, or security features, or use automated means to access the Service without our written permission.</li>
            <li>Resell, sublicense, or commercially exploit the Service without our written permission.</li>
          </ul>
          <p>Additional conduct rules are described in our Trust & Safety Policy, which forms part of these Terms.</p>

          <h2 className="text-2xl mt-8 mb-4">5. Sharing Features</h2>
          <p>
            If the Service allows you to share content with other users (for example, co-parents, grandparents, or guardians), you are responsible for whom you invite and what you share. Recipients may be able to view, download, or save what you share with them. Once you share content with another user, you cannot fully control how that content is used outside the Service.
          </p>

          <h2 className="text-2xl mt-8 mb-4">6. Subscriptions, Purchases, and Free Trials</h2>
          <p>Certain features may require a paid subscription or one-time purchase.</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Billing.</strong> Prices, billing cycles, and features are shown at the point of purchase. Subscriptions automatically renew at the then-current rate until canceled.</li>
            <li><strong>App stores.</strong> Purchases made through the Apple App Store or Google Play are also governed by those platforms' terms, and cancellations and refunds are handled through your app store account.</li>
            <li><strong>Free trials.</strong> If we offer a free trial, you must cancel before the trial ends to avoid being charged.</li>
            <li><strong>Taxes.</strong> You are responsible for any applicable taxes.</li>
            <li><strong>Refunds.</strong> Except where required by law or stated in writing by us, all fees are non-refundable.</li>
          </ul>

          <h2 className="text-2xl mt-8 mb-4">7. Intellectual Property</h2>
          <p>
            The Service, including its software, design, branding, logos, and content we provide, is owned by Kidfile or its licensors and is protected by intellectual property laws. We grant you a limited, non-exclusive, non-transferable, revocable license to use the Service for personal, non-commercial purposes in accordance with these Terms.
          </p>

          <h2 className="text-2xl mt-8 mb-4">8. Copyright and DMCA</h2>
          <p>
            If you believe content on the Service infringes your copyright, send a notice to <a href="mailto:dmca@kidfileapp.com">dmca@kidfileapp.com</a> including the information required under 17 U.S.C. § 512(c)(3). We may remove allegedly infringing content and terminate repeat infringers' accounts.
          </p>

          <h2 className="text-2xl mt-8 mb-4">9. Third-Party Services</h2>
          <p>
            The Service may link to or integrate with third-party products (e.g., cloud storage, authentication providers, app stores). We are not responsible for third-party services, and your use of them is governed by their terms and privacy policies.
          </p>

          <h2 className="text-2xl mt-8 mb-4">10. Feedback</h2>
          <p>
            If you send us suggestions, ideas, or feedback, you grant us a perpetual, irrevocable, royalty-free license to use them without restriction or compensation.
          </p>

          <h2 className="text-2xl mt-8 mb-4">11. Termination</h2>
          <p>
            You may stop using the Service and delete your account at any time through in-app settings or by emailing <a href="mailto:support@kidfileapp.com">support@kidfileapp.com</a>. We may suspend or terminate your access at any time, with or without notice, if we reasonably believe you have violated these Terms or our Trust & Safety Policy, if required by law, or to protect the Service or other users. On termination, your right to use the Service ends. Provisions that by their nature should survive (e.g., content licenses for retained backups, disclaimers, limits on liability, indemnity, dispute resolution) will survive.
          </p>

          <h2 className="text-2xl mt-8 mb-4">12. Disclaimers</h2>
          <p className="uppercase">
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ANY WARRANTIES ARISING FROM COURSE OF DEALING OR USAGE OF TRADE. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, ERROR-FREE, OR THAT CONTENT WILL NOT BE LOST. YOU ARE RESPONSIBLE FOR MAINTAINING YOUR OWN BACKUPS OF IMPORTANT CONTENT.
          </p>

          <h2 className="text-2xl mt-8 mb-4">13. Limitation of Liability</h2>
          <p className="uppercase">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, KIDFILE AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, GOODWILL, OR CONTENT, ARISING OUT OF OR RELATED TO THE SERVICE. OUR TOTAL LIABILITY FOR ALL CLAIMS RELATED TO THE SERVICE IN ANY 12-MONTH PERIOD WILL NOT EXCEED THE GREATER OF (A) THE AMOUNTS YOU PAID US IN THAT PERIOD OR (B) USD $100.
          </p>
          <p>
            Some jurisdictions do not allow certain limitations, so parts of this section may not apply to you.
          </p>

          <h2 className="text-2xl mt-8 mb-4">14. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless Kidfile from any claims, damages, liabilities, and expenses (including reasonable attorneys' fees) arising from (a) Your Content, (b) your use of the Service, (c) your violation of these Terms, or (d) your violation of any law or third-party right.
          </p>

          <h2 className="text-2xl mt-8 mb-4">15. Governing Law and Dispute Resolution</h2>
          <p>
            These Terms are governed by the laws of the State of Florida, without regard to conflict-of-laws rules. You and Kidfile agree that any dispute arising out of or relating to these Terms or the Service will be brought exclusively in the state or federal courts located in Broward County, FL, and you consent to personal jurisdiction in those courts.
          </p>
          <p>
            <strong>Informal resolution first.</strong> Before filing a claim, you agree to contact us at <a href="mailto:legal@kidfileapp.com">legal@kidfileapp.com</a> and attempt to resolve the dispute informally for at least 30 days.
          </p>

          <h2 className="text-2xl mt-8 mb-4">16. Changes to the Terms</h2>
          <p>
            We may update these Terms from time to time. If we make material changes, we'll notify you through the Service or by email and update the "Last updated" date above. Your continued use of the Service after changes take effect means you accept the updated Terms.
          </p>

          <h2 className="text-2xl mt-8 mb-4">17. Miscellaneous</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Entire agreement.</strong> These Terms, the Privacy Policy, and the Trust & Safety Policy are the entire agreement between you and Kidfile regarding the Service.</li>
            <li><strong>Severability.</strong> If any provision is found unenforceable, the rest remains in effect.</li>
            <li><strong>No waiver.</strong> Our failure to enforce a provision is not a waiver of it.</li>
            <li><strong>Assignment.</strong> You may not assign these Terms; we may assign them in connection with a merger, acquisition, or sale of assets.</li>
            <li><strong>Notices.</strong> We may give notice through the Service or to the email address associated with your account.</li>
          </ul>

          <h2 className="text-2xl mt-8 mb-4">18. Contact</h2>
          <p>
            Questions about these Terms? Contact us at <a href="mailto:support@kidfileapp.com">support@kidfileapp.com</a>.
          </p>

          <p className="mt-12 text-center text-sm font-medium text-deep-navy/40">
            © 2026 Kidfile. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
