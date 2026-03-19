import { siteConfig } from '@/lib/site';

const serviceOptions = [
  'Request a demo website',
  'Website redesign',
  'Practice management software',
  'Chiropractic software',
  'Hosting or SEO support',
  'Custom software development',
];

export function ContactIntakeForm() {
  return (
    <section>
      <div className="kicker">Project Intake</div>
      <h2>Tell us what you need.</h2>
      <p>
        Fill out the intake form and Ordinis will review your goals, current setup, and timeline
        before following up.
      </p>

      <form
        className="intakeForm"
        action={siteConfig.formAction}
        method="POST"
      >
        <input type="hidden" name="_subject" value="New Ordinis Technologies intake form submission" />
        <input type="hidden" name="_next" value={`${siteConfig.url}${siteConfig.contactThankYouPath}`} />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="text" name="_honey" className="visuallyHidden" tabIndex={-1} autoComplete="off" />

        <div className="formGrid">
          <label className="field">
            <span>Name</span>
            <input type="text" name="name" required autoComplete="name" />
          </label>

          <label className="field">
            <span>Business or practice</span>
            <input type="text" name="business" required autoComplete="organization" />
          </label>

          <label className="field">
            <span>Email</span>
            <input type="email" name="email" required autoComplete="email" />
          </label>

          <label className="field">
            <span>Phone</span>
            <input type="tel" name="phone" autoComplete="tel" />
          </label>

          <label className="field">
            <span>Primary need</span>
            <select name="service" defaultValue="" required>
              <option value="" disabled>
                Select one
              </option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="field">
            <span>Target timeline</span>
            <select name="timeline" defaultValue="" required>
              <option value="" disabled>
                Select one
              </option>
              <option value="Immediately">Immediately</option>
              <option value="Within 30 days">Within 30 days</option>
              <option value="Within 60-90 days">Within 60-90 days</option>
              <option value="Planning for later">Planning for later</option>
            </select>
          </label>
        </div>

        <label className="field">
          <span>Current website or software</span>
          <input
            type="text"
            name="current_system"
            placeholder="Website URL, current EHR, or current setup"
          />
        </label>

        <label className="field">
          <span>What outcome are you trying to improve?</span>
          <textarea
            name="goals"
            rows={4}
            required
            placeholder="More leads, better scheduling, cleaner billing workflows, faster site performance, etc."
          />
        </label>

        <label className="field">
          <span>Project details</span>
          <textarea
            name="message"
            rows={6}
            required
            placeholder="Share the context, pain points, and anything else we should know."
          />
        </label>

        <div className="btnRow">
          <button className="btn btnPrimary" type="submit">
            Submit Intake
          </button>
        </div>
        <p className="small">
          Prefer direct contact? Call <a href={siteConfig.phoneHref}>{siteConfig.phone}</a> or email{' '}
          <a href={siteConfig.emailHref}>{siteConfig.email}</a>.
        </p>
      </form>
    </section>
  );
}
