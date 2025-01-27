import { SKILLS } from '../data/data'

export const Skills = () => {
  return (
    <>
      <section id="about">
        <div className="p-4 text-center">
          <div className="animate-fade-left animate-delay-[3ms]">
            {SKILLS.map((item, index) => (
              <div key={index} className="pt-6 pb-6">
                <h3 className="text-4xl font-bold mb-5">{item.name}</h3>
                <ul className="inline-grid lg:grid-cols-6 gap-5 md:grid-cols-3 grid-cols-2">
                  {item.skills.map((data, index) => (
                    <li key={index}>
                      <button className="border group text-sm font-semibold grid flex-col items-center p-3 w-36 h-28 justify-items-center">
                        <img src={data.image} className="h-16" />
                        <span className="pt-2">{data.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
