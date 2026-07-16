import './About.css'
// Meeting day, time, and room live in src/content.js
import { meeting } from '../content.js'

const features = [
  { stat: 'All levels', label: 'from first-timers to AMC veterans' },
  { stat: 'AMC + AIME', label: 'practice runs and timed sets' },
  { stat: 'Every week', label: 'group problem-solving and mock contests' },
]

const milestones = [
  { year: 'Founded', title: 'The club gets started', body: 'Add the year we were founded and who got it going!' },
  { year: 'Along the way', title: 'Wins worth bragging about', body: 'Drop in notable results, qualifiers, and tournament finishes here.' },
  { year: 'Today', title: 'Where we are now', body: 'A weekly crew of Leland students who genuinely like doing math together!' },
]

export default function About() {
  return (
    <div className="about">
      <section className="about-intro">
        <div className="about-intro-head">
          <p className="about-kicker">About the club</p>
          <h1>We&rsquo;re here for<br />the math</h1>
        </div>
        <div className="about-intro-body">
          <p>
            We&rsquo;re a student-run club at Leland for anyone who likes math, full stop!
            Every week we get together to work through problems, prep for competitions,
            and trade the kind of clever tricks you don&rsquo;t pick up in class.
          </p>
          <p>
            Some of us have done competition math for years and some of us just think it&rsquo;s
            fun! Both belong here, and that&rsquo;s honestly the whole point.
          </p>
        </div>
      </section>

      <section className="about-quote-wrap">
        <blockquote className="about-quote">
          Come for the AMC prep, stay because solving a hard problem with friends feels great!
        </blockquote>
      </section>

      <section className="about-features">
        <h2 className="about-section-label">What you&rsquo;ll find here</h2>
        <div className="about-feature-row">
          {features.map((f) => (
            <div className="about-feature" key={f.stat}>
              <span className="about-feature-stat">{f.stat}</span>
              <span className="about-feature-label">{f.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="about-story">
        <h2 className="about-section-label">Our story</h2>
        <ol className="about-timeline">
          {milestones.map((m) => (
            <li className="about-milestone" key={m.year}>
              <span className="about-milestone-year">{m.year}</span>
              <div className="about-milestone-body">
                <h3>{m.title}</h3>
                <p className="muted">{m.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="about-meet">
        <p>
          Want in? We meet <strong>{meeting.day}, {meeting.time} in {meeting.room}</strong>. Just show up,
          we&rsquo;ll save you a seat!
        </p>
      </section>
    </div>
  )
}
