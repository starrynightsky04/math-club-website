import './Officers.css'
// Officer names, the advisor, and their info live in src/content.js
import { officers, advisor } from '../content.js'

export default function Officers() {
  return (
    <>
      <header className="officers-hero">
        <p className="officers-kicker">Meet the Team</p>
        <h1>The People Behind the Club</h1>
        <p>The students and teacher who keep Math Club running every week!</p>
      </header>

      <section className="officers-advisor-wrap">
        <div className="officers-advisor">
          <div className="officers-advisor-photo">[ {advisor.name}'s photo ]</div>
          <div className="officers-advisor-body">
            <span className="officers-tag">Faculty Advisor</span>
            <h2>{advisor.name}</h2>
            <p>{advisor.bio}</p>
          </div>
        </div>
      </section>

      <section className="officers-students">
        <div className="officers-students-head">
          <h2>Your Student Officers</h2>
          <p>Say hi to any of us at a meeting, we would love to meet you!</p>
        </div>

        <div className="officers-row">
          {officers.map((o, i) => (
            <article className="officers-card" key={o.role}>
              <span className="officers-num">{String(i + 1).padStart(2, '0')}</span>
              <div className="officers-photo">[ photo ]</div>
              <p className="officers-role">{o.role}</p>
              <h3 className="officers-name">{o.name}</h3>
              <p className="officers-bio">{o.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
