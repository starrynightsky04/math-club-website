import './Events.css'
// Meeting time, the competition list, and past results live in src/content.js
import { meeting, tournaments, results } from '../content.js'

export default function Events() {
  return (
    <div className="events-page">
      <header className="events-banner">
        <div className="events-banner-inner">
          <p className="events-kicker">Every single week</p>
          <h1>
            Meet us <span className="events-accent">{meeting.day}</span> in {meeting.room}!
          </h1>
          <div className="events-meeting-line">
            <span><strong>{meeting.day}</strong> all year</span>
            <span className="events-dot">&#9670;</span>
            <span><strong>{meeting.time}</strong></span>
            <span className="events-dot">&#9670;</span>
            <span><strong>{meeting.room}</strong></span>
          </div>
        </div>
      </header>

      <section className="events-weekly">
        <div className="events-weekly-grid">
          <div className="events-panel">
            <span className="events-tag">Most weeks</span>
            <h3>Problem-Solving Session</h3>
            <p>We dig into past AMC and AIME problems together and trade tricks until they click!</p>
          </div>
          <div className="events-panel">
            <span className="events-tag">Game day</span>
            <h3>Mock Competition</h3>
            <p>Timed practice contests run under real tournament conditions, so the real thing feels easy!</p>
          </div>
        </div>
      </section>

      <section className="events-timeline-wrap">
        <div className="events-timeline-inner">
          <div className="events-timeline-head">
            <h2>Our competition year</h2>
            <p>Here is where we are headed, season by season!</p>
          </div>

          <div className="events-timeline">
            {tournaments.map((t) => (
              <div className="events-stop" key={t.name}>
                <span className="events-season">{t.season}</span>
                <h3>{t.name}</h3>
                <p className="events-when">{t.when}</p>
                <p>{t.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="events-past">
        <div className="events-past-card">
          <p className="events-big-mark">&#9733;</p>
          <h2>Past Events</h2>
          {results.length === 0 ? (
            <p>Results, photos, and highlights from our competitions are coming soon, so check back to see how we did!</p>
          ) : (
            <ul className="events-results">
              {results.map((r) => (
                <li key={r.name}>
                  <strong>{r.name}</strong> {r.detail}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  )
}
