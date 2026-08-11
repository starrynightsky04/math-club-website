import { contact, newsletterFormUrl } from '../content'

export default function Subscribe() {
  // If no Google Form link has been added to content.js yet, fall back to
  // opening an email to the club so the button is never a dead end.
  const hasForm = newsletterFormUrl.trim() !== ''
  const href = hasForm
    ? newsletterFormUrl
    : `mailto:${contact.email}?subject=${encodeURIComponent('Add me to the newsletter')}`

  return (
    <section className="subscribe-strip">
      <div className="container subscribe-inner">
        <div className="subscribe-text">
          <h3>Join our newsletter</h3>
          <p>Get meeting reminders, competition dates, and club news in your inbox.</p>
        </div>

        <div className="subscribe-action">
          <a
            className="subscribe-button"
            href={href}
            {...(hasForm ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            Sign up
          </a>
          {hasForm && <p className="subscribe-note">Opens a short Google Form.</p>}
        </div>
      </div>
    </section>
  )
}
