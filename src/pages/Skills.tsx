import { SkillItem } from '../componets/SkillItem'
import { SKILLS } from '../data/data'

export const Skills = () => {
  return (
    <>
      <section id="skills">
        <h2 className="text-3xl font-bold text-center">My Skills</h2>
        <div className="p-4 text-center">
          <div>
            {SKILLS.map((item, index) => (
              <div key={index} className="py-6" data-aos="fade-up">
                <h3 className="font-bold mb-5">{item.name}</h3>
                <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center justify-center">
                  {item.skills.map((data, index) => (
                    <SkillItem key={index} name={data.name} image={data.image}/>
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
