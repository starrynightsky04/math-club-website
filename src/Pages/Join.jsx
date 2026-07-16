import './Join.css'
// Meeting day, time, and room live in src/content.js
import { meeting } from '../content.js'

const steps = [
  {
    n: '1',
    title: 'Fill out the form',
    body: 'Drop your name in the signup form right below! Takes about a minute',
  },
  {
    n: '2',
    title: 'Show up Friday',
    body: `Come hang at a meeting, ${meeting.day} ${meeting.time} in ${meeting.room}`,
  },
  {
    n: '3',
    title: 'Say hi!',
    body: 'Find a seat, grab a problem, that is really all there is to it',
  },
]

export default function Join() {
  return (
    <>
      <header className="join-hero">
        <div className="container">
          <p className="join-kicker">New members, year round!</p>
          <h1>Come join us!</h1>
          <p className="join-lede">
            No tryouts, no pressure, no experience needed! If you like math even a
            little, there is a seat for you
          </p>
        </div>
      </header>

      <section className="join-steps-section">
        <div className="container">
          <h2 className="join-steps-heading">Three steps and you are in</h2>
          <ol className="join-steps">
            {steps.map((s) => (
              <li className="join-step" key={s.n}>
                <span className="join-step-num">{s.n}</span>
                <div className="join-step-text">
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="join-form-section">
        <div className="container">
          <div className="join-form-card">
            <h2>Sign up here!</h2>
            <p className="join-form-sub">
              Pop your info in below and we will see you Friday
            </p>
            <div className="join-form-embed">
              <p className="join-embed-title">Google Form goes here</p>
              <p className="join-embed-help">
                In Google Forms click Send, open the &lt; &gt; tab, copy the iframe
                code, and paste it right here!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
