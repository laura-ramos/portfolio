import { SKILLS } from '../data/data'

export const Skills = () => {
  return (
    <>
      <section id="skills">
        <h2 className="text-3xl font-bold text-center">My Skills</h2>
        <div className="p-4 text-center">
          <div className="">
            {SKILLS.map((item, index) => (
              <div key={index} className="pt-6 pb-6" data-aos="fade-up">
                <h3 className="font-bold mb-5">{item.name}</h3>
                <ul className="flex flex-row justify-center">
                  {item.skills.map((data, index) => (
                    <li key={index} className='ml-2 mr-2'>
                      <div className="border text-sm font-semibold grid flex-col items-center p-3 w-36 h-28 justify-items-center">
                        <img src={data.image} className="h-16" alt={item.name} />
                        <span className="pt-2">{data.name}</span>
                      </div>
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
