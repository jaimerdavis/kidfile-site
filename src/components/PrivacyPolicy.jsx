import { useEffect } from 'react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto font-sans text-deep-navy">
      <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 shadow-lg border border-border-light">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans tracking-tight">Kidfile Privacy Policy</h1>
        <p className="text-lg text-deep-navy/60 mb-12 font-medium">Effective Date: April 13, 2026</p>

        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-deep-navy prose-p:text-deep-navy/80 prose-li:text-deep-navy/80 prose-a:text-honey hover:prose-a:text-soft-sage transition-colors">
          <p>
            Kidfile ("we," "our," or "us") operates the Kidfile mobile application (the "App"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information — and your children's information — when you use our App. Because Kidfile is designed to store and manage sensitive information about minors, we take privacy extremely seriously. Please read this policy carefully. By downloading or using Kidfile, you agree to the practices described below.
          </p>

          <h2 className="text-2xl mt-8 mb-4">1. INFORMATION WE COLLECT</h2>
          <h3 className="text-xl mt-6 mb-3">1.1 Information You Provide Directly</h3>
          <p>When you create an account and use Kidfile, you may voluntarily provide the following categories of information:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Account information:</strong> your name, email address, and password.</li>
            <li><strong>Child profile information:</strong> your child's name, date of birth, gender, photo, and any nickname or identifying details you choose to add.</li>
            <li><strong>Medical and health records:</strong> allergies, diagnoses, medications, immunization records, insurance policy details (carrier name, policy number, group ID), pediatrician and specialist contact information, and medical visit history.</li>
            <li><strong>Emergency contacts:</strong> names, phone numbers, relationships, and any special instructions for caregivers.</li>
            <li><strong>Educational records:</strong> school name, grade level, teacher names, report card grades, academic notes, and IEP or 504 plan details.</li>
            <li><strong>Documents and images:</strong> any photos or scanned documents you upload or capture through the App, including insurance cards, medical forms, prescriptions, school records, and other files related to your child's care.</li>
          </ul>

          <h3 className="text-xl mt-6 mb-3">1.2 Information Collected Through Device Permissions</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Camera (android.permission.CAMERA):</strong> Kidfile requests access to your device's camera solely to allow you to scan and capture documents directly within the App — such as insurance cards, immunization records, prescription labels, school forms, and other child-related paperwork. The camera is activated only when you explicitly choose to scan or photograph a document within the App. We do not access your camera in the background, and we do not use your camera for facial recognition, surveillance, behavioral tracking, or any purpose other than document capture initiated by you.</li>
            <li><strong>Photo Library / Storage Access:</strong> If you choose to upload an existing photo from your device's gallery rather than taking a new one, we request read access to your device storage for that specific interaction. We do not continuously scan, monitor, or index your photo library.</li>
            <li><strong>Internet Access:</strong> Required to sync your data securely to our cloud servers so your information is backed up and accessible across devices, and to enable the Care Card sharing feature.</li>
          </ul>

          <h3 className="text-xl mt-6 mb-3">1.3 Information Collected Automatically</h3>
          <p>
            When you use the App, we may automatically collect limited technical data, including device type and operating system version, app version, crash logs and performance diagnostics, and anonymous usage analytics (such as which features are used most frequently). We do not collect your precise GPS location. We do not collect advertising identifiers or build advertising profiles.
          </p>

          <h2 className="text-2xl mt-8 mb-4">2. HOW WE USE YOUR INFORMATION</h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>To provide core App functionality — storing, organizing, and displaying your children's profiles, medical records, academic records, emergency contacts, and uploaded documents.</li>
            <li>To enable document scanning — processing images captured via your camera to extract text and auto-fill profile fields (such as reading an insurance card to populate policy details).</li>
            <li>To power Care Card sharing — generating secure, shareable summaries of your child's essential information that you can send to caregivers, family members, schools, or medical providers at your discretion.</li>
            <li>To sync and back up your data across your devices.</li>
            <li>To send you transactional notifications related to your account (such as share confirmations or security alerts).</li>
            <li>To improve App performance, fix bugs, and develop new features based on aggregated, anonymized usage patterns.</li>
            <li>To respond to your support requests.</li>
          </ul>
          <p>
            We do <strong>NOT</strong> use your information or your children's information to serve advertisements, build marketing profiles, sell data to third parties, or train artificial intelligence or machine learning models.
          </p>

          <h2 className="text-2xl mt-8 mb-4">3. HOW WE SHARE YOUR INFORMATION</h2>
          <h3 className="text-xl mt-6 mb-3">3.1 Sharing You Control</h3>
          <p>
            Kidfile's Care Card feature allows you to generate a secure link containing selected information about your child (such as allergies, medications, emergency contacts, and medical details) and share that link with people you choose — grandparents, babysitters, daycare providers, co-parents, coaches, or medical professionals. You control exactly what information is included in each Care Card and who receives the link. You may revoke or expire any shared Care Card link at any time.
          </p>
          
          <h3 className="text-xl mt-6 mb-3">3.2 Service Providers</h3>
          <p>
            We may share limited information with trusted third-party service providers who assist us in operating the App, including cloud hosting and data storage providers, analytics services that process only anonymized and aggregated data, and crash reporting and performance monitoring tools. All service providers are contractually obligated to protect your data, use it only for the services they provide to us, and not disclose or sell it to any other party.
          </p>

          <h3 className="text-xl mt-6 mb-3">3.3 Legal Requirements</h3>
          <p>
            We may disclose your information if required to do so by law, regulation, legal process, or enforceable governmental request, or if we believe in good faith that disclosure is necessary to protect the safety of any person, prevent fraud, or protect our legal rights.
          </p>

          <h3 className="text-xl mt-6 mb-3">3.4 Business Transfers</h3>
          <p>
            In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction. We will notify you via the App or email before your information becomes subject to a different privacy policy.
          </p>

          <h3 className="text-xl mt-6 mb-3">3.5 We Never Sell Your Data</h3>
          <p>
            We do not sell, rent, lease, or trade your personal information or your children's personal information to any third party for any reason, including for advertising or marketing purposes.
          </p>

          <h2 className="text-2xl mt-8 mb-4">4. CHILDREN'S PRIVACY (COPPA AND INTERNATIONAL COMPLIANCE)</h2>
          <p>
            Kidfile is a tool for parents and legal guardians to manage their own children's information. The App is not directed at children and is not intended to be used by anyone under the age of 13 (or the applicable age of digital consent in your jurisdiction). Children do not create accounts or interact with the App directly.
          </p>
          <p>
            All child-related data entered into Kidfile is provided by, and controlled by, the parent or legal guardian who holds the account. As the account holder, you represent that you have legal authority to provide your child's personal information and to share it via Care Card links at your discretion.
          </p>
          <p>
            If we learn that we have inadvertently collected personal information directly from a child under 13 without verified parental consent, we will delete that information promptly. If you believe this has occurred, please contact us immediately at the address listed in Section 11.
          </p>

          <h2 className="text-2xl mt-8 mb-4">5. DATA SECURITY</h2>
          <p>
            We implement industry-standard technical and organizational measures to protect your data, including encryption of data in transit (TLS/SSL) and at rest (AES-256), secure authentication and password hashing, access controls limiting employee access to user data on a strict need-to-know basis, regular security audits and vulnerability assessments, and secure cloud infrastructure hosted by reputable providers with SOC 2 compliance.
          </p>
          <p>
            While no system can guarantee absolute security, we are committed to protecting your family's information with the highest practical standard of care. In the event of a data breach that affects your personal information, we will notify you in accordance with applicable law.
          </p>

          <h2 className="text-2xl mt-8 mb-4">6. DATA RETENTION</h2>
          <p>
            We retain your information for as long as your account is active or as needed to provide you with the App's services. If you delete your account, we will delete or anonymize your personal data and all associated child profile data within 30 days, except where retention is required by law or necessary for legitimate business purposes (such as resolving disputes or enforcing our terms).
          </p>
          <p>
            Shared Care Card links that have already been accessed by recipients prior to account deletion may remain cached in the recipient's browser temporarily, but no new access will be granted after deletion, and cached data will expire.
          </p>

          <h2 className="text-2xl mt-8 mb-4">7. YOUR RIGHTS AND CHOICES</h2>
          <p>Depending on your jurisdiction, you may have the following rights:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Access:</strong> You can view all data stored in your Kidfile account at any time directly within the App.</li>
            <li><strong>Correction:</strong> You can edit or update any information in your child's profile or your account at any time.</li>
            <li><strong>Deletion:</strong> You can delete individual records, entire child profiles, or your full account from within the App. You may also email us to request deletion.</li>
            <li><strong>Data Export:</strong> You can request a portable copy of your data by contacting us.</li>
            <li><strong>Withdraw Consent:</strong> You can revoke camera or storage permissions at any time through your device's system settings. This may limit certain features (such as document scanning) but will not affect the rest of the App.</li>
            <li><strong>Revoke Sharing:</strong> You can deactivate any Care Card share link at any time, immediately cutting off access for all recipients.</li>
            <li><strong>Opt Out of Analytics:</strong> You can disable anonymous usage analytics in the App's settings.</li>
          </ul>
          <p>
            If you are a resident of California, you have additional rights under the CCPA/CPRA, including the right to know what personal information we collect and how it is used, and the right to request deletion. We do not sell personal information as defined under the CCPA.
          </p>
          <p>
            If you are located in the European Economic Area or United Kingdom, you have rights under the GDPR, including the right to lodge a complaint with your local data protection authority.
          </p>
          <p>
            To exercise any of these rights, contact us using the information in Section 11.
          </p>

          <h2 className="text-2xl mt-8 mb-4">8. DEVICE PERMISSIONS SUMMARY</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-deep-navy/10">
                  <th className="py-3 px-4 font-bold">Permission</th>
                  <th className="py-3 px-4 font-bold">Purpose</th>
                  <th className="py-3 px-4 font-bold">When Active</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-deep-navy/10">
                <tr>
                  <td className="py-4 px-4 font-medium align-top">Camera</td>
                  <td className="py-4 px-4 align-top">Scan and photograph documents (insurance cards, medical forms, school records, prescriptions) directly within the App</td>
                  <td className="py-4 px-4 align-top">Only when you tap the scan/capture button inside the App</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium align-top">Storage / Photos</td>
                  <td className="py-4 px-4 align-top">Upload existing photos or documents from your device gallery into a child's profile</td>
                  <td className="py-4 px-4 align-top">Only when you choose to upload a file</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium align-top">Internet</td>
                  <td className="py-4 px-4 align-top">Sync data to secure cloud servers, enable Care Card sharing, deliver notifications</td>
                  <td className="py-4 px-4 align-top">While the App is in use</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            No permissions are used in the background without your knowledge. You can revoke any permission at any time in your device settings.
          </p>

          <h2 className="text-2xl mt-8 mb-4">9. THIRD-PARTY LINKS AND SERVICES</h2>
          <p>
            The App may contain links to third-party websites or services (for example, a link to a medical provider's website). We are not responsible for the privacy practices of any third party. We encourage you to review the privacy policy of any external site you visit.
          </p>

          <h2 className="text-2xl mt-8 mb-4">10. CHANGES TO THIS PRIVACY POLICY</h2>
          <p>
            We may update this Privacy Policy from time to time. When we make material changes, we will notify you by posting the updated policy within the App with a new effective date, and, where appropriate, by sending you a push notification or email. Your continued use of the App after any changes constitutes your acceptance of the updated policy.
          </p>

          <h2 className="text-2xl mt-8 mb-4">11. CONTACT US</h2>
          <p>
            If you have any questions, concerns, or requests related to this Privacy Policy or our data practices, please contact us at:
          </p>
          <div className="bg-deep-navy/5 p-6 rounded-2xl my-4">
            <p className="font-bold mb-1">Kidfile</p>
            <p className="mb-1"><strong>Email:</strong> <a href="mailto:privacy@kidfileapp.com" className="text-honey hover:text-soft-sage transition-colors">privacy@kidfileapp.com</a></p>
            <p className="mb-0"><strong>Address:</strong> Sunrise, FL, United States</p>
          </div>
          <p>We will respond to all privacy-related inquiries within 30 days.</p>

          <h2 className="text-2xl mt-8 mb-4">12. CONSENT</h2>
          <p>
            By creating an account and using the Kidfile App, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and sharing of your information as described herein. You further represent that any child-related information you enter into the App is provided by you as the child's parent or legal guardian with full legal authority to do so.
          </p>

          <p className="mt-12 text-center text-sm font-medium text-deep-navy/40">
            © 2026 Kidfile. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
