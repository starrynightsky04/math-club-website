import './Donate.css'

const reasons = [
  {
    title: 'Tournament registration',
    text: 'Entry fees for AMC, AIME, and the bigger invitationals add up fast!',
  },
  {
    title: 'Books and practice materials',
    text: 'Problem sets, past contests, and reference books that actually get used',
  },
  {
    title: 'Travel costs',
    text: 'Getting our team to off campus competitions around the area',
  },
  {
    title: 'Meeting snacks',
    text: 'Nobody solves their best problems hungry, so we keep everyone fueled!',
  },
]

const ways = [
  {
    tag: 'Volunteer',
    title: 'Mentor a Member',
    text: 'Alum or upperclassman? Hop in and help us work through a tricky problem set!',
  },
  {
    tag: 'Spread the Word',
    title: 'Share the Club',
    text: 'Tell a friend, post about us, or pin a flyer up somewhere people will see it',
  },
  {
    tag: 'Stay Connected',
    title: 'Follow Us',
    text: 'Keep up with our socials and swing by an event whenever you can!',
  },
]

export default function Donate() {
  return (
    <>
      <header className="donate-hero">
        <div className="donate-hero-inner">
          <p className="donate-kicker">Support the Club</p>
          <h1>
            Help us keep <span className="donate-accent">solving!</span>
          </h1>
          <p>
            Every dollar goes straight back to the students, the contests we
            enter, and the snacks that keep our Friday meetings running!
          </p>
        </div>
      </header>

      <section className="donate-why">
        <div className="donate-why-head">
          <h2>Where your support goes</h2>
          <p>We run lean, so a little goes a long way around here!</p>
        </div>

        <div className="donate-reasons">
          {reasons.map((reason, i) => (
            <div className="donate-reason" key={reason.title}>
              <span className="donate-reason-num">{i + 1}</span>
              <div>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="donate-cta-wrap">
        <div className="donate-cta">
          <h2>Make a donation</h2>
          <p className="donate-cta-lead">
            Ready to chip in? Drop your donation button or link right here and
            members can give in a couple of taps!
          </p>
          <div className="donate-embed">
            <p className="donate-embed-title">Donation button goes here</p>
            <p>
              Easy options are a PayPal Donate button from{' '}
              <code>paypal.com/donate/buttons</code>, Venmo, or the school ASB
              account! Paste the embed code or link in this spot.
            </p>
          </div>
        </div>
      </div>

      <section className="donate-other">
        <div className="donate-other-inner">
          <h2>Other ways to support</h2>
          <p className="donate-other-sub">
            Not able to give right now? No worries, there is still plenty you can do!
          </p>
          <div className="donate-ways">
            {ways.map((way) => (
              <div className="donate-way" key={way.title}>
                <span className="donate-way-tag">{way.tag}</span>
                <h3>{way.title}</h3>
                <p>{way.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
