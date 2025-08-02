import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EXPERIENCE } from "../data/data";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons/faBriefcase";
import { Card } from "../componets/Card";

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
                <Card {...item}/>
              </div>
              <hr />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
