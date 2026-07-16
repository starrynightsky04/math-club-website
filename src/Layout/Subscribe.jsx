import { useState } from 'react'

const encode = (data) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')

export default function Subscribe() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | submitting | done | error

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !email.includes('@')) {
      setStatus('error')
      return
    }

    setStatus('submitting')

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'newsletter', email }),
    })
      .then(() => {
        setStatus('done')
        setEmail('')
      })
      .catch(() => setStatus('error'))
  }

  return (
    <section className="subscribe-strip">
      <div className="container subscribe-inner">
        <div className="subscribe-text">
          <h3>Join our newsletter</h3>
          <p>Get our newsletter with meeting reminders, competitions, and club events.</p>
        </div>

        <form
          name="newsletter"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="subscribe-form"
        >
          <input type="hidden" name="form-name" value="newsletter" />
          <p className="subscribe-hp">
            <label>
              Leave this field empty
              <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </p>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'submitting'}
            aria-label="Email address"
          />
          <button type="submit" disabled={status === 'submitting'}>
            {status === 'submitting'
              ? 'Subscribing...'
              : status === 'done'
                ? 'Subscribed'
                : 'Subscribe'}
          </button>

          {status === 'done' && (
            <p className="subscribe-note">Thanks for joining our newsletter.</p>
          )}
          {status === 'error' && (
            <p className="subscribe-note subscribe-note-error">
              Please enter a valid email address.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
