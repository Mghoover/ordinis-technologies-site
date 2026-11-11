import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: 'Privacy Policy: Ordinis Google Sheets Tracker Integration',
    description: 'Google account information, spreadsheet data, and technical records for the Ordinis Google Sheets Tracker integration.',
    path: '/privacy/',
    keywords: ['Ordinis', 'Google Sheets Tracker', 'privacy'],
  }),
};

export default function PrivacyPage() {
  return (
    <div className="container">
      <article aria-labelledby="privacy-title">
        <h1 id="privacy-title">Privacy Policy: Ordinis Google Sheets Tracker Integration</h1>
        <p>{"Ordinis Technologies, LLC provides the Google Sheets Tracker integration in Ordinis Core Practice. This policy covers that integration’s Google account information, spreadsheet data, and related technical records. It does not replace a clinic’s privacy notice or cover every Ordinis product."}</p>
        <section aria-labelledby="privacy-section-1">
          <h2 id="privacy-section-1">1. Information accessed</h2>
          <p>{"When an administrator connects Google, Ordinis receives the account email address, Google account identifier, and authorization tokens. Ordinis does not receive the Google password. The integration requests basic account identification and per-file Drive permission. You select the configured tracker through Google Picker; it does not request access to your entire Drive."}</p>
          <p>{"Tracker information can include patient names, appointment and assessment dates, attendance, referral sources and notes, conditions, care-plan and membership information, service and payment types, amounts collected, and review or testimonial indicators. It also reads spreadsheet identifiers and versions, worksheet structure, and relevant cell values, formulas, notes, formatting, validation rules, and protections."}</p>
          <p>{"Routine synchronization reads the date index and recent or proposed destination rows. Other export/recovery operations can capture workbook snapshots. Technical records can include account identifiers, IP addresses, request paths, browser information, timestamps, errors, synchronization results, and security events."}</p>
        </section>
        <section aria-labelledby="privacy-section-2">
          <h2 id="privacy-section-2">2. Purpose</h2>
          <p>{"Ordinis uses this information to identify the connected account, verify access, display and compare tracker information, identify conflicts, and carry out authorized spreadsheet updates. Scheduled reads and automatic updates require separate enablement. Snapshots and synchronization records support verification, troubleshooting, and recovery."}</p>
        </section>
        <section aria-labelledby="privacy-limited-use">
          <h2 id="privacy-limited-use">Google API data and Limited Use</h2>
          <p>Ordinis Google Sheets Tracker integration’s use and transfer to any other app of information received from Google APIs will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User Data Policy</a>, including the Limited Use requirements.</p>
          <p>Ordinis will not sell Google data, use it for advertising or credit decisions, or use it to train general-purpose AI models. Access to and sharing of Google data will be limited to providing the integration, security, legal requirements, and other purposes permitted by Google’s policies.</p>
          <p>See also the <a href="https://developers.google.com/workspace/workspace-api-user-data-developer-policy">Google Workspace API User Data and Developer Policy</a>.</p>
        </section>
        <section aria-labelledby="privacy-section-3">
          <h2 id="privacy-section-3">3. Providers/access</h2>
          <p>{"Google processes authorization and spreadsheet API requests, including approved information written to the spreadsheet. Amazon Web Services provides hosting and storage. Cloudflare provides web delivery and security. Clinic users access information according to clinic application permissions; spreadsheet access also depends on its Google sharing settings."}</p>
        </section>
        <section aria-labelledby="privacy-section-4">
          <h2 id="privacy-section-4">4. Protection</h2>
          <p>{"The integration runs on AWS infrastructure in the United States. Authorization tokens and connection details are encrypted in restricted server-side storage. Tracker snapshots and journals are encrypted and protected by restricted file permissions. Google API communications use HTTPS, and connection management requires an authenticated clinic administrator. These safeguards reduce risk but cannot guarantee against unauthorized access or loss."}</p>
        </section>
        <section aria-labelledby="privacy-section-5">
          <h2 id="privacy-section-5">5. Retention/control</h2>
          <p>{"Tokens remain while the connection is active. Disconnect stops further use and requests Google revocation. If revocation fails, an encrypted token can remain for a later revocation attempt. Disconnect does not delete the spreadsheet, original clinic records, or retained snapshots and synchronization records."}</p>
          <p>{"Tracker snapshots, journals, and retained recovery copies currently have no automatic expiration. Technical logs use differing retention and rotation settings. You can also remove the app’s access in Google Account settings."}</p>
          <p>{"To request deletion of integration data, email matt@ordinistechnologies.com with your connected account email and clinic name. Do not email patient records, passwords, or tokens. Requests require verification of authority and scope, including coordination with the clinic where necessary. Removing integration copies is distinct from deleting the source spreadsheet or original clinic medical records."}</p>
          <p>Ordinis will review verified deletion requests, identify the relevant tracker copies and backups, and explain anything that must be retained. The current system has no automatic deletion schedule, and this policy does not promise a fixed deletion deadline.</p>
        </section>
        <section aria-labelledby="privacy-section-6">
          <h2 id="privacy-section-6">6. Contact</h2>
          <p>Ordinis Technologies, LLC · Florence, South Carolina · <a href="mailto:matt@ordinistechnologies.com">matt@ordinistechnologies.com</a></p>
        </section>
      </article>
    </div>
  );
}

