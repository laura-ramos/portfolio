import { EDUCATION, EXPERIENCE } from "../data/data"

function Education() {

  return (
    <>
      <div className="max-w-5xl mx-auto p-4">
        <ul className="">
          {EDUCATION.map((item, index) => (
            <li key={index} className="flex items-center m-4 gap-3">
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                  <img src="/images/utvco.jpg" />
                </div>
              </div>
              <div className="card card-side bg-base-100 shadow-xl ml-3 w-full">
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <time className="font-mono italic">{item.start_date}-{item.end_date}</time>
                  {item.college}
                  <p>{item.description}</p>
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
