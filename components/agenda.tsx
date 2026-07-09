import { AGENDA, TRACKS } from "@/lib/data"
import { Reveal } from "./reveal"

export function Agenda() {
  return (
    <section id="agenda" className="section section-agenda">
      <div className="container agenda-layout">
        <Reveal className="section-head">
          <p className="eyebrow">Agenda</p>
          <h2>October 1, 2026</h2>
          <p className="lead">Full-day program from 8AM to 8PM at Valo Park.</p>
        </Reveal>
        <div className="agenda-columns">
          <ol className="agenda-timeline">
            {AGENDA.map((item, index) => (
              <Reveal as="li" className="agenda-item" delay={index * 80} key={item.title}>
                <div className="agenda-time">{item.time}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          <Reveal className="tracks-panel" delay={150}>
            <h3>Breakout Tracks</h3>
            <div>
              {TRACKS.map((track) => (
                <div className="track-card" key={track.title}>
                  <h4>{track.title}</h4>
                  <ul>
                    {track.panels.map((panel) => (
                      <li key={panel}>{panel}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
