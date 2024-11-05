import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { EDUCATION, EXPERIENCE } from "../data/data"
import { faMap } from "@fortawesome/free-solid-svg-icons/faMap"
import { faLocation } from "@fortawesome/free-solid-svg-icons/faLocation"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot"

function Education() {

  return (
    <>
      <div className="max-w-5xl mx-auto p-4">
      <h3 className="text-6xl font-bold text-center">Education</h3>
        <ul className="">
          {EDUCATION.map((item, index) => (
            <li key={index} className="flex items-center m-4 gap-3 animate-fade-right animate-delay-[20ms]">
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                  <img src="/images/utvco.jpg" />
                </div>
              </div>
              <div className="card card-side shadow-xl ml-3 w-full">
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <time className="font-mono italic">{item.start_date}-{item.end_date}</time>
                  {item.college}
                  <p><FontAwesomeIcon icon={faLocationDot}/> {item.description}</p>
                </div>
              </div>
              <hr />
            </li>
          ))}

        </ul>
      </div>
    </>
  )
}

export default Education
