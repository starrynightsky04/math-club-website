import './Contact.css'
// Email, Instagram, meeting time, and advisor all live in src/content.js
import { contact, meeting, advisor } from '../content.js'

export default function Contact() {
  return (
    <>
      <header className="contact-head">
        <p className="contact-kicker">Say hello</p>
        <h1>Contact Us!</h1>
      </header>

      <section className="contact-hero">
        <a className="contact-mail-panel" href={`mailto:${contact.email}`}>
          <p className="contact-mail-label">Easiest way to reach us</p>
          <p className="contact-mail-big">{contact.email}</p>
          <p className="contact-mail-sub">
            Got a question about meetings, tournaments, or joining? Email us and we will get back to you!
          </p>
        </a>

        <div className="contact-details">
          <div className="contact-detail">
            <p className="contact-detail-label">Advisor</p>
            <h3>{advisor.name}</h3>
            <p>{advisor.subjects}</p>
          </div>
          <div className="contact-detail">
            <p className="contact-detail-label">Meetings</p>
            <h3>{meeting.day}, {meeting.time}</h3>
            <p>{meeting.room}, just drop by!</p>
          </div>
          <div className="contact-detail">
            <p className="contact-detail-label">No appointment needed</p>
            <h3>Come say hi in person</h3>
            <p>Stopping by a meeting works just as well as emailing!</p>
          </div>
        </div>
      </section>

      <section className="contact-online">
        <h2>Find Us Online!</h2>
        <p className="contact-online-note">Follow along, send a message, or jump into the chat!</p>
        <div className="contact-tiles">
          <div className="contact-tile contact-tile-ig">
            <p className="contact-tile-tag">Instagram</p>
            <h3>{contact.instagram}</h3>
            <p>Photos, reminders, and meeting updates!</p>
          </div>
          <div className="contact-tile contact-tile-discord">
            <p className="contact-tile-tag">Discord</p>
            <h3>Join our server!</h3>
            <p>Invite link goes here</p>
          </div>
          <a
            className="contact-tile contact-tile-email"
            href={`mailto:${contact.email}`}
          >
            <p className="contact-tile-tag">Email</p>
            <h3>{contact.email}</h3>
            <p>Best for longer questions!</p>
          </a>
        </div>
      </section>

      <section className="contact-message">
        <h2>Send Us a Message</h2>
        <p className="contact-message-lead">
          Prefer a form? We can drop one right here, but emailing us works great too!
        </p>
        <div className="contact-form-box">
          <strong>Optional Google Form goes here</strong>
          <p>Embed a contact form in this spot, or just email us at the address above!</p>
        </div>
      </section>
    </>
  )
}
