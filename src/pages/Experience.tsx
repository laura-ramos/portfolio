import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EXPERIENCE } from "../data/data";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons/faBriefcase";

export const Experience = () => {
  return (
    <>
      <section id="experience">
        <h2 className="text-3xl font-bold text-center">Experience</h2>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {EXPERIENCE.map((item, index) => (
            <li key={index}>
              <div className="timeline-middle">
                <FontAwesomeIcon icon={faBriefcase} size="2x" />
              </div>
              <div
                className={`card ${index % 2 === 0
                  ? "timeline-start"
                  : "timeline-end"
                }`}
                data-aos="flip-right"
                data-aos-delay="300"
                data-aos-offset="200"
              >
                <div className="card-body">
                  <h3 className="card-title">{item.title}</h3>
                  <time className="font-mono italic">
                    {item.start_date}-{item.end_date}
                  </time>
                  <div className="text-lg font-black">{item.company_name}</div>
                  <ul className="list-disc">
                    {item.description.map((data, index) => (
                      <li key={index}>{data}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <hr />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
