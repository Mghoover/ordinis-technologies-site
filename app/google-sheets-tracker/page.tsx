import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Ordinis Core Practice Google Sheets Tracker Integration',
  description: 'Connect a clinic’s selected Google spreadsheet to Ordinis Core Practice for reporting comparisons and authorized updates.',
  path: '/google-sheets-tracker/',
  keywords: ['Ordinis Core Practice', 'Google Sheets Tracker integration'],
});

export default function GoogleSheetsTrackerPage() {
  return (
    <div className="container">
      <article aria-labelledby="tracker-title">
        <p className="kicker">Ordinis Technologies, LLC</p>
        <h1 id="tracker-title">Ordinis Core Practice Google Sheets Tracker integration</h1>
        <p className="lede">Connect a clinic’s selected Google spreadsheet to Ordinis Core Practice for reporting comparisons and authorized updates.</p>

        <section aria-labelledby="tracker-purpose">
          <h2 id="tracker-purpose">What the integration does</h2>
          <p>Ordinis Technologies, LLC provides this integration for clinic teams using Ordinis Core Practice. It reads the selected tracker to display and compare reporting information, identify conflicts, and carry out authorized spreadsheet updates.</p>
        </section>

        <section aria-labelledby="tracker-google-data">
          <h2 id="tracker-google-data">Why it requests Google access</h2>
          <p>The integration uses basic Google account identification to identify the connected account and per-file Drive permission to access the tracker selected through Google Picker. It does not request access to the account’s entire Drive or receive the Google password.</p>
          <p>Selected tracker data and spreadsheet structure support reporting comparisons, synchronization verification, troubleshooting, and recovery. Google processes authorization and spreadsheet API requests, including approved updates written to the spreadsheet.</p>
        </section>

        <section aria-labelledby="tracker-controls">
          <h2 id="tracker-controls">Administrator controls</h2>
          <p>An authenticated, authorized clinic administrator manages the Google connection and selects the configured tracker. Scheduled reads and automatic updates require separate enablement. Clinic application permissions and the spreadsheet’s Google sharing settings also govern access.</p>
          <p>This page describes the integration. Using it requires access to the clinic’s Ordinis Core Practice application.</p>
        </section>

        <section aria-labelledby="tracker-privacy">
          <h2 id="tracker-privacy">Privacy and contact</h2>
          <p>Read the integration’s privacy policy for details about Google account information, tracker data, providers, safeguards, retention, disconnecting, and deletion requests.</p>
          <div className="btnRow">
            <a className="btn btnPrimary" href="https://ordinistechnologies.com/privacy/">Read the tracker integration privacy policy</a>
          </div>
          <p>For privacy or deletion questions, contact <a href="mailto:matt@ordinistechnologies.com">matt@ordinistechnologies.com</a>. Do not email patient records, passwords, or tokens.</p>
          <p>Ordinis Technologies, LLC · Florence, South Carolina</p>
        </section>
      </article>
    </div>
  );
}
