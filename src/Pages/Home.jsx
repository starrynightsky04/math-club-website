import { Link } from 'react-router-dom'
import './Home.css'
// Meeting day, time, and room live in src/content.js
import { meeting } from '../content.js'

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero-inner">
          <p className="home-kicker">Leland High School</p>
          <h1>
            We're the <span className="accent">Math Club</span>
          </h1>
          <p className="home-tagline">
            Friday afternoons, a room full of problems, and people who actually
            like solving them! Come find out what that's about.
          </p>
          <div className="home-hero-actions">
            <Link to="/join" className="btn">Join the Club</Link>
            <Link to="/events" className="btn outline">See what's coming up</Link>
          </div>
        </div>
        <span className="home-hero-mark" aria-hidden="true">&sum;</span>
      </section>

      <div className="home-facts">
        <div className="home-facts-inner">
          <span><span className="home-fact-label">When</span>{meeting.day}, {meeting.time}</span>
          <span><span className="home-fact-label">Where</span>{meeting.room}</span>
          <span><span className="home-fact-label">Who</span>Every skill level welcome!</span>
        </div>
      </div>

      <section className="home-who">
        <div className="home-photo">[ club photo, group shot at a meeting ]</div>
        <div>
          <h2>Who we are</h2>
          <p>
            We're Leland students who spend Friday afternoons doing math! Some of
            us walked in obsessed with competition math, some of us just thought
            it sounded fun, and honestly both turned out great.
          </p>
          <p>
            No tryouts, no pressure, no prior experience needed! Just show up.
          </p>
          <Link to="/about" className="btn">More about us</Link>
        </div>
      </section>

      <section className="home-do">
        <div className="home-do-inner">
          <h2>What we get up to</h2>
          <div className="home-do-grid">
            <div className="home-do-feature">
              <h3>Weekly problem-solving</h3>
              <p>
                We dig into real contest problems together, swap tricks, and
                slowly turn "no idea" into "oh, that's clever!"
              </p>
            </div>
            <div className="home-do-stack">
              <div className="home-do-small">
                <h3>Tournaments</h3>
                <p>AMC, AIME, and Bay Area tournaments all year long!</p>
              </div>
              <div className="home-do-small">
                <h3>Good company</h3>
                <p>People who light up over a neat solution. You'll fit right in!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-banner">
        <h2>
          Meetings every Friday in <span className="home-room">{meeting.room}</span>!
        </h2>
        <p>Drop by anytime from {meeting.time}. New faces always welcome!</p>
        <Link to="/join" className="btn">Come hang out</Link>
      </section>
    </>
  )
}
