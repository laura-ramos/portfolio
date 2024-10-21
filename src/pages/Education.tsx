import { EDUCATION, EXPERIENCE } from "../data/data"

function Education() {

  return (
    <>
      <div className="max-w-5xl mx-auto p-4">
        <ul className="">
          {EDUCATION.map((item, index) => (
            <li key={index} className="flex items-center m-4">
              <button className="btn btn-circle btn-outline">
                {item.start_date}
              </button>

              <div className="card card-side bg-base-100 shadow-xl ml-3">

                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <p>{item.description}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                  </div>
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
